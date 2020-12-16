import Boostact from "../../../../src/boostact/Boostact";
import {Link} from "../../../../src/boostact/Route";
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
      <Link to={link}>
        <span className={isClicked ? classes.liClicked : classes.li}>{name}</span>
      </Link>
    </li>
  );
};

export default List;
