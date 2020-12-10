import Boostact from "../../../../src/boostact/Boostact";
import NavContainer from "../container/container";
import classes from "./style";
import { exampleList } from "./contents";
import { Context } from "../../../page/example/example";

/** @jsx Boostact.createElement */

const Docs = () => {
  return (
    <div className={classes.navContainer}>
      <NavContainer title="목차" lists={exampleList} context={Context} />
    </div>
  );
};
export default Docs;
