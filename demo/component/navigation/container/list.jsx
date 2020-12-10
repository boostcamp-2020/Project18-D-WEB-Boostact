import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import classes from "./style";

/** @jsx Boostact.createElement */
const List = ({ name, link, context }) => {
  const { states, actions } = Boostact.useContext(context);
  const isClicked = states.list === name;

  const switchBold = () => {
    actions.setList(name);
  };

  return (
    <li onClick={switchBold}>
      <Route.Link to={link}>
        <span className={isClicked ? classes.liClicked : classes.li}>{name}</span>
      </Route.Link>
    </li>
  );
};

export default List;
