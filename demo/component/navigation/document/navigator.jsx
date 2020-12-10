import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import NavContainer from "../container/container";
import { InstallList, ConceptList, HooksList } from "./contents";
import classes from "./style";
/** @jsx Boostact.createElement */

const Docs = () => {
  return (
    <div className={classes.navContainer}>
      <NavContainer title="설치하기" lists={InstallList} />
      <NavContainer title="주요 개념" lists={ConceptList} />
      <NavContainer title="HOOKS" lists={HooksList} />
    </div>
  );
};
export default Docs;
