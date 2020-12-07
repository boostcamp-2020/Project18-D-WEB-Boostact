// import Boostact from "../src/boostact/Boostact";
// import Route from "../src/boostact/Route";
// import Document from "./page/document/document";

import Boostact from "../src/boostact/Boostact";
import Route from "../src/boostact/Route";
import Document from "./page/document/document";

/** @jsx Boostact.createElement */

const MainRouter = () => {
  return (
    <div id="ROUTING">
      <Route.Route path="/home" component={Document}></Route.Route>
    </div>
  );
};

export default MainRouter;
