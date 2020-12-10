import Boostact from "../../../src/boostact/Boostact";
import classes from "./style";
import Navigator from "../../component/navigation/document/navigator";
import DocumentRouter from "./documentRouter";
/** @jsx Boostact.createElement */

const Document = () => {
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
export default Document;
