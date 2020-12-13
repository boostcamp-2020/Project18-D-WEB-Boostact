import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import classes from "../style";
/** @jsx Boostact.createElement */

const string1 = marked(`
# useState
`);

const highlight1 = hljs.highlight(
  "javascript",
  `
const useState = (initValue) => {
  HOOKS[HOOK_ID] = HOOKS[HOOK_ID] || initValue;
  const CURRENT_HOOK_ID = HOOK_ID++;

  const setState = (nextValue) => {
    typeof nextValue === "function" ?
    (HOOKS[CURRENT_HOOK_ID] = nextValue(HOOKS[CURRENT_HOOK_ID])) : 
    (HOOKS[CURRENT_HOOK_ID] = nextValue);
    reRender();
  };
  return [HOOKS[CURRENT_HOOK_ID], setState];
};
`
).value;

const string2 = marked(`
**useState**의 내부는 위와 같이 생겼습니다. 동작하는 방식은 React와 동일합니다.  
먼저 전역에 있는 HOOKS 배열과, HOOK이 생성된 순서를 나타내는 HOOK_ID를 사용해 HOOKS 배열 내부를 탐색합니다.   
만약 거기에 값이 있다면 원래 있던 값을 사용하고, 아직 값이 없다면 초기화가 되지 않은 것으로 간주하여 새 값을 부여합니다.  
이제 내부의 setState를 떼어내 다시 봅시다.
`);

const highlight2 = hljs.highlight(
  "javascript",
  `
const setState = (nextValue) => {
  typeof nextValue === "function" ?
  (HOOKS[CURRENT_HOOK_ID] = nextValue(HOOKS[CURRENT_HOOK_ID])) : 
  (HOOKS[CURRENT_HOOK_ID] = nextValue);
  reRender();
};
`
).value;

const string3 = marked(`
setState는 다음 값이 될 매개변수를 받아 useState가 해당하는 배열의 요소에 대입 연산을 진행합니다.  
이 때, 값으로 전달된 매개변수의 타입이 함수인 경우에는, 이전 값을 파라미터로 하여 파라미터의 함수를 실행해 대입합니다.  
값이 함수가 아닌 경우라면 바로 대입 연산을 진행합니다.   
값의 대입이 끝난 경우에는 reRender() 함수를 통해 DOM을 다시 그리게 합니다.
`);

const string4 = marked(`
최종적으로 함수가 반환하는 것은 상태가 담긴 state와, 상태를 변경시키는 setState함수입니다.   
useState Hook은 결과적으로 이 둘을 [state, setState] 와 같이 변수 형태로 반환합니다.    
`);

const ArticleOfUseState = () => {
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
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight2}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
      <div className={classes.explaination} dangerouslySetInnerHTML={string3} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight1}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
      <div className={classes.explaination} dangerouslySetInnerHTML={string4} />
    </div>
  );
};

export default ArticleOfUseState;
