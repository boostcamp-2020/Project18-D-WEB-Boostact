import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import { container, contents, headerDiv, github } from "./style";
import Button from "../button/button";

/** @jsx Boostact.createElement */

const Header = () => {
  return (
    <section id="header" style={container}>
      <div style={headerDiv}>
        <Button href="/" name="Boostact"></Button>
      </div>
      <div style={headerDiv}>
        <Button href="/document" name="문서" />
        <Button href="/tutorial" name="자습서" />
        <Button href="/examples" name="예제" />
      </div>
      <div style={headerDiv}>
        <span style={contents}>v1.1.61</span>
        <a href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact" style={github}>
          GitHub
        </a>
      </div>
    </section>
  );
};
export default Header;
