import Boostact from "../../../src/boostact/Boostact";
import Timer from "../example/timer/Timer";
import TodoList from "../example/todoList/todoTemplate";

/** @jsx Boostact.createElement */

const SimpleContents = () => {
  const codeString = "/**@jsx Boosact.createElement */";
  return (
    <div id="SimpleContents">
      <div id="Content" style={{ display: "flex", minWidth: "100%", minHeight: "400px", marginBottom: "30px" }}>
        <div style={{ minWidth: "calc(33% - 26.7px)", height: "400px", overflow: "hidden" }}>
          <h3 style={{ marginBottom: "5px", minWidth: "100%", color: "#282c34", maxWidth: "11em", paddingTop: "0", fontSize: "1.6em" }}>
            바벨 트랜스파일링
          </h3>
          <p style={{ fontSize: "20px", marginTop: "0px", marginBottom: "0px" }}>Boostact는 jsx를 트랜스파일하기 위해서 babel을 사용합니다.</p>
          <p style={{ fontSize: "20px", marginTop: "0px", marginBottom: "0px" }}>
            따라서 Boostact는 jsx를 React.createElement로 트랜스파일링하지 않고 Boostact.createElement로 트랜스파일하게끔 유도할 필요가 있습니다.
          </p>
          <p style={{ fontSize: "20px", marginTop: "0px", marginBottom: "0px" }}>
            따라서 Boostact를 사용하기 위해서는, jsx를 사용하는 파일마다 우측과 같은 주석을 필요로 합니다.
          </p>
        </div>
        <div
          className="exampleBox"
          style={{
            minWidth: "calc(67% - 13.3px)",
            marginLeft: "40px",
            height: "350px",
            border: "1px solid black",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div style={{ textAlign: "center", color: "gray", fontSize: "50px", fontWeight: "1000", paddingTop: "150px" }}>{codeString}</div>
        </div>
      </div>

      <div id="Content" style={{ display: "flex", minWidth: "100%", minHeight: "400px", marginBottom: "30px" }}>
        <div style={{ minWidth: "calc(33% - 26.6px)", height: "400px", overflow: "hidden" }}>
          <h3 style={{ marginBottom: "5px", minWidth: "100%", color: "#282c34", maxWidth: "11em", paddingTop: "0", fontSize: "1.6em" }}>
            상태를 가진 컴포넌트
          </h3>
          <p style={{ fontSize: "20px", marginTop: "0px", marginBottom: "0px" }}>
            Boostact는 두 개의 트리 구조를 타고 내려가며, 달라진 지점을 찾아 렌더링하는 방식으로 이루어집니다.
          </p>
          <p style={{ fontSize: "20px", marginTop: "0px", marginBottom: "0px" }}>
            이 때 이 트리들이 지닌 각각의 노드는 상태를 가지고 있고, 놀랍게도 이 상태는 함수 내부에서도 유지가 될 수 있습니다. 특정한 경우, 이 값이
            변동됨에 따라 Boostact는 리렌더링을 진행합니다.
          </p>
          <p style={{ fontSize: "20px", marginTop: "0px", marginBottom: "0px" }}>
            우측 시계를 확인하면 바뀌는 숫자 부분만 리렌더링됨을 확인할 수 있습니다.
          </p>
        </div>
        <div
          className="exampleBox"
          style={{
            minWidth: "calc(67% - 413.3px)",
            marginLeft: "40px",
            height: "300px",
            border: "1px solid black",
            borderRadius: "20px",
            paddingLeft: "200px",
            paddingRight: "200px",
            paddingTop: "50px",
            overflow: "hidden",
          }}
        >
          <Timer />
        </div>
      </div>

      <div id="Content" style={{ display: "flex", minWidth: "100%", minHeight: "400px", marginBottom: "30px" }}>
        <div style={{ minWidth: "calc(33% - 26.7px)", height: "400px", overflow: "hidden" }}>
          <h3 style={{ marginBottom: "5px", minWidth: "100%", color: "#282c34", maxWidth: "11em", paddingTop: "0", fontSize: "1.6em" }}>
            React와 같은 문법의 Hook
          </h3>
          <p style={{ fontSize: "20px", marginTop: "0px", marginBottom: "0px" }}>
            우리는 함수형 컴포넌트를 지원하고 있습니다. 따라서 React와 동일하게 동작하게끔 하기 위해 React의 Hook들과 유사하게 동작하는 훅들을
            만들었습니다.
          </p>
        </div>
        <div
          className="exampleBox"
          style={{
            minWidth: "calc(67% - 13.3px)",
            marginLeft: "40px",
            height: "350px",
            border: "1px solid black",
            borderRadius: "20px",
            overflow: "scroll",
          }}
        >
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default SimpleContents;
