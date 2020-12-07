import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import { container } from "./style";

/** @jsx Boostact.createElement */

const Header = () => {
  return (
    <section id="header" style={container}>
      <div>로고</div>
      <div>
        <Route.Link to="/document">
          <span>문서</span>
        </Route.Link>
        <Route.Link to="/tutorial">
          <span>자습서</span>
        </Route.Link>
        <Route.Link to="/examples">
          <span>예제</span>
        </Route.Link>
      </div>
      <a href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact">github</a>
    </section>
  );
};
export default Header;
