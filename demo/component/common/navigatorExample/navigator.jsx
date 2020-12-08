import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import NavContainer from "../navContainer/navContainer";
import { style } from "./style";
/** @jsx Boostact.createElement */

const Docs = () => {
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
      <NavContainer title="예제" lists={contentsExample} opened={true} />
    </div>
  );
};
export default Docs;
