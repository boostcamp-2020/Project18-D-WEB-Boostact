import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import classes from "./style";
/** @jsx Boostact.createElement */
const List = ({ name, link }) => {
  return (
    <li onClick={switchBold}>
      <Route.Link to={link}>
        <span className={classes.li}>{name}</span>
      </Route.Link>
    </li>
  );
};

const switchBold = (e) => {
  const lists = document.getElementsByTagName("li");
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.fontWeight = "normal";
  }
  e.target.closest("li").style.fontWeight = "bold";
};

export default List;
