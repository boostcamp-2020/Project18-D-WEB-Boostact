function createElement(type, props, ...children) {
    if (typeof type === "function") {
        return type(props);
    }
    return {
        type,
        props: {
            ...props,
            children: children.map((child) =>
                typeof child === "object" ? child : createTextElement(child)
            ),
        },
    };
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}

function render(element, container) {
    const dom =
        element.type == "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(element.type);
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

export default { render, createElement };
