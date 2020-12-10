import Boostact from "../../../src/boostact/Boostact";
import Route from "../../../src/boostact/Route";

import HelloWorld from "./helloWorld/helloWorld";

/** @jsx Boostact.createElement */

const DocumentRouter = () => {
  return (
    <div id="ROUTING">
      <Route.Route path="/docs/hello_world" component={HelloWorld}></Route.Route>
      <Route.Route path="/docs/hello_world" component={HelloWorld}></Route.Route>
      <Route.Route path="/docs/hello_world" component={HelloWorld}></Route.Route>
    </div>
  );
};

export default DocumentRouter;
