import Boostact from "../../../src/boostact/Boostact";
import Timer from "../example/timer/Timer";
import TodoList from "../example/todoList/todoTemplate";
import classes from "./style";

/** @jsx Boostact.createElement */

const SimpleContents = () => {
  const codeString = "/**@jsx Boosact.createElement */";
  return (
    <div id="SimpleContents">
      <div className={classes.Content}>
        <div className={classes.contentBox}>
          <h3 className={classes.title}>바벨 트랜스파일링</h3>
          <p className={classes.article}>Boostact는 jsx를 트랜스파일하기 위해서 babel을 사용합니다.</p>
          <p className={classes.article}>
            따라서 Boostact는 jsx를 React.createElement로 트랜스파일링하지 않고 Boostact.createElement로 트랜스파일하게끔 유도할 필요가 있습니다.
          </p>
          <p className={classes.article}>따라서 Boostact를 사용하기 위해서는, jsx를 사용하는 파일마다 우측과 같은 주석을 필요로 합니다.</p>
        </div>
        <div className={classes.exampleCommon + " " + classes.exampleBox1}>
          <div className={classes.exampleCode}>{codeString}</div>
        </div>
      </div>

      <div className={classes.Content}>
        <div className={classes.centralContentBox}>
          <h3 className={classes.title}>상태를 가진 컴포넌트</h3>
          <p className={classes.article}>Boostact는 두 개의 트리 구조를 타고 내려가며, 달라진 지점을 찾아 렌더링하는 방식으로 이루어집니다.</p>
          <p className={classes.article}>
            이 때 이 트리들이 지닌 각각의 노드는 상태를 가지고 있고, 놀랍게도 이 상태는 함수 내부에서도 유지가 될 수 있습니다. 특정한 경우, 이 값이
            변동됨에 따라 Boostact는 리렌더링을 진행합니다.
          </p>
          <p className={classes.article}>우측 시계를 확인하면 바뀌는 숫자 부분만 리렌더링됨을 확인할 수 있습니다.</p>
        </div>
        <div className={classes.exampleCommon + " " + classes.exampleBox2}>
          <Timer />
        </div>
      </div>

      <div className={classes.Content}>
        <div className={classes.contentBox}>
          <h3 className={classes.title}>React와 같은 문법의 Hook</h3>
          <p className={classes.article}>
            우리는 함수형 컴포넌트를 지원하고 있습니다. 따라서 React와 동일하게 동작하게끔 하기 위해 React의 Hook들과 유사하게 동작하는 훅들을
            만들었습니다.
          </p>
        </div>
        <div className={classes.exampleCommon + " " + classes.exampleBox3}>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default SimpleContents;
