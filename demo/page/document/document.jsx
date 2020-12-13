import Boostact from "../../../src/boostact/Boostact";
import classes from "./style";
import Navigator from "../../component/navigation/document/navigator";
import Router from "./documentRouter";
/** @jsx Boostact.createElement */

const initialValue = {
  container: "설치하기",
  list: "Hello World",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTAINER":
      if (state.container === action.value) {
        return { container: "", list: state.list };
      }
      return { container: action.value, list: state.list };
    case "SET_LIST":
      return { container: state.container, list: action.value };
  }
};
const Context = Boostact.createContext();

const Document = () => {
  const [states, dispatch] = Boostact.useReducer(reducer, initialValue);
  const actions = {
    setContainer: (value) => {
      dispatch({ type: "SET_CONTAINER", value });
    },
    setList: (value) => {
      dispatch({ type: "SET_LIST", value });
    },
  };

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Context.Provider value={{ states, actions }}>
        <div className={classes.DocumentPage}>
          <Router />
        </div>
        <div className={classes.ASide}>
          <Navigator />
        </div>
      </Context.Provider>
    </div>
  );
};
export { Document, Context };
