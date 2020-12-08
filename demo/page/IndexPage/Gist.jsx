import Boostact from "../../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const Gist = () => {
  return (
    <div id="Gist" style={{ width: "100%", height: "200px", display: "flex", marginTop: "100px" }}>
      <div className="GistContents" style={{ maxWidth: `calc(33% - 26.7px)` }}>
        <div className="title">
          <h3 style={{ marginBottom: "20px", color: "#6d6d6d", paddingTop: "0", fontWeight: "300", fontSize: "24px" }}>가상 돔 (Virtual DOM)</h3>
        </div>
        <div className="contents">
          <p style={{ fontSize: "17px" }}>
            Boostact는 가상 돔을 이용하여 렌더링합니다. 각각의 요소들을 JS 객체로 표현하여 EffectTag라는 특별한 tag를 붙입니다.
          </p>

          <p style={{ fontSize: "17px" }}> 이 tag들을 통해서 Boostact는 Element를 새로 그릴지, 업데이트를 할지, 혹은 삭제를 할지 결정합니다.</p>
        </div>
      </div>
      <div className="GistContents" style={{ maxWidth: `calc(33% - 26.7px)`, marginLeft: "40px", marginRight: "40px" }}>
        <div className="title">
          <h3 style={{ marginBottom: "20px", color: "#6d6d6d", paddingTop: "0", fontWeight: "300", fontSize: "24px" }}>훅 (Hooks)</h3>
        </div>
        <div className="contents">
          <p style={{ fontSize: "17px" }}>
            Boostact는 현재 useState, useReducer, useContext, useEffect 등의 훅들을 리액트와 같은 문법으로 지원하고 있습니다.
          </p>
          <p style={{ fontSize: "17px" }}>또한 하나의 컴포넌트 안에 여러 개의 훅들을 동시에 사용할 수도 있습니다.</p>
        </div>
      </div>
      <div className="GistContents" style={{ maxWidth: `calc(33% - 26.7px)` }}>
        <div className="title">
          <h3 style={{ marginBottom: "20px", color: "#6d6d6d", paddingTop: "0", fontWeight: "300", fontSize: "24px" }}>가벼운 사이즈</h3>
        </div>
        <div className="contents">
          <p style={{ fontSize: "17px" }}>우리는 이 프레임워크를 순수한 JavaScript만 사용하여 만들었습니다.</p>
          <p style={{ fontSize: "17px" }}>
            Boostact는 매우 작은 사이즈로, 리액트처럼 사용할 수 있는 프레임워크입니다. Boostact의 완성도는 React에 비할 수 없지만, 당신이 웹
            프레임워크를 이해하는 데에 매우 큰 도움을 선사할 것입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gist;
