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
        <Button href="/docs" name="문서" />
        <Button href="/bugReport" name="개발현황" />
        <a className={classes.buttonStyle} href="https://kakasoo.github.io/" >발표자료</a>
      </div>
      <div className={classes.commonHeaderDiv}>
        <A link="https://www.npmjs.com/package/boostact" name="v1.3.6" />
        <A link="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact" name="Github" />
      </div>
    </div>
  );
};
export default Header;
