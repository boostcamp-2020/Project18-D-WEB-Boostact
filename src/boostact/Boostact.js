/* eslint-disable no-restricted-syntax */

let vRoot = null;
let currentRoot = null;
let nextVNode = null;
let element;
let component, container;

const deletionQueue = [];
const FIRST_CHILD = 0;

let HOOKS = [];
let HOOK_ID = 0;

const createTextElement = (text) => {
  return {
    type: "TEXT_NODE",
    props: { nodeValue: text },
    children: [],
  };
};

function createElement(type, props, ...children) {
  const copiedChildren = children.flat(Infinity);
  return {
    type,
    props: {
      ...props,
      children: copiedChildren.map((child) => (typeof child === "object" ? child : createTextElement(child))),
    },
  };
}
const workLoop = (deadline) => {
  let isIdle = false;
  if (nextVNode === vRoot) {
    component = typeof element.type === "function" ? element.type(element.props) : element;
    makeVRoot();
    nextVNode = vRoot;
  }

  while (nextVNode && !isIdle) {
    nextVNode = makeVNode(nextVNode);
    isIdle = deadline.timeRemaining() < 1;
  }
  if (!nextVNode && vRoot) {
    reflectDOM(vRoot);
    currentRoot = vRoot;
    vRoot = null;
    HOOK_ID = 0;
  }
  requestIdleCallback(workLoop);
};

const appendVNode = (vNode, children) => {
  let index = FIRST_CHILD;
  let preSibling;
  let curChild = vNode.alternate && vNode.alternate.child;
  while ((children && index < children.length) || curChild) {
    if (vNode.type == "TEXT_NODE") {
      break;
    }
    let vChild = null;
    if (children && children[index] !== undefined) {
      vChild = { ...children[index] };
    if (typeof vChild.type === "function") {
      vChild = vChild.type(vChild.props);
        if (vChild.type === "CONTEXT" || vChild.type === "LINK" || vChild.type === "ROUTER") {
          children[index] = [...vChild.props.children];
          children = children.flat(Infinity);
          continue;
    }
    }
    }
    if (vChild) {
      vChild.parent = vNode;
    }
    if (index === FIRST_CHILD) {
      vNode.child = vChild;
      preSibling = vNode.child;
    } else if (preSibling) {
      preSibling.sibling = vChild;
      preSibling = preSibling.sibling;
    }
    determineState(curChild, vChild);
    if (curChild) {
      curChild = curChild.sibling;
    }
    index++;
  }
};

const makeVNode = (vNode) => {
  debugger;
  appendVNode(vNode, vNode.props.children);
  if (vNode.child) {
    return vNode.child;
  }
  if (vNode.sibling) {
    return vNode.sibling;
  }
  while (vNode.parent && !vNode.parent.sibling) {
    vNode = vNode.parent;
  }
  return vNode.parent && vNode.parent.sibling;
};

const makeVRoot = () => {
  vRoot = {
    type: component.type,
    dom: currentRoot && currentRoot.dom,
    alternate: currentRoot,
    props: {
      ...component.props,
    },
    parent: {
      dom: container,
    },
    effectTag: currentRoot ? "UPDATE" : "PLACEMENT",
  };
};

const shallowEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] && key === "style") {
      if (!shallowEqual(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const isUnchanged = (curChild, vChild) => {
  // props 비교
  const filterChildren = (child) => Object.fromEntries(Object.entries(child.props).filter(([key]) => key !== "children"));
  const curProps = filterChildren(curChild);
  const vProps = filterChildren(vChild);

  return shallowEqual(curProps, vProps);
};

const determineState = (curChild, vChild) => {
  const sameType = curChild && vChild && curChild.type === vChild.type;

  if (vChild && vChild.parent.effectTag === "PLACEMENT") {
    vChild.alternate = curChild;
    vChild.dom = null;
    vChild.effectTag = "PLACEMENT";
  } else if (sameType) {
    vChild.alternate = curChild;
    vChild.dom = curChild.dom;
    if (isUnchanged(curChild, vChild)) {
      vChild.effectTag = "NONE";
      return;
    }
    vChild.effectTag = "UPDATE";
  } else if (!vChild && !sameType) {
    curChild.effectTag = "DELETION";
    curChild.child = null;
    deletionQueue.push(curChild);
  } else if (!sameType) {
    vChild.alternate = curChild;
    vChild.dom = null;
    vChild.effectTag = "PLACEMENT";
  }
};

const render = (el, root) => {
  element = el;
  container = root;
  requestIdleCallback(workLoop);
};

const VNodeToRNode = (vNode) => {
  const newNode = vNode.type !== "TEXT_NODE" ? document.createElement(vNode.type) : document.createTextNode("");
  Object.keys(vNode.props)
    .filter((prop) => prop !== "children")
    .forEach((attribute) => {
      if (attribute.startsWith("on")) {
        const eventType = attribute.toLowerCase().substring(2);
        newNode.addEventListener(eventType, vNode.props[attribute]);
      } else if (attribute === "style") {
        Object.keys(vNode.props.style).forEach((prop) => {
          newNode["style"][prop] = vNode.props[attribute][prop];
        });
      } else {
        newNode[attribute] = vNode.props[attribute];
      }
    });
  return newNode;
};

const placeNode = (currentNode) => {
  const RNode = VNodeToRNode(currentNode);
  const parent = (currentNode && currentNode.parent) || currentNode;
  currentNode.dom = RNode;
  if (currentNode.alternate) {
    parent.dom.replaceChild(RNode, currentNode.alternate.dom);
  } else {
    parent.dom.appendChild(RNode);
  }
};

const updateNode = (currentNode) => {
  const newProps = currentNode.props;
  const oldProps = currentNode.alternate.props;
  const { dom } = currentNode;

  for (const name in oldProps) {
    if (name !== "children") {
      if (name.startsWith("on") && typeof newProps[name] === "function") {
        const eventType = name.toLowerCase().substring(2);
        dom.removeEventListener(eventType, oldProps[name]);
      } else if (!name.startsWith("on") && typeof newProps[name] !== "function") {
        if (currentNode.type === "TEXT_NODE") continue;
        dom.removeAttribute(name);
      }
    }
  }
  for (const name in newProps) {
    if (name !== "children") {
      if (name.startsWith("on") && typeof newProps[name] === "function") {
        const eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, newProps[name]);
      } else if (!name.startsWith("on") && typeof newProps[name] !== "function") {
        dom[name] = newProps[name];

        if (name === "style") {
          Object.keys(newProps[name]).forEach((prop) => {
            dom[name][prop] = newProps[name][prop];
          });
        }
      }
    }
  }
};

const reflectDOM = (node) => {
  let currentNode = node;
  deletionQueue.forEach((node) => {
    node.parent.dom.removeChild(node.dom);
  });
  deletionQueue.length = 0;
  while (currentNode) {
    switch (currentNode.effectTag) {
      case "PLACEMENT":
        placeNode(currentNode);
        break;
      case "UPDATE":
        updateNode(currentNode);
        break;
      case "NONE":
        break;
      default:
        console.log("알 수 없는 태그입니다!");
        break;
    }
    if (currentNode.child) {
      currentNode = currentNode.child;
      continue;
    }
    if (currentNode.sibling) {
      currentNode = currentNode.sibling;
      continue;
    }
    while (currentNode.parent && !currentNode.parent.sibling) {
      currentNode = currentNode.parent;
    }
    currentNode = currentNode.parent && currentNode.parent.sibling;
  }
};

const useState = (initValue) => {
  HOOKS[HOOK_ID] = HOOKS[HOOK_ID] || initValue;
  const CURRENT_HOOK_ID = HOOK_ID++;

  const setState = (nextValue) => {
    if (typeof nextValue === "function") {
      HOOKS[CURRENT_HOOK_ID] = nextValue(HOOKS[CURRENT_HOOK_ID]);
      nextVNode = vRoot;
      return;
    }
    HOOKS[CURRENT_HOOK_ID] = nextValue;
    nextVNode = vRoot;
  };
  return [HOOKS[CURRENT_HOOK_ID], setState];
};


const useReducer = (reducer, initialState) => {
  HOOKS[HOOK_ID] = HOOKS[HOOK_ID] || initialState;
  const CURRENT_HOOK_ID = HOOK_ID++;
  const currentValue = HOOKS[CURRENT_HOOK_ID];
  const dispatch = (action) => {
    HOOKS[CURRENT_HOOK_ID] = reducer(HOOKS[CURRENT_HOOK_ID], action);
    if (currentValue !== HOOKS[CURRENT_HOOK_ID]) nextVNode = vRoot;
  };

  return [HOOKS[CURRENT_HOOK_ID], dispatch];
};

const useEffect = (fn, arr) => {
  const CURRENT_HOOK_ID = HOOK_ID++;
  const useEffectHook = {
    cleanUp: null,
    beforeArr: [],
  };

  if (HOOKS[CURRENT_HOOK_ID] && HOOKS[CURRENT_HOOK_ID].beforeArr.length) {
    const { beforeArr } = HOOKS[CURRENT_HOOK_ID];
    beforeArr.some((el, i) => {
      if (el !== arr[i]) {
        HOOKS[CURRENT_HOOK_ID].beforeArr = arr;
        HOOKS[CURRENT_HOOK_ID].cleanUp();
        HOOKS[CURRENT_HOOK_ID].cleanUp = fn;
        return true;
      }
    });
  } else if (!HOOKS[CURRENT_HOOK_ID]) {
    HOOKS[CURRENT_HOOK_ID] = useEffectHook;
    HOOKS[CURRENT_HOOK_ID].cleanUp = fn;
    if (arr.length) {
      HOOKS[CURRENT_HOOK_ID].beforeArr = arr;
    }
  } else if (!HOOKS[CURRENT_HOOK_ID].beforeArr.length) {
    HOOKS[CURRENT_HOOK_ID].cleanUp();
    HOOKS[CURRENT_HOOK_ID].cleanUp = () => {};
  }
};

const createContext = (defaultValue) => {
  const CURRENT_HOOK_ID = HOOK_ID++;
  const useContextHook = {
    value: [defaultValue],
    Provider: (props) => {
      HOOKS[CURRENT_HOOK_ID].value.push(props.value);
      return {type:"CONTEXT", props:{children:props.children},context:HOOKS[CURRENT_HOOK_ID]};
    },
  };

  HOOKS[CURRENT_HOOK_ID] = HOOKS[CURRENT_HOOK_ID] || useContextHook;

  return HOOKS[CURRENT_HOOK_ID];
};

const useContext = (context) => {
  return context.value[context.value.length - 1];
};

export default { render, createElement, useState, useEffect, createContext, useContext, useReducer };
      
