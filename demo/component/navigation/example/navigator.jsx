import Boostact from "../../../../src/boostact/Boostact";
import NavContainer from "../container/container";
import classes from "./style";
import { exampleList } from "./contents";
/** @jsx Boostact.createElement */
const initialState = { opened: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case 1:
      if (state.opened === 1) {
        return { opened: null };
      }
      return { opened: 1 };

    default:
      throw new Error("Invalid access !!");
  }
};

const Docs = () => {
  const [state, dispatch] = Boostact.useReducer(reducer, initialState);

  return (
    <div className={classes.navContainer}>
      <NavContainer onClick={() => dispatch({ type: 1 })} title="예제" lists={exampleList} opened={state.opened === 1} />
    </div>
  );
};
export default Docs;
