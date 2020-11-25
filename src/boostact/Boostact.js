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
      children: children.map((child) => {
        if (typeof child !== "object") {
          createTextElement(child);
        }
        return child;
      }),
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

const render = (component, container) => {
  vRoot.dom = container;
  requestIdleCallback(workLoop);
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
