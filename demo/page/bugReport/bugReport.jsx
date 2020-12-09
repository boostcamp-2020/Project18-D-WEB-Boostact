import Boostact from "../../../src/boostact/Boostact";
import classes from "./style";

/** @jsx Boostact.createElement */

const developReport = () => {
  return (
    <div>
      <div>
        <div className={classes.developReport}>
          <p className={classes.title}>News from 2020</p>
          <div>
            <p className={classes.date}>12.04 Fri</p>
            <ul>
              <li className={classes.report}>
                fix : useEffect 대규모 수정
                <ul>
                  <li className={classes.report}>fix : nextVNode가 호출되기 전 makeVRoot가 호출되는 문제 해결</li>
                  <li className={classes.report}>fix : makeVRoot 호출 시 hook들이 재실행되는 문제 해결</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.03 Thu</p>
            <ul>
              <li className={classes.report}>feat: ROUTER, LINK, CONTEXT에 대한 분기 처리 지원</li>
              <li className={classes.report}>feat : ROUTER, LINK, CONTEXT로 HTMLElement 생성 방지</li>
              <li className={classes.report}>fix : useEffect Hook 로직 변경</li>
              <li className={classes.report}>fix : children이 없는 경우 빈 객체를 생성하는 문제 해결</li>
              <li className={classes.report}>fix : null과 undefined 양자에 대한 처리 로직 각각 구현</li>
              <li className={classes.report}>fix : node에 대한 remove 함수가 재귀로 가는 문제 해결</li>
              <li className={classes.report}>fix : children으로 빈 배열이 주어졌을 때, array.prototype.flat 함수로 처리</li>
              <li className={classes.report}>feat : 라우팅 시 hook들에 대한 초기화 진행</li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.02 Wed</p>
            <ul>
              <li className={classes.report}>fix : DELETION 시 sibling node가 추적되지 않는 문제 해결</li>
              <ul>
                <li className={classes.report}> fix : child 또는 sibling node가 추적되지 않는 경우 삭제된 것으로 간주</li>
                <li className={classes.report}> fix : 추적되지 않는 node가 있을 경우 UPDATE, 그 옆 node를 DELETION으로 취급</li>
              </ul>
              <li className={classes.report}>
                fix : UPDATE 시 CSS 소멸 문제 해결
                <ul>
                  <li className={classes.report}>fix : UPDATE logic에도 style 이전 logic 구현</li>
                </ul>
              </li>
              <li className={classes.report}>feat : determindState 함수에서 vChild의 parentnode가 없는 경우 check</li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.01 Tue</p>
            <ul>
              <li className={classes.report}>fix : useContext 사용 시 Provider 범위 결정 문제</li>
              <li className={classes.report}>fix : CSS에 따라 전체 리렌더링 문제 해결</li>
              <li className={classes.report}>feat : nodeValue가 null 또는 undefined인 textElement 예외 처리</li>
              <li className={classes.report}>style : node version에 따라 ?. 연산자 사용 불가에 따른 && 연산자 사용</li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>11.30 Mon</p>
            <ul>
              <li className={classes.report}>fix : useContext 구현</li>
            </ul>
          </div>

          <div>
            <p className={classes.date}>11.29 Sun</p>
            <ul>
              <li className={classes.report}>feat : event 처리 로직 구현</li>
              <li className={classes.report}>fix : 리렌더링 시 event가 중첩되는 문제 해결</li>
              <li className={classes.report}>feat : 함수형 컴포넌트의 위치와 상관없이 렌더링 가능</li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>11.28 Sat</p>
            <ul>
              <li className={classes.report}>feat : jsx 내부에서 array.propotype.map 함수 호출을 통한 렌더링 지원.</li>
              <li className={classes.report}>fix : setState의 연쇄적 호출로 인한 성능 지연</li>
              <li className={classes.report}>fix : 렌더링 시 DOM 위치 교환에 대한 경우의 수 고려</li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>11.27 Fri</p>
            <ul>
              <li className={classes.report}>fix : UPDATE, PLACEMENT effectTag의 혼용으로 인한 문제 발생</li>
              <li className={classes.report}>feat : Functional component 지원</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default developReport;
