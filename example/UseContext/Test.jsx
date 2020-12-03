import Boostact from "../src/boostact/Boostact";
import Context from "./Context";

/** @jsx Boostact.createElement */

const Test = () => {
  const context = Boostact.useContext(Context);

  return (
    <div>
      <span> {context.value} </span>
    </div>
  );
};

export default Test;
