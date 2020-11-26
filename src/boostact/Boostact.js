/* eslint-disable no-restricted-syntax */
let vRoot = null;
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
const workLoop = async (deadline) => {
  if (true) {
    await makeVDOM();
    reflectDOM();
  }
  // TODO: requestIdleCallback(workLoop);
};
const makeVRoot = () => {
  vRoot = {
    type: component.type,
    dom: null,
    alternate: vRoot,
    props: {
      children: [...component.props.children],
    },
    parent: {
      kks: "kang",
      dom: container,
    },
    effectTag: vRoot ? "UPDATE" : "PLACEMENT",
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
const makeVDOM = () => {
  return new Promise((resolve, reject) => {
    makeVRoot();
    let nextVNode = vRoot;
    while (nextVNode) {
      nextVNode = makeVNode(nextVNode);
    }
    resolve();
  });
};
const render = (element, root) => {
  component = typeof element === "function" ? element() : element;
  container = root;
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
};

const dertermineState = () => {};
const makeVnode = (element) => {};
// ppt 7 page
const reflectDOM = () => {};

const useState = (initValue) => {
  const value = initValue;
  const state = () => {
    return value;
  };
  const setState = (nextValue) => {};
  return [state, setState];
};

export { render, createElement };
