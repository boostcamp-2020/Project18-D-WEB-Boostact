import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import "@fortawesome/fontawesome-free/js/all";
import { style } from "./style";
/** @jsx Boostact.createElement */

const Docs = ({ lists, title }) => {
  const [clicked, setClicked] = Boostact.useState(false);
  // const [hovered, setHovered] = Boostact.useState(false);
  const contents = lists.map(({ name, link }) => {
    return (
      <li>
        <Route.Link to={link}>
          <span
            style={style.li}
            onMouseOver={(e) => (e.target.style.color = "#6d6d6d")}
            onMouseOut={(e) => (e.target.style.color = "black")}
            style={clicked ? { fontWeight: "bold" } : { color: "red" }}
          >
            {name}
          </span>
        </Route.Link>
      </li>
    );
  });

  const toggleContents = () => {
    setClicked(!clicked);
  };

  // const hoverContents = () => {
  //   setHovered(!hovered);
  // };

  return (
    <div>
      <button onClick={toggleContents} style={clicked ? style.buttonClicked : style.buttonNotClicked}>
        {title}
        <i className="fas fa-chevron-down" style={clicked ? style.iconClicked : style.iconNotClicked}></i>
      </button>
      <ol style={clicked ? style.isClicked : style.isNotClicked}>{contents}</ol>
    </div>
  );
};
export default Docs;
