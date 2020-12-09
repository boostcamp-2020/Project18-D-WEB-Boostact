import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import List from "./list";
import "@fortawesome/fontawesome-free/js/all";
import { style } from "./style";
/** @jsx Boostact.createElement */

const Docs = ({ lists, title }) => {
  const [clicked, setClicked] = Boostact.useState(false);

  const contents = lists.map(({ name, link }) => {
    return (
      <li onClick={switchBold}>
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

  const switchBold = (e) => {
    const lists = document.getElementsByTagName("li");
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.fontWeight = "normal";
    }
    e.target.closest("li").style.fontWeight = "bold";
  };

  const toggleContents = () => {
    setClicked(!clicked);
  };

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
