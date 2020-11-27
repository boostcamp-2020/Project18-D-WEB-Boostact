import BoostAct from '../src/boostact';

/** @jsx BoostAct.createElement */
const funElement = () =>{
  let state = 1;
  setInterval(()=> {state+=1; console.log(state);},2000)
    return (
    <div style="background: blue">
      <h1>BoostAct Support functional Element {state}</h1>
      <h2 style="text-align:left">from BoostAct</h2>
    </div>
    )
};

  export default funElement;