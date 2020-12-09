import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import List from "./list";
import "@fortawesome/fontawesome-free/js/all";
import { style } from "./style";
/** @jsx Boostact.createElement */

const Docs = ({ onClick, opened, lists, title }) => {
  const contents = lists.map(({ name, link }) => {
    return <List name={name} link={link} />;
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
