import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import NavContainer from "../navContainer/navContainer";
import classes from "./style";
/** @jsx Boostact.createElement */

const initialState = { opened: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 1:
      if (state.opened === 1) {
        return { opened: null };
      }
      return { opened: 1 };
    case 2:
      if (state.opened === 2) {
        return { opened: null };
      }
      return { opened: 2 };
    case 3:
      if (state.opened === 3) {
        return { opened: null };
      }
      return { opened: 3 };
    default:
      throw new Error("Invalid access !!");
  }
};

const Docs = () => {
  const [state, dispatch] = Boostact.useReducer(reducer, initialState);

  const contentsInstall = [
    { name: "Hello World", link: "/document" },
    { name: "Virtual DOM", link: "/tutorial" },
  ];

  const contentsConcept = [
    { name: "Hello World", link: "/test" },
    { name: "Virtual DOM", link: "/test" },
    { name: "HOOK 상태 관리", link: "/test" },
  ];

  const contentsHooks = [
    { name: "useState", link: "/test" },
    { name: "useEffect", link: "/test" },
    { name: "useContext", link: "/test" },
    { name: "useReducer", link: "/test" },
    { name: "useMemo", link: "/test" },
  ];

  return (
    <div className={classes.navContainer}>
      <NavContainer onClick={() => dispatch({ type: 1 })} title="설치하기" lists={contentsInstall} opened={state.opened === 1} />
      <NavContainer onClick={() => dispatch({ type: 2 })} title="주요 개념" lists={contentsConcept} opened={state.opened === 2} />
      <NavContainer onClick={() => dispatch({ type: 3 })} title="HOOKS" lists={contentsHooks} opened={state.opened === 3} />
    </div>
  );
};
export default Docs;
