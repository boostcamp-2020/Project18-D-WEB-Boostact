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
            <p className={classes.date}>12.13 Sun</p>
            <ul>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/ce186b88293eb3a73547895ac2558ab9260ba8a9"
                >
                  fix : 이벤트 호출 시 버블링되는 경로의 모든 이벤트를 호출
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.12 Sat</p>
            <ul>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/84597ee3064a06b8b68bd612d515a947a2cd7051"
                >
                  feat : route에 exact 도입 로직 수정
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.11 Fri</p>
            <ul>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/e464e9ee09ffd8590e7add9ff2c434a65ce5d238"
                >
                  fix : 이벤트 값 일부 변경 안되는 버그를 발견하여 해당 로직 주석 처리
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.10 Thr</p>
            <ul>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/de89a25be597953ea72ee351d9d746bab5bc75ad"
                >
                  feat : route에 exact 값 도입
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.09 Wed</p>
            <ul>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/bd9a3db1235d6473a9564a0e9edf703007705cc2"
                >
                  fix : style이 계속 레더링되는 문제 해결
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/de899d8fbd978e2a47bdd4d72fac81a228376ccc"
                >
                  fix : 페이지 라우팅 시 claseName이 사라지지 않는 문제 해결
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/d20457a796a14dad7df9a15a8b830323b223d9f9"
                >
                  fix : 두 돔 중에 한 쪽에만 style이 있을 경우 에러 발생
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.08 Tue</p>
            <ul>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/810bed7526bbc18561c683dcedc65cfd83afba88"
                >
                  fix : useMemo, 메모이제이션 기능 추가
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/766e6cdfa878d78d3f0588bf36bf0a35dffb89b7"
                >
                  fix : 중복으로 render 호출 시 미적용되는 문제 발생
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/c6293b96d537d6454468391e1267772448464082"
                >
                  fix : Root에 style을 넣을 시 rerendering되는 문제 해결
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/b87cd3fc334afd690e0ec0462612a12933613af3"
                >
                  fix : textElement가 null 또는 undefined일 때 에러 처리
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/60859f2656c608a1eae18c6298f2eef0f90db318"
                >
                  feat : useCallback, useMemo에 Error message 추가
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/10d17e4008c24763b8a23454335e19f9c8f04e10"
                >
                  fix : useCallback 구현 및 useMemo 버그 제거
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/72425a299f3a45138e039aa621cd3ceaf1387d1c"
                >
                  feat : useMemo 구현
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.07 Mon</p>
            <ul>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/f27a9aab593202a1e69447f07dbaf8b30ca7caef"
                >
                  fix : useContext가 여러 상황에서도 동작할 수 있게 별도의 전역 변수(배열) 생성
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={classes.date}>12.06 sun</p>
            <ul>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/f1ec5508e407082a1cfab66b8ffbf968d8a954d2"
                >
                  fix : useEffect return 함수로 정리 가능하게 변경
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/437d8e1a4988c1292bad710022270ce3e57236e4"
                >
                  fix : makeVRoot 함수 실행 시 중첩된 함수 처리 가능하도록 수정
                </a>
              </li>
            </ul>
          </div>
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
          <div>
            <p className={classes.date}>11.26 Thr</p>
            <ul>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/3638db616e57ee8468e163cbc3bff3f834774507"
                >
                  feat : 가상 DOM에서 삭제된 node를 실제 DOM에서도 삭제하는 로직 추가
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/86ce879bccf42eccd349a93c7aefb6704c069bd5"
                >
                  feat : 가상 DOM의 UPDATE 내역을 반영하는 로직 추가
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/7960f109c74bea96891768c7286031743f7e82ff"
                >
                  feat : DOM Node의 추가 및 대체를 위한 PLACEMENT 로직 추가
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/66e438f5b2bbb00abcecf14c3db8097aa0955739"
                >
                  feat : 가상 DOM 트리를 순회하는 함수 구현
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/c90b9a4d449e4b1fc39ee17bd7aa0ccaa9521d15"
                >
                  feat : 가상 Node를 실제 Node로 생성하는 로직 추가
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/9de1dd752e8f3098959df7899f5019faaf247786"
                >
                  feat : workLoop, render 함수 구현
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/e83d22925bd9237012993c867ccb2fd72a440bf0"
                >
                  feat : 가상 돔을 생성하는 함수 작성
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/99299fbcc36746d149a3ef50fef69acac8fe26e1"
                >
                  feat : 가상 DOM의 state를 결정하는 함수 작성
                </a>
              </li>
              <li className={classes.report}>
                <a
                  className={classes.aTag}
                  href="https://github.com/boostcamp-2020/Project18-D-WEB-Boostact/commit/ce09c14cabbb4f3641a9247df551584e8bd0e9fa"
                >
                  feat : 가상 돔의 root를 만드는 함수 추가
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default developReport;
