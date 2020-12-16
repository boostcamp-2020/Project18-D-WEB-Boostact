import Boostact from "../../../../src/boostact/Boostact";
import classes from "./style";

/** @jsx Boostact.createElement */

const Header = () => {
  let concept1 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
  let concept2 = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

  const [deco, setDeco] = Boostact.useState(concept1);

  const swapConcept = () => {
    console.log(deco);
    if (JSON.stringify(deco) === JSON.stringify(concept1)) {
      setDeco(concept2);
      return;
    }
    setDeco(concept1);
  };

  return (
    <div onClick={swapConcept} style={{ width: "100%", paddingTop: "60px", display: "flex" }}>
      {deco.map((el) =>
        el ? (
          <div
            style={{
              borderRight: "10px solid pink",
              width: "5%",
              height: "30px",
              background: "green",
            }}
          ></div>
        ) : (
          <div
            style={{
              borderRight: "10px solid pink",
              width: "5%",
              height: "30px",
              background: "red",
            }}
          ></div>
        )
      )}
    </div>
  );
};
export default Header;
