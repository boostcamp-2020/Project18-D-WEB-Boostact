import Boostact from "../../../../src/boostact/Boostact";
import NavContainer from "../navContainer/navContainer";
import { style } from "./style";
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

  const contentsExample = [
    { name: "useState", link: "/useState" },
    { name: "useEffect", link: "/useEffect" },
    { name: "useReducer", link: "/useReducer" },
    { name: "useContext", link: "/useContext" },
    { name: "useMemo", link: "/useMemo" },
    { name: "useCallback", link: "/useCallback" },
  ];

  return (
    <div style={style.navContainer}>
      <NavContainer onClick={() => dispatch({ type: 1 })} title="예제" lists={contentsExample} opened={state.opened === 1} />
    </div>
  );
};
export default Docs;
