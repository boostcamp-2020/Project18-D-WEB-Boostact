const BoostactDOM = () => {
  function render(element, container) {
    if (!container) return;

    const dom = element.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);
    const isProperty = (key) => key !== "children";
    Object.keys(element.props)
      .filter(isProperty)
      .forEach((name) => {
        dom[name] = element.props[name];
        if (name === "style") {
          Object.keys(element.props.style).forEach((css) => {
            dom.style[css] = element.props.style[css];
          });
        }
      });
    element.props.children.forEach((child) => render(child, dom));
    container.appendChild(dom);
  }

  return { render };
};

export default BoostactDOM();
