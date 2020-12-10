import Boostact from "../../../../src/boostact/Boostact";
import classes from "./style";

/** @jsx Boostact.createElement */

const Header = () => {
  let deco = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];

  return (
    <div style={{ width: "100%", paddingTop: "60px", display: "flex" }}>
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
