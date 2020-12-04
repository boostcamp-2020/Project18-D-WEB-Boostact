import Boostact from "../src/boostact/Boostact";
import Route from "../src/boostact/Route";
import Home from "./Home";
import Timer from "./Timer";
import Todo from "./todoList/todoTemplate";
import Search from "./searchpage/main";

/** @jsx Boostact.createElement */

const About = (props) => {
  return (
    <div>
      <div id="title">타이틀</div>
      <ul>
        <li>
          <Route.Link to="/home">
            <span>Home</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/about">
            <span>About</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/Timer">
            <span>Timer</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/todo">
            <span>Todo</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/search">
            <span>search</span>
          </Route.Link>
        </li>
      </ul>
      <hr />
      <div id="ROUTING">
        <Route.Route path="/home" component={Home}></Route.Route>
        <Route.Route path="/about" component={About}></Route.Route>
        <Route.Route path="/timer" component={Timer}></Route.Route>
        <Route.Route path="/todo" component={Todo}></Route.Route>
        <Route.Route path="/search" component={Search}></Route.Route>
        <div>
          <h1>Hello World</h1>
          <h2>This is About!</h2>
        </div>
      </div>
    </div>
  );
};
export default About;
