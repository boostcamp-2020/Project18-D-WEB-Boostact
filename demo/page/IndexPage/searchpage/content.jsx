import Boostact from "../../src/boostact/Boostact";
/** @jsx Boostact.createElement */

const Content = (props) => {
  const { img, name } = props;
  return (
    <div>
      <img src={img}></img>
    </div>
  );
};

export default Content;
