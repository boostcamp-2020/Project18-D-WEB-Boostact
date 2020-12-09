import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import "@fortawesome/fontawesome-free/js/all";
import classes from "./style";
/** @jsx Boostact.createElement */

const Docs = ({ onClick, opened, lists, title }) => {
  const contents = lists.map(({ name, link }) => {
    return <List name={name} link={link} />;
  });

  const switchBold = (e) => {
    const lists = document.getElementsByTagName("li");
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.fontWeight = "normal";
    }
    e.target.closest("li").style.fontWeight = "bold";
  };

  return (
    <div>
      <button onClick={onClick} className={opened ? classes.buttonClicked : classes.buttonNotClicked}>
        {title}
        <i className="fas fa-chevron-down" style={{ marginLeft: "4px", fontSize: "12px" }}></i>
      </button>
      <ol className={opened ? classes.isClicked : classes.isNotClicked}>{contents}</ol>
    </div>
  );
};
export default Docs;
