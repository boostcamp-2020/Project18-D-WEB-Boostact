const Boostact = () => {
  function createTextElement(text) {
    if (!text) return;
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    };
  }

  function createElement(type, props, ...children) {
    console.log(this);
    return {
      type,
      props: {
        ...props,
        children: children.map((child) => (typeof child === "object" ? child : this.createTextElement(child))),
      },
    };
  }

  return { createElement, createTextElement };
};

export default Boostact();
