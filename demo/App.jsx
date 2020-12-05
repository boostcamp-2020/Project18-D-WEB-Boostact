import Boostact from "../src/boostact/Boostact";
import Router from "./Router";
/** @jsx Boostact.createElement */

const App = () => {
  return (
    <div>
      <Router />
      <div>
        <h1>여기가 기본 화면입니다.</h1>
      </div>
    </div>
  );
};

export default App;
