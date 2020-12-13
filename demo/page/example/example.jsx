import Boostact from "../../../src/boostact/Boostact";
import Navigator from "../../component/navigation/example/navigator";
import classes from "./style";
import Router from "./router";
import ControllButton from "./controllButton";

/** @jsx Boostact.createElement */

const initialValue = {
  container: "목차",
  list: "page_1",
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

const Example = () => {
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
          <ControllButton />
        </div>
        <div className={classes.ASide}>
          <Navigator />
        </div>
      </Context.Provider>
    </div>
  );
};
export { Example, Context };
