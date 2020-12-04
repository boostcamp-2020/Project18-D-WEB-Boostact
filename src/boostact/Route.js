import Router from "vanilla-router";
import Boostact from "./Boostact";
import Home from "../../demo/Home";
import About from "../../demo/About";
import Timer from "../../demo/Timer";
import Todo from "../../demo/todoList/todoTemplate";
import Search from "../../demo/searchpage/main";

/** @jsx Boostact.createElement */

const Link = (props) => {
  const onclick = () => {
    window.router.navigateTo(props.to);
  };

  if (props.children.length === 1) {
    props.children[0].props.onClick = onclick;
    return { type: "LINK", props };
  } else {
    throw new Error("Link must habe only one child.");
  }
};

const Route = (props) => {
  return { type: "ROUTER", props };
};

const router = new Router({
  mode: "history",
  root: "",
  hooks: {
    before: (newPage) => {
      console.info("Before page loads hook", newPage);
    },
  },
  page404(path) {
    console.log(`"/${path}" Page not found`);
  },
});

router
  .add("/home", function () {
    const container = document.getElementById("root");
    console.log(Boostact.initHook());
    Boostact.render(<Home />, container);
  })
  .add("about", () => {
    const container = document.getElementById("root");
    console.log(Boostact.initHook());
    Boostact.render(<About />, container);
  })
  .add("timer", () => {
    const container = document.getElementById("root");
    console.log(Boostact.initHook());
    Boostact.render(<Timer />, container);
  })
  .add("todo", () => {
    const container = document.getElementById("root");
    console.log(Boostact.initHook());
    Boostact.render(<Todo />, container);
  })
  .add("search", () => {
    const container = document.getElementById("root");
    console.log(Boostact.initHook());
    Boostact.render(<Search />, container);
  });

window.router = router;

export default { Link, Route };
