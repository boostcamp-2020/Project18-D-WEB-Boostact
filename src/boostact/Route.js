import Router from "vanilla-router";
import Boostact from "./Boostact";

/** @jsx Boostact.createElement */

Router.prototype.duplicate = function (rule) {
  return this.routes.some((route) => route.rule.toString() === this._parseRouteRule(rule).toString());
};

const Link = (props) => {
  const onclick = () => {
    window.router.navigateTo(props.to);
  };

  if (props.children.length === 1) {
    props.children[0].props.onClick = onclick;
    return { type: "LINK", props };
  }
  throw new Error("Link must habe only one child.");
};

const Route = (props) => {
  if (!window.router.duplicate(props.path)) {
    window.router.add(props.path, () => {
      window.scrollTo(0, 0);
      if (!props.isContained) Boostact.initHook();
      Boostact.reRender();
    });
  }

  if (window.location.pathname === "/" && props.path === "/") {
    props = {
      ...props,
      children: [Boostact.createElement(props.component)],
    };
    return { type: "ROUTER", props };
  } else if (props.path !== "/" && props.exact && window.location.pathname === props.path) {
    props = {
      ...props,
      children: [Boostact.createElement(props.component)],
    };
    return { type: "ROUTER", props };
  } else if (props.path !== "/" && !props.exact && window.location.pathname.includes(props.path)) {
    props = {
      ...props,
      children: [Boostact.createElement(props.component)],
    };
    return { type: "ROUTER", props };
  } else {
    return { type: "ROUTER", props };
  }
};

const router = new Router({
  mode: "history",
  page404(path) {
    console.log(`"/${path}" Page not found`);
  },
});

window.router = router;

export { Link, Route };
