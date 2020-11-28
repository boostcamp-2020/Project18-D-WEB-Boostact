/* eslint-disable no-restricted-syntax */
let vRoot = null;
let currentRoot = null;
let nextVNode = null;
let component, container;
const deletionQueue = [];
const FIRST_CHILD = 0;
const createTextElement = (text) => {
  return {
    type: "TEXT_NODE",
    props: { nodeValue: text },
    children: [],
  };
};
const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child !== "object" ? createTextElement(child) : child)),
    },
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
    vRoot = null;
  }
  requestIdleCallback(workLoop);
};
const createVNode = (vNode, children) => {
  let index = FIRST_CHILD;
  let preSibling;
  let curChild = vNode.alternate && vNode.alternate.child;
  while ((children && index < children.length) || curChild) {
    const vChild = { ...children[index] };
    if (vChild) {
      vChild.parent = vNode;
    }
    if (index === FIRST_CHILD) {
      vNode.child = vChild;
      preSibling = vNode.child;
    } else {
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
  createVNode(vNode, vNode.props.children);
  if (vNode.child) {
    return vNode.child;
  }
  if (vNode.sibling) {
    return vNode.sibling;
  }
  while (vNode.parent && !vNode.parent.sibling) {
    vNode = vNode.parent;
  }
  return vNode.parent?.sibling;
};
const makeVRoot = () => {
  vRoot = {
    type: component.type,
    dom: null,
    alternate: currentRoot,
    props: {
      children: [...component.props.children],
    },
    parent: {
      esterEgg: "made_by_boostCamp",
      J001: "kks",
      J013: "ksh",
      J107: "sji",
      J200: "jhy",
      dom: container,
    },
    effectTag: currentRoot? "UPDATE" : "PLACEMENT",
  };
};
const determineState = (curChild, vChild) => {
  const sameType = curChild && vChild && curChild.type === vChild.type;
  if (sameType) {
    vChild.alternate = curChild;
    vChild.dom = curChild.dom;
    vChild.effectTag = "UPDATE";
  }
  if (!vChild && !sameType) {
    curChild.effectTag = "DELETION";
    curChild.child = null;
    deletionQueue.push(curChild);
  }
  if (!sameType) {
    vChild.alternate = curChild;
    vChild.dom = null;
    vChild.effectTag = "PLACEMENT";
  }
};

const render = (element, root) => {
  component = typeof element === "function" ? element() : element;
  container = root;
  makeVRoot();
  nextVNode = vRoot;
  requestIdleCallback(workLoop);
};
const VNodeToRNode = (vnode) => {
  const newNode = vnode.type !== "TEXT_NODE" ? document.createElement(vnode.type) : document.createTextNode("");
  Object.keys(vnode.props)
    .filter((prop) => prop !== "children")
    .forEach((attribute) => {
      if (attribute.startsWith("on")) {
        const eventType = attribute.toLowerCase().substring(2);
        newNode.addEventListener(eventType, vnode.props[attribute]);
      } else newNode[attribute] = vnode.props[attribute];
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
    if (!(name in newProps) && name !== "children") {
      if (name.startsWith("on") && typeof newProps[name] === "function") {
        const eventType = name.toLowerCase().substring(2);
        dom.removeEventListener(eventType, oldProps[name]);
      } else if (!name.startsWith("on") && typeof newProps[name] !== "function") {
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
      }
    }
  }
};
const deleteNode = (currentNode) => {
  currentNode.parent.dom.removeChild(currentNode);
  deletionQueue.unshift();
};
const reflectDOM = (node) => {
  let currentNode = node;
  deletionQueue.forEach((node) => {
    reflectDOM(node);
  });
  while (currentNode) {
    switch (currentNode.effectTag) {
      case "PLACEMENT":
        placeNode(currentNode);
        break;
      case "UPDATE":
        updateNode(currentNode);
        break;
      case "DELETION":
        deleteNode(currentNode);
        break;
      default:
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
    currentNode = currentNode.parent?.sibling;
  }
};
const useState = (initValue) => {
  const value = initValue;
  const state = () => {
    return value;
  };
  const setState = (nextValue) => {};
  return [state, setState];
};
export default { render, createElement };
