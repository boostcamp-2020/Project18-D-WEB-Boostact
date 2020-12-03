import Boostact from "../src/boostact/Boostact";
import Context from "./Context";
import Test from "./Test";
import Test2 from "./Test2";
/** @jsx Boostact.createElement */

export const UseContextTest = () => {
  const CONTEXT = Boostact.useContext(Context);
  console.log(CONTEXT);

  return (
    <div>
      <Context.Provider value={{ value: "바뀐 값" }}>
        <Context.Provider value={{ value: "또또 바뀐 값" }}>
          <div>
            <Test></Test>
          </div>
        </Context.Provider>
        <Test></Test>
      </Context.Provider>
      <div>
        <Test2></Test2>
        <Context.Provider value={{ value: "바뀐것에서 또 바뀐 값." }}>
          <Test2></Test2>
          <Test2></Test2>
          <Test2></Test2>
          <Test2></Test2>
        </Context.Provider>
      </div>
    </div>
  );
};
