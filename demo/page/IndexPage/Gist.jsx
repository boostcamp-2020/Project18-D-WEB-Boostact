import Boostact from "../../../src/boostact/Boostact";
import classes from "./style";

/** @jsx Boostact.createElement */

const Gist = () => {
  return (
    <div className={classes.Gist}>
      <div className={classes.leftRightContents}>
        <div className={classes.title}>
          <h3 className={classes.gistTitle}>가상 돔 (Virtual DOM)</h3>
        </div>
        <div>
          <p className={classes.gistWriting}>
            Boostact는 가상 돔을 이용하여 렌더링합니다. 각각의 요소들을 JS 객체로 표현하여 EffectTag라는 특별한 tag를 붙입니다.
          </p>
          <p className={classes.gistWriting}>이 tag들을 통해서 Boostact는 Element를 새로 그릴지, 업데이트를 할지, 혹은 삭제를 할지 결정합니다.</p>
          <p className={classes.gistWriting}>아무런 변경도 없는 경우에는 NONE 태그를 붙여 렌더링을 방지할 수도 있습니다!</p>
        </div>
      </div>
      <div className={classes.centerContents}>
        <div className={classes.title}>
          <h3 className={classes.gistTitle}>훅 (Hooks)</h3>
        </div>
        <div>
          <p className={classes.gistWriting}>
            Boostact는 현재 useState, useReducer, useContext, useEffect, useMemo, useCallback과 같은 훅들을 리액트와 같은 문법으로 지원하고 있습니다.
          </p>
          <p className={classes.gistWriting}>
            또한 하나의 컴포넌트 안에 여러 개의 훅들을 동시에 사용할 수도 있습니다. 이런 훅들은, Boostact를 사용할 때 편리성을 제공합니다.
          </p>
        </div>
      </div>
      <div className={classes.leftRightContents}>
        <div className={classes.title}>
          <h3 className={classes.gistTitle}>가벼운 사이즈</h3>
        </div>
        <div>
          <p className={classes.gistWriting}>
            우리는 이 프레임워크를 순수한 JavaScript만 사용하여 만들었습니다. 이 프레임워크가 동작하는 데 필요한 코드는 고작 500줄도 되지 않습니다!
          </p>
          <p className={classes.gistWriting}>
            Boostact는 매우 작은 사이즈로, 리액트처럼 사용할 수 있는 프레임워크입니다. Boostact의 완성도는 React에 비할 수 없지만, 당신이 웹
            프레임워크를 이해하는 데에 매우 큰 도움을 줄 것입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gist;
