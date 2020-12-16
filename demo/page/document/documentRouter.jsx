import Boostact from "../../../src/boostact/Boostact";
import {Route, Link} from "../../../src/boostact/Route";

import HelloWorld from "./index/helloWorld";
import virtualDom from "./index/virtualDom";
import hooksState from "./index/hooksState";
import useState from "./index/useState";
import useEffect from "./index/useEffect";
import useContext from "./index/useContext";
import useReducer from "./index/useReducer";
import useMemo from "./index/useMemo";
import useCallback from "./index/useCallback";
import guide from "./index/guide";

/** @jsx Boostact.createElement */

const DocumentRouter = () => {
  return (
    <div>
      <Route exact path="/docs" component={HelloWorld} isContained></Route>
      <Route path="/docs/virtual_dom" component={virtualDom} isContained></Route>
      <Route path="/docs/hooks_guide" component={guide} isContained></Route>
      <Route path="/docs/hooks_state" component={hooksState} isContained></Route>
      <Route path="/docs/useState" component={useState} isContained></Route>
      <Route path="/docs/useEffect" component={useEffect} isContained></Route>
      <Route path="/docs/useContext" component={useContext} isContained></Route>
      <Route path="/docs/useReducer" component={useReducer} isContained></Route>
      <Route path="/docs/useMemo" component={useMemo} isContained></Route>
      <Route path="/docs/useCallback" component={useCallback} isContained></Route>
    </div>
  );
};

export default DocumentRouter;
