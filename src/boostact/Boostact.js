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

const vRoot = {}; 
const workLoop = async () => {
  if (true) {
    const result = await makeVDOM();
    reflectDOM(result);
  }
  requestIdleCallback(workLoop);
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
// ppt 5,6  page
const makeVDOM = (component, vRoot) => {
  return new Promise( () => {

  })
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
