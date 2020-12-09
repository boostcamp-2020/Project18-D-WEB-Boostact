import Boostact from "../../../src/boostact/Boostact";
import classes from "./style";

/** @jsx Boostact.createElement */

const developReport = () => {
  return (
    <div className={classes.developReport}>
      <p>Develop News</p>
      <div>
        <p className={classes.date}>11.27 Fri</p>
        <ul>
          <li>fix : UPDATE, PLACEMENT effectTag의 혼용으로 인한 문제 발생</li>
          <li>feat : Functional component 지원</li>
        </ul>
      </div>
      <div>
        <p className={classes.date}>11.28 Sat</p>
        <ul>
          <li>feat : jsx 내부에서 array.propotype.map 함수 호출을 통한 렌더링 지원.</li>
          <li>fix : setState의 연쇄적 호출로 인한 성능 지연</li>
          <li>fix : 렌더링 시 DOM 위치 교환에 대한 경우의 수 고려</li>
        </ul>
      </div>
      <div>
        <p className={classes.date}>11.29 Sun</p>
        <ul>
          <li>feat : event 처리 로직 구현</li>
          <li>fix : 리렌더링 시 event가 중첩되는 문제 해결</li>
          <li>feat : 함수형 컴포넌트의 위치와 상관없이 렌더링 가능</li>
        </ul>
      </div>
      <div>
        <p className={classes.date}>11.30 Mon</p>
        <ul>
          <li>fix : useContext 구현</li>
        </ul>
      </div>
      <div>
        <p className={classes.date}>12.01 Tue</p>
        <ul>
          <li>fix : useContext 사용 시 Provider 범위 결정 문제</li>
          <li>fix : CSS에 따라 전체 리렌더링 문제 해결</li>
          <li>feat : nodeValue가 null 또는 undefined인 textElement 예외 처리</li>
          <li>style : node version에 따라 ?. 연산자 사용 불가에 따른 && 연산자 사용</li>
        </ul>
      </div>
      <div>
        <p className={classes.date}>12.02 Wed</p>
        <ul>
          <li>fix : DELETION 시 sibling node가 추적되지 않는 문제 해결</li>
          <ul>
            <li> fix : child 또는 sibling node가 추적되지 않는 경우 삭제된 것으로 간주</li>
            <li> fix : 추적되지 않는 node가 있을 경우 UPDATE, 그 옆 node를 DELETION으로 취급</li>
          </ul>
          <li>
            fix : UPDATE 시 CSS 소멸 문제 해결
            <ul>
              <li>fix : UPDATE logic에도 style 이전 logic 구현</li>
            </ul>
          </li>
          <li>feat : determindState 함수에서 vChild의 parentnode가 없는 경우 check</li>
        </ul>
      </div>
      <div>
        <p className={classes.date}>12.03 Thu</p>
        <ul>
          <li>feat: ROUTER, LINK, CONTEXT에 대한 분기 처리 지원</li>
          <li>feat : ROUTER, LINK, CONTEXT로 HTMLElement 생성 방지</li>
          <li>fix : useEffect Hook 로직 변경</li>
          <li>fix : children이 없는 경우 빈 객체를 생성하는 문제 해결</li>
          <li>fix : null과 undefined 양자에 대한 처리 로직 각각 구현</li>
          <li>fix : node에 대한 remove 함수가 재귀로 가는 문제 해결</li>
          <li>fix : children으로 빈 배열이 주어졌을 때, array.prototype.flat 함수로 처리</li>
          <li>feat : 라우팅 시 hook들에 대한 초기화 진행</li>
        </ul>
      </div>
      <div>
        <p className={classes.date}>12.04 Fri</p>
        <ul>
          <li>
            fix : useEffect 대규모 수정
            <ul>
              <li>fix : nextVNode가 호출되기 전 makeVRoot가 호출되는 문제 해결</li>
              <li>fix : makeVRoot 호출 시 hook들이 재실행되는 문제 해결</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default developReport;
