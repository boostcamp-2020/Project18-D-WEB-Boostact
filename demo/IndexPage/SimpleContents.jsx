import Boostact from "../../src/boostact/Boostact";
import Timer from "../timer/Timer";

/** @jsx Boostact.createElement */

const SimpleContents = () => {
  return (
    <div id="SimpleContents">
      <div id="Content" style={{ display: "flex", minWidth: "100%", minHeight: "300px", marginBottom: "30px" }}>
        <div style={{ minWidth: "calc(33% - 26.7px)", height: "300px", paddingTop: "30px" }}>
          <h3 style={{ minWidth: "100%", color: "#282c34", maxWidth: "11em", paddingTop: "0", fontSize: "1.17em" }}>
            바벨 트랜스파일링 (babel transpiling)
          </h3>
          <p style={{ fontSize: "17px" }}>Boostact는 jsx를 트랜스파일하기 위해서 babel을 사용합니다.</p>
          <p style={{ fontSize: "17px" }}>
            따라서 Boostact는 jsx를 React.createElement로 트랜스파일링하지 않고 Boostact.createElement로 트랜스파일하게끔 유도할 필요가 있습니다.
          </p>
          <p style={{ fontSize: "17px" }}>따라서 Boostact를 사용하기 위해서는, jsx를 사용하는 파일마다 우측과 같은 주석을 필요로 합니다.</p>
        </div>
        <div style={{ minWidth: "calc(67% - 13.3px)", marginLeft: "40px", height: "300px", backgroundColor: "blue", borderRadius: "20px" }}></div>
      </div>

      <div id="Content" style={{ display: "flex", minWidth: "100%", minHeight: "300px", marginBottom: "30px" }}>
        <div style={{ minWidth: "calc(33% - 26.7px)", height: "300px", paddingTop: "30px" }}>
          <h3 style={{ minWidth: "100%", color: "#282c34", maxWidth: "11em", paddingTop: "0", fontSize: "1.17em" }}>
            바벨 트랜스파일링 (babel transpiling)
          </h3>
          <p style={{ fontSize: "17px" }}>Boostact는 jsx를 트랜스파일하기 위해서 babel을 사용합니다.</p>
          <p style={{ fontSize: "17px" }}>
            따라서 Boostact는 jsx를 React.createElement로 트랜스파일링하지 않고 Boostact.createElement로 트랜스파일하게끔 유도할 필요가 있습니다.
          </p>
          <p style={{ fontSize: "17px" }}>따라서 Boostact를 사용하기 위해서는, jsx를 사용하는 파일마다 우측과 같은 주석을 필요로 합니다.</p>
        </div>
        <div
          style={{
            minWidth: "calc(67% - 269.95px)",
            marginLeft: "40px",
            height: "275px",
            border: "1px solid black",
            borderRadius: "20px",
            paddingLeft: "calc(33.5% - 256.65px)",
            paddingTop: "25px",
          }}
        >
          <Timer />
        </div>
      </div>

      <div id="Content" style={{ display: "flex", minWidth: "100%", minHeight: "300px", marginBottom: "30px" }}>
        <div style={{ minWidth: "calc(33% - 26.7px)", height: "300px", paddingTop: "30px" }}>
          <h3 style={{ minWidth: "100%", color: "#282c34", maxWidth: "11em", paddingTop: "0", fontSize: "1.17em" }}>
            바벨 트랜스파일링 (babel transpiling)
          </h3>
          <p style={{ fontSize: "17px" }}>Boostact는 jsx를 트랜스파일하기 위해서 babel을 사용합니다.</p>
          <p style={{ fontSize: "17px" }}>
            따라서 Boostact는 jsx를 React.createElement로 트랜스파일링하지 않고 Boostact.createElement로 트랜스파일하게끔 유도할 필요가 있습니다.
          </p>
          <p style={{ fontSize: "17px" }}>따라서 Boostact를 사용하기 위해서는, jsx를 사용하는 파일마다 우측과 같은 주석을 필요로 합니다.</p>
        </div>
        <div style={{ minWidth: "calc(67% - 13.3px)", marginLeft: "40px", height: "300px", backgroundColor: "blue", borderRadius: "20px" }}></div>
      </div>
    </div>
  );
};

export default SimpleContents;
