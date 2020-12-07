import Boostact from "../src/boostact/Boostact";
import context from "./context";
/** @jsx Boostact.createElement */

const test = () => {
  const contextValue = Boostact.useContext(context);

  return (
    <div>
      <span>level 2 : {contextValue}</span>
    </div>
  );
};

export default test;
