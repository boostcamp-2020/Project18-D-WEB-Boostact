import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import "@fortawesome/fontawesome-free/js/all";
import List from "./list";
import classes from "./style";

import { Context } from "../../../page/document/document";
/** @jsx Boostact.createElement */

const Docs = ({ id, lists, title }) => {
  const { states, actions } = Boostact.useContext(Context);
  const isOpened = states.container === id;

  const contents = lists.map(({ name, link }) => {
    return <List name={name} link={link} />;
  });

  const doSetContainer = () => {
    if (states.container === id) {
      actions.setContainer(null);
      return;
    }
    actions.setContainer(id);
  };

  return (
    <div>
      <button onClick={doSetContainer} className={isOpened ? classes.buttonClicked : classes.buttonNotClicked}>
        {title}
        <i className="fas fa-chevron-down" style={{ marginLeft: "4px", fontSize: "12px" }}></i>
      </button>
      <ol className={isOpened ? classes.isClicked : classes.isNotClicked}>{contents}</ol>
    </div>
  );
};
export default Docs;
