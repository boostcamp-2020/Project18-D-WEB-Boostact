import Boostact from "../../src/boostact/Boostact";
import Router from "../Router";
/** @jsx Boostact.createElement */

const About = (props) => {
  return (
    <div>
      <Router />
      <div>
        <h1>Hello World</h1>
        <h2>This is About!</h2>
      </div>
    </div>
  );
};
export default About;
