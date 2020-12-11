// aws key
/* eslint-disable no-restricted-syntax */

let vRoot = null;
let currentRoot = null;
let nextVNode = null;
let element;
let component;
let container;
const defaultContext = [];
let currentContext;

const deletionQueue = [];
const FIRST_CHILD = 0;
const INIT_VALUE = 0;

const HOOKS = [];
let HOOK_ID = 0;
const CONTEXTS = [];
let CONTEXT_ID = 0;

const initHook = () => {
  HOOKS.forEach((hook, index) => {
    if (index >= HOOK_ID && hook && hook.cleanUp) {
      hook.cleanUp();
    }
  });
  HOOKS.length = HOOK_ID;
  currentContext = defaultContext;
  return HOOKS;
};

const createTextElement = (text) => {
  return {
    type: "TEXT_NODE",
    props: { nodeValue: text },
    value: null,
  };
};

const createElement = (type, props, ...children) => {
  const copiedChildren = children.flat(Infinity);
  return {
    type,
    props: {
      ...props,
      children: copiedChildren.map((child) => (typeof child === "object" ? child : createTextElement(child))),
    },
    value: null,
  };
};

const workLoop = (deadline) => {
  let isIdle = false;
  while (nextVNode && !isIdle) {
    nextVNode = makeVNode(nextVNode);
    isIdle = deadline.timeRemaining() < 1;
  }
  if (!nextVNode && vRoot) {
    reflectDOM(vRoot);
    currentRoot = vRoot;
    vRoot = undefined;
    HOOK_ID = INIT_VALUE;
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
      if (children[index].context) {
        currentContext = children[index].context;
      } else {
        currentContext = vNode.context;
      }
      if (typeof vChild.type === "function") {
        vChild = vChild.type(vChild.props);

        if (vChild.type === "CONTEXT" || vChild.type === "LINK" || vChild.type === "ROUTER") {
          children[index] = [...vChild.props.children];
          children = children.flat(Infinity);
          continue;
        }
      }
      vChild.context = currentContext;
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
  if (typeof vNode.type === "function") {
    vNode = vNode.type(vNode.props);
  }

  appendVNode(vNode, vNode.props && vNode.props.children);
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
  if (typeof element.type === "function") {
    component = element.type(element.props);
  }

  while (typeof component.type === "function") {
    component = component.type(component.props);
  }

  const temp = {
    type: component.type,
    dom: currentRoot && currentRoot.dom,
    alternate: currentRoot,
    props: {
      ...component.props,
    },
    parent: {
      dom: container,
    },
    child: currentRoot && currentRoot.child,
    effectTag: currentRoot && currentRoot.type === component.type ? (isUnchanged(currentRoot, component) ? "NONE" : "UPDATE") : "PLACEMENT",
    context: [...defaultContext],
  };

  return temp;
};

const shallowEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    // if(typeof object1[key] === "function") continue;
    if (object1[key] && key === "style") {
      if (!object2[key] || !shallowEqual(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const isUnchanged = (curChild, vChild) => {
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
  vRoot = makeVRoot();
  nextVNode = vRoot;
};

const reRender = () => {
  if (!nextVNode) {
    HOOK_ID = 0;
    vRoot = makeVRoot();
    if(nextVNode){
      vRoot = nextVNode;
    }
    nextVNode = vRoot;
  }
};

requestIdleCallback(workLoop);

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
          newNode.style[prop] = vNode.props[attribute][prop];
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
  if (currentNode.alternate && currentNode.parent.effectTag !== "PLACEMENT") {
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
        if(name === "className"){
          dom.removeAttribute("class")
          continue;
        }
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
        throw new Error("reflectDOM : currentNode.effectTag is undefined.");
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
    typeof nextValue === "function" ? (HOOKS[CURRENT_HOOK_ID] = nextValue(HOOKS[CURRENT_HOOK_ID])) : (HOOKS[CURRENT_HOOK_ID] = nextValue);
    reRender();
  };
  return [HOOKS[CURRENT_HOOK_ID], setState];
};

const useReducer = (reducer, initialState) => {
  HOOKS[HOOK_ID] = HOOKS[HOOK_ID] || initialState;
  const CURRENT_HOOK_ID = HOOK_ID++;
  const currentValue = HOOKS[CURRENT_HOOK_ID];
  const dispatch = (action) => {
    HOOKS[CURRENT_HOOK_ID] = reducer(HOOKS[CURRENT_HOOK_ID], action);
    if (currentValue !== HOOKS[CURRENT_HOOK_ID]) {
      reRender();
    }
  };

  return [HOOKS[CURRENT_HOOK_ID], dispatch];
};

const useEffect = (fn, arr) => {
  if (!fn) {
    throw new Error("Note : did you forget parameters?");
  }

  if (!arr) {
    throw new Error("If you don't want to observe any variable, you have to put an empty array.");
  }

  const CURRENT_HOOK_ID = HOOK_ID++;
  const useEffectHook = {
    cleanUp: null,
    work: null,
    beforeArr: [],
  };

  if (HOOKS[CURRENT_HOOK_ID] && HOOKS[CURRENT_HOOK_ID].beforeArr.length) {
    const { beforeArr } = HOOKS[CURRENT_HOOK_ID];
    beforeArr.some((el, i) => {
      if (el !== arr[i]) {
        HOOKS[CURRENT_HOOK_ID].beforeArr = arr;
        if (typeof HOOKS[CURRENT_HOOK_ID].cleanUp === "function") {
          HOOKS[CURRENT_HOOK_ID].cleanUp();
        }

        HOOKS[CURRENT_HOOK_ID].cleanUp = HOOKS[CURRENT_HOOK_ID].work();
        if (HOOKS[CURRENT_HOOK_ID].cleanUp && typeof HOOKS[CURRENT_HOOK_ID].cleanUp !== "function") {
          throw new Error("useEffect must be return function.");
        }
        return true;
      }
    });
  } else if (!HOOKS[CURRENT_HOOK_ID]) {
    HOOKS[CURRENT_HOOK_ID] = useEffectHook;
    HOOKS[CURRENT_HOOK_ID].work = fn;
    if (arr.length) {
      HOOKS[CURRENT_HOOK_ID].beforeArr = arr;
    }
    HOOKS[CURRENT_HOOK_ID].cleanUp = HOOKS[CURRENT_HOOK_ID].work();
    if (HOOKS[CURRENT_HOOK_ID].cleanUp && typeof HOOKS[CURRENT_HOOK_ID].cleanUp !== "function") {
      throw new Error("useEffect must be return function.");
    }
  } else if (!HOOKS[CURRENT_HOOK_ID].beforeArr.length) {
   if (typeof HOOKS[CURRENT_HOOK_ID].cleanUp === "function") {
     HOOKS[CURRENT_HOOK_ID].cleanUp();
   }
    HOOKS[CURRENT_HOOK_ID].work = fn;
    HOOKS[CURRENT_HOOK_ID].cleanUp = HOOKS[CURRENT_HOOK_ID].work();
    if (HOOKS[CURRENT_HOOK_ID].cleanUp && typeof HOOKS[CURRENT_HOOK_ID].cleanUp !== "function") {
      throw new Error("useEffect must be return function");
    }
  }
};

const useMemo = (func, arr) => {
  if (!arr || !func) {
    throw new Error("useMemo Hook must have two parameter... (example. useMemo(func, array)");
  }

  const CURRENT_HOOK_ID = HOOK_ID++;
  if (!HOOKS[CURRENT_HOOK_ID]) {
    HOOKS[CURRENT_HOOK_ID] = { value: func(), beforeArr: arr };
    return HOOKS[CURRENT_HOOK_ID].value;
  }

  if (HOOKS[CURRENT_HOOK_ID].beforeArr.length !== arr.length) {
    HOOKS[CURRENT_HOOK_ID] = { value: func(), beforeArr: arr };
    return HOOKS[CURRENT_HOOK_ID].value;
  }

  const result = HOOKS[CURRENT_HOOK_ID].beforeArr.some((el, i) => {
    if (el !== arr[i]) {
      HOOKS[CURRENT_HOOK_ID] = { value: func(), beforeArr: arr };
      return true;
    }
  });

  if (!result) {
    return HOOKS[CURRENT_HOOK_ID].value;
  } else {
    return func();
  }
};

const useCallback = (func, arr) => {
  if (!arr || !func) {
    throw new Error("useCallback Hook must have two parameter... (example. useCallback(func, array)");
  }
  return useMemo(() => func, arr);
};

const useContext = (context) => {
  if (!context) {
    throw new Error("Parameter is nothing. (ex. useContext(context))");
  }
  if (context.id === null || context.id === undefined) {
    throw new Error("Maybe it's not context... Because it doesn't have context.\"id\"");
  }
  return currentContext[context.id];
};

const createContext = (defaultValue) => {
  const CURRENT_CONTEXT_ID = CONTEXT_ID++;
  defaultContext[CURRENT_CONTEXT_ID] = defaultValue;
  currentContext = defaultContext;
  const useContextHook = {
    id: CURRENT_CONTEXT_ID,
    Provider: (props) => {
      const newContext = [...currentContext];
      newContext[CURRENT_CONTEXT_ID] = props.value;
      props.children.forEach((child) => {
        child.context = newContext;
      });
      return { type: "CONTEXT", props: { children: props.children } };
    },
  };

  CONTEXTS[CURRENT_CONTEXT_ID] = CONTEXTS[CURRENT_CONTEXT_ID] || useContextHook;
  return CONTEXTS[CURRENT_CONTEXT_ID];
};

export default { render, createElement, useState, useEffect, createContext, useContext, useReducer, initHook, reRender, useMemo, useCallback };
