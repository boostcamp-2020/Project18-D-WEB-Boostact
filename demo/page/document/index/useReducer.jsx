import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import classes from "../style";
/** @jsx Boostact.createElement */

const string1 = marked(`
# useReducer

useReducer는 useState를 보다 더 많은 상황에서 사용할 수 있도록 분기 처리를 추가해준 것입니다.
아래는 Boostact 내에 있는 useReducer의 전체 코드입니다. 보시다시피 매우 간단한 구조로 되어 있습니다.
`);

const highlight1 = hljs.highlight(
  "javascript",
  `
const useReducer = (reducer, initialState) => {
  HOOKS[HOOK_ID] = HOOKS[HOOK_ID] || initialState;
  const CURRENT_HOOK_ID = HOOK_ID++;
  const currentValue = HOOKS[CURRENT_HOOK_ID];
  const dispatch = (action) => {
    HOOKS[CURRENT_HOOK_ID] = reducer(HOOKS[CURRENT_HOOK_ID], action);
    if (currentValue !== HOOKS[CURRENT_HOOK_ID]) {
      reRender();
    }
  };

  return [HOOKS[CURRENT_HOOK_ID], dispatch];
};
`
).value;

const string2 = marked(`
useReducer는 분기처리를 대신할 reducer 함수와, initalState라는 초기값을 매개변수로 받습니다.  
HOOKS 역시 useState와 동일하게 기존 값이나 초기 값 둘 중 하나를 넣게 됩니다.  
달라지는 부분은 dispatch를 생성하는 부분인데, 이 dispatch는 조건이나 타입 등을 가진 action을 받아 reducer를 실행시킵니다.
결과적으로 dispatch는 값이 바뀌게 되면 reRender()가 호출하는 함수라고 할 수 있습니다.
useReducer는 상태와 이 dispatch 함수를 반환합니다.
`);

const ArticleOfUseReducer = () => {
  return (
    <div className={classes.paddingRightAndBottom}>
      <div className={classes.explaination} dangerouslySetInnerHTML={string1} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight1}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
      <div className={classes.explaination} dangerouslySetInnerHTML={string2} />
    </div>
  );
};

export default ArticleOfUseReducer;
