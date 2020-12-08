import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import NavContainer from "../navContainer/navContainer";
import { style } from "./style";
/** @jsx Boostact.createElement */

const Docs = () => {
  const contentsInstall = [
    { name: "Hello World", link: "/document" },
    { name: "Virtual DOM", link: "/tutorial" },
  ];

  const contentsConcept = [
    { name: "Hello World", link: "localhost:9000/start" },
    { name: "Virtual DOM", link: "localhost:9000/gaenyum" },
    { name: "HOOK 상태 관리", link: "localhost:9000/gaenyum" },
  ];

  const contentsHooks = [
    { name: "useState", link: "localhost:9000/start" },
    { name: "useEffect", link: "localhost:9000/start" },
    { name: "useContext", link: "localhost:9000/start" },
    { name: "useReducer", link: "localhost:9000/start" },
    { name: "useMemo", link: "localhost:9000/start" },
  ];

  return (
    <div style={style.navContainer}>
      <NavContainer title="설치하기" lists={contentsInstall} />
      <NavContainer title="주요 개념" lists={contentsConcept} />
      <NavContainer title="HOOKS" lists={contentsHooks} />
    </div>
  );
};
export default Docs;
