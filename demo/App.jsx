import Boostact from "../src/boostact/Boostact";
import context from "./context";
import Test from "./test";

/** @jsx Boostact.createElement */

const App = () => {
  const contextValue = Boostact.useContext(context);

  return (
    <div>
      <Test />
      <context.Provider value={2}>
        <div style={{ border: "1px solid black" }}>
          <Test />
          <Test />
        </div>
        <context.Provider value={3}>
          <Test />
          <Test />
        </context.Provider>
        <Test />
        <Test />
      </context.Provider>
    </div>
  );
};

export default App;
