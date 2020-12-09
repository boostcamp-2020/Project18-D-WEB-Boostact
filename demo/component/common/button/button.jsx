import { clearConfigCache } from "prettier";
import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import { isHover, isNotHover, container, onPage } from "./style";

/** @jsx Boostact.createElement */

const Button = ({ href, name }) => {
  const isOnPage = href !== "/" && window.location.href.includes(href);
  const [clicked, setClicked] = Boostact.useState(isOnPage ? true : false);
  const [style, setStyle] = Boostact.useState(isOnPage ? isHover : isNotHover);

  const hoverIn = () => {
    setStyle(isHover);
  };
  const hoverOut = () => {
    if (!clicked) setStyle(isNotHover);
  };

  if (href !== "/" && window.location.href.includes(href)) {
    setClicked(true);
  }

  return (
    <div>
      <Route.Link to={href} style={container}>
        <span onMouseOver={hoverIn} onMouseOut={hoverOut} style={style}>
          {name}
          {clicked ? <span style={onPage(name.length)}></span> : <span />}
        </span>
      </Route.Link>
    </div>
  );
};
export default Button;
