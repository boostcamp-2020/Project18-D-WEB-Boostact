import Boostact from "../../../../src/boostact/Boostact";
import NavContainer from "../container/container";
import { InstallList, ConceptList, HooksList } from "./contents";
import classes from "./style";
import { Context } from "../../../page/document/document";

/** @jsx Boostact.createElement */

const Docs = () => {
  return (
    <div className={classes.navContainer}>
      <NavContainer title="설치하기" lists={InstallList} context={Context} />
      <NavContainer title="주요 개념" lists={ConceptList} context={Context} />
      <NavContainer title="HOOKS" lists={HooksList} context={Context} />
    </div>
  );
};
export default Docs;
