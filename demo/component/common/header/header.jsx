import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import { container, contents, headerDiv, github } from "./style";
import Button from "../button/button";
import A from "../a/a";

/** @jsx Boostact.createElement */

const Header = () => {
  return (
    <div id="header" style={container}>
      <div style={headerDiv}>
        <Button href="/" name="Boostact"></Button>
      </div>
      <div style={headerDiv}>
        <Button href="/document" name="문서" />
        <Button href="/examples" name="예제" />
        <Button href="/bugReport" name="버그리포트" />
      </div>
      <div style={headerDiv}>
        <A link="https://www.npmjs.com/package/boostact" name="v1.1.61" />
        <A link="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact" name="Github" />
      </div>
    </div>
  );
};
export default Header;
