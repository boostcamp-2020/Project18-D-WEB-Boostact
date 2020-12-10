import Boostact from "../../../../src/boostact/Boostact";
import classes from "./style";
import Button from "./button/button";
import A from "../a/a";

/** @jsx Boostact.createElement */

const Header = () => {
  return (
    <div id="header" className={classes.container}>
      <div className={classes.commonHeaderDiv}>
        <Button href="/" name="Boostact"></Button>
      </div>
      <div className={classes.commonHeaderDiv + " " + classes.centerHeaderDiv}>
        <Button href="/document" name="문서" />
        <Button href="/examples" name="예제" />
        <Button href="/bugReport" name="버그리포트" />
      </div>
      <div className={classes.commonHeaderDiv}>
        <A link="https://www.npmjs.com/package/boostact" name="v1.1.61" />
        <A link="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact" name="Github" />
      </div>
    </div>
  );
};
export default Header;
