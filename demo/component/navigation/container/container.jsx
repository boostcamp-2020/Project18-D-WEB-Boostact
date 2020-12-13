import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import "@fortawesome/fontawesome-free/js/all";
import List from "./list";
import classes from "./style";

/** @jsx Boostact.createElement */

const Container = ({ lists, title, context }) => {
  const { states, actions } = Boostact.useContext(context);
  const isOpened = states.container === title;
  const contents = lists.map(({ name, link }) => {
    return <List name={name} link={link} context={context} />;
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
export default Container;
