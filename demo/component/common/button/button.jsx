import { clearConfigCache } from "prettier";
import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import { isHover, isNotHover, container, onPage } from "./style";

/** @jsx Boostact.createElement */

const Button = ({ href, name }) => {
  const [hover, setHover] = Boostact.useState(isNotHover);
  const [clicked, setClicked] = Boostact.useState(false);
  const hoverIn = () => {
    setHover(isHover);
  };
  const hoverOut = () => {
    setHover(isNotHover);
  };

  if (href !== "/" && window.location.href.includes(href)) {
    setClicked(true);
    setHover(isHover);
  }

  return (
    <div>
      <Route.Link to={href} style={container}>
        <span onMouseOver={hoverIn} onMouseLeave={hoverOut} style={hover}>
          {name}
          {clicked ? <span style={onPage}></span> : undefined}
        </span>
      </Route.Link>
    </div>
  );
};
export default Button;
