import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import "@fortawesome/fontawesome-free/js/all";
import { style } from "./style";
/** @jsx Boostact.createElement */

const Docs = ({ onClick, opened, lists, title }) => {
  const contents = lists.map(({ name, link }) => {
    return (
      <li>
        <Route.Link to={link}>
          <span
            style={style.li}
            onMouseOver={(e) => (e.target.style.color = "#6d6d6d")}
            onMouseOut={(e) => (e.target.style.color = "black")}
            style={opened ? { fontWeight: "bold" } : { color: "red" }}
          >
            {name}
          </span>
        </Route.Link>
      </li>
    );
  });

  return (
    <div>
      <button onClick={onClick} style={opened ? style.buttonClicked : style.buttonNotClicked}>
        {title}
        <i className="fas fa-chevron-down" style={opened ? style.iconClicked : style.iconNotClicked}></i>
      </button>
      <ol style={opened ? style.isClicked : style.isNotClicked}>{contents}</ol>
    </div>
  );
};
export default Docs;
