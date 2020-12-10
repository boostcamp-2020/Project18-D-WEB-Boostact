import Boostact from "../../../../src/boostact/Boostact";
import "@fortawesome/fontawesome-free/js/all";
import List from "./list";
import classes from "./style";

import { Context } from "../../../page/document/document";
/** @jsx Boostact.createElement */

const Docs = ({ id, lists, title }) => {
  const { states, actions } = Boostact.useContext(Context);
  const isOpened = states.container === title;

  const contents = lists.map(({ name, link }) => {
    return <List name={name} link={link} />;
  });

  const doSetContainer = () => {
    if (states.container === title) {
      actions.setContainer(null);
      return;
    }
    actions.setContainer(title);
  };

  return (
    <div>
      <button onClick={doSetContainer} className={isOpened ? classes.buttonClicked : classes.buttonNotClicked}>
        {title}
      </button>
      <ol className={isOpened ? classes.isClicked : classes.isNotClicked}>{contents}</ol>
    </div>
  );
};
export default Docs;
