import Boostact from "../src/boostact/Boostact";
import Context from "./Context";

/** @jsx Boostact.createElement */

const Test2 = () => {
  const context = Boostact.useContext(Context);

  return (
    <div>
      <span> {context.value} </span>
    </div>
  );
};

export default Test2;
