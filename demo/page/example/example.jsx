import Boostact from "../../../src/boostact/Boostact";
import Navigator from "../../component/navigation/example/navigator";
import classes from "./style";
import DocumentRouter from "../document/documentRouter";

/** @jsx Boostact.createElement */
const Context = Boostact.createContext();

const Example = () => {
  const [container, setContainer] = Boostact.useState("예제");
  const [list, setList] = Boostact.useState("useState");

  const value = {
    states: { container, list },
    actions: { setContainer, setList },
  };

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Context.Provider value={value}>
        <div className={classes.DocumentPage}>
          <DocumentRouter />
        </div>
        <div className={classes.ASide}>
          <Navigator />
        </div>
      </Context.Provider>
    </div>
  );
};
export { Example, Context };
