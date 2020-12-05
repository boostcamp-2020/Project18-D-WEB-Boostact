import Boostact from "../../src/boostact/Boostact";
import Router from "../Router";
/** @jsx Boostact.createElement */

const Home = () => {
  return (
    <div>
      <Router />
      <div>
        <h1>Hello World</h1>
        <h2>This is home!</h2>
      </div>
    </div>
  );
};
export default Home;
