import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
import A from "../a/a";
import classes from "./style";

/** @jsx Boostact.createElement */

const Footer = () => {
  return (
    <div>
      <div className={classes.footerContainer}>
        <div className={classes.developersContainer}>
          부스트캠프 2020
          <A link="https://github.com/kakasoo" name="J001 강경수"></A>
          <A link="https://github.com/SeunghyoKu" name="J013 구승효"></A>
          <A link="https://github.com/simjaeik" name="J107 심재익"></A>
          <A link="https://github.com/ji3427" name="J200 지화영"></A>
        </div>
        <div className={classes.developersContainer}>
          채널
          <A link="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/" name="GitHub"></A>
          <A link="https://www.npmjs.com/package/boostact" name="npm"></A>
        </div>
        <div className={classes.developersContainer}>
          더보기
          <A link="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/wiki" name="팀 위키"></A>
          <A
            link="https://github.com/boostcamp-2020/Project18-D-WEB-BoostAct/wiki/%EC%96%B4%EC%A7%B8%EC%84%9C-%EB%B0%94%EB%8B%90%EB%9D%BC%EC%9D%B8%EA%B0%80..."
            name="왜 바닐라 JS?"
          ></A>
          <A href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/wiki/TroubleShooting" name="트러블 슈팅"></A>
        </div>
      </div>
    </div>
  );
};
export default Footer;
