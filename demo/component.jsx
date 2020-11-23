import BoostAct from '../src/boostact';
import FunElement from "./funtionalComponent";

/** @jsx BoostAct.createElement */
const element = (
    <div>    
      <div style="background: yellow">
        <h1>Hello World</h1>
        <h2 style="text-align:right">from BoostAct</h2>
      </div>
      <FunElement />
    </div>

  );

  export default element;