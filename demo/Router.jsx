// import Boostact from "../src/boostact/Boostact";
// import Route from "../src/boostact/Route";
// import Document from "./page/document/document";

import Boostact from "../src/boostact/Boostact";
import Route from "../src/boostact/Route";
import { Document } from "./page/document/document";
import Example from "./page/example/example";
import BugReport from "./page/bugReport/bugReport";
import IndexPage from "./page/IndexPage/BoostactIndex";

/** @jsx Boostact.createElement */

const MainRouter = () => {
  return (
    <div id="ROUTING">
      <Route.Route path="/" component={IndexPage}></Route.Route>
      <Route.Route path="/document" component={Document}></Route.Route>
      <Route.Route path="/examples" component={Example}></Route.Route>
      <Route.Route path="/bugReport" component={BugReport}></Route.Route>
    </div>
  );
};

export default MainRouter;
