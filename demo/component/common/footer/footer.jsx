import Boostact from "../../../../src/boostact/Boostact";
import Route from "../../../../src/boostact/Route";
/** @jsx Boostact.createElement */

const Footer = () => {
  // 푸터에 들어가는 내용:
  // 깃헙 주소
  // developers: 번호 이름 주소
  // 문서 라우팅 ?
  // 위키
  // npm 사이트
  return (
    <div>
      <div style={{ diplay: "flex" }}>
        <div className="developers">
          <a href="https://github.com/kakasoo">J001 강경수</a>
          <a href="https://github.com/SeunghyoKu">J013 구승효</a>
          <a href="https://github.com/simjaeik">J107 심재익</a>
          <a href="https://github.com/ji3427">J200 지화영</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
