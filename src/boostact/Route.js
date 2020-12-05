import Router from "vanilla-router";
import Boostact from "./Boostact";

/** @jsx Boostact.createElement */

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
      Boostact.initHook();
      Boostact.reRender();
    });
  }
  if (window.location.href === `${window.location.origin}${props.path}`) {
    props = {
      ...props,
      children: [Boostact.createElement(props.component)],
    };
  }
  return { type: "ROUTER", props };
};

const router = new Router({
  mode: "history",
  page404(path) {
    console.log(`"/${path}" Page not found`);
  },
});

window.router = router;

export default { Link, Route };
