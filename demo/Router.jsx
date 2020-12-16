import Boostact from "../src/boostact/Boostact";
import {Route, Link} from "../src/boostact/Route";
import { Document } from "./page/document/document";
import BugReport from "./page/bugReport/bugReport";
import IndexPage from "./page/IndexPage/BoostactIndex";
import HelloWorld from "./page/document/index/helloWorld";

/** @jsx Boostact.createElement */

const MainRouter = () => {
  return (
    <div id="ROUTING">
      <Route exact path="/" component={IndexPage}></Route>
      <Route path="/docs" component={Document}></Route>
      <Route path="/bugReport" component={BugReport}></Route>
    </div>
  );
};

export default MainRouter;
