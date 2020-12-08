import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import { style } from "./style";

/** @jsx Boostact.createElement */

const A = (props) => {
  const { link, name } = props;
  return (
    <a href={link} style={style.a} onMouseOver={(e) => (e.target.style.color = "#61dafb")} onMouseOut={(e) => (e.target.style.color = "white")}>
      {name}
    </a>
  );
};
export default A;
