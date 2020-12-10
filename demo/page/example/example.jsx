import Boostact from "../../../src/boostact/Boostact";
import Navigator from "../../component/navigation/example/navigator";
import classes from "./style";
import DocumentRouter from "../document/documentRouter";

/** @jsx Boostact.createElement */

const Example = () => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div className={classes.DocumentPage}>
        <DocumentRouter />
      </div>
      <div className={classes.ASide}>
        <Navigator />
      </div>
    </div>
  );
};
export default Example;
