import Boostact from "../../../src/boostact/Boostact";
import Route from "../../../src/boostact/Route";

import HelloWorld from "./index/helloWorld";
import virtualDom from "./index/virtualDom";
import hooksState from "./index/hooksState";
import useState from "./index/useState";
import useEffect from "./index/useEffect";
import useContext from "./index/useContext";
import useReducer from "./index/useReducer";
import useMemo from "./index/useMemo";
import useCallback from "./index/useCallback";

/** @jsx Boostact.createElement */

const DocumentRouter = () => {
  return (
    <div>
      <Route.Route exact path="/docs" component={HelloWorld}></Route.Route>
      <Route.Route path="/docs/hello_world" component={HelloWorld}></Route.Route>
      <Route.Route path="/docs/virtual_dom" component={virtualDom}></Route.Route>
      <Route.Route path="/docs/hooks_state" component={hooksState}></Route.Route>
      <Route.Route path="/docs/useState" component={useState}></Route.Route>
      <Route.Route path="/docs/useEffect" component={useEffect}></Route.Route>
      <Route.Route path="/docs/useContext" component={useContext}></Route.Route>
      <Route.Route path="/docs/useReducer" component={useReducer}></Route.Route>
      <Route.Route path="/docs/useMemo" component={useMemo}></Route.Route>
      <Route.Route path="/docs/useCallback" component={useCallback}></Route.Route>
    </div>
  );
};

export default DocumentRouter;
