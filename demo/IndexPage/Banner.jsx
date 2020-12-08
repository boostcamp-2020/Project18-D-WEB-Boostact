import Boostact from "../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const Banner = () => {
  return (
    <div
      id="Banner"
      style={{ backgroundColor: "#282c34", minWidth: "100%", minHeight: "180px", paddingTop: "60px", paddingBottom: "70px", textAlign: "center" }}
    >
      <h1 style={{ fontSize: "60px", color: "#61dafb" }}>Boostact</h1>
      <p style={{ fontSize: "24px", color: "white" }}>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
    </div>
  );
};

export default Banner;
