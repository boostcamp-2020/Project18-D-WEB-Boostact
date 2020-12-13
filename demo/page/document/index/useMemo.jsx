import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import classes from "../style";
/** @jsx Boostact.createElement */

const string1 = marked(`
# useMemo

useMemo는 useEffect와 비슷하지만 더 간단하고 편리한 함수입니다.   
useMemo는 함수를 미리 저장해두어, 동일한 함수가 계속 메모리를 차지하는 것을 방지합니다.  
따라서 성능과 가독성 측면에서 useEffect보다 효율적일 수 있습니다.  
아래는 useMemo의 전체 코드입니다.
`);

const highlight1 = hljs.highlight(
  "javascript",
  `
const useMemo = (func, arr) => {
  if (!arr || !func) {
    throw new Error("useMemo Hook must have two parameter... (example. useMemo(func, array)");
  }

  const CURRENT_HOOK_ID = HOOK_ID++;
  if (!HOOKS[CURRENT_HOOK_ID]) {
    HOOKS[CURRENT_HOOK_ID] = { value: func(), beforeArr: arr };
    return HOOKS[CURRENT_HOOK_ID].value;
  }

  if (HOOKS[CURRENT_HOOK_ID].beforeArr.length !== arr.length) {
    HOOKS[CURRENT_HOOK_ID] = { value: func(), beforeArr: arr };
    return HOOKS[CURRENT_HOOK_ID].value;
  }

  HOOKS[CURRENT_HOOK_ID].beforeArr.some((el, i) => {
    if (el !== arr[i]) {
      HOOKS[CURRENT_HOOK_ID] = { value: func(), beforeArr: arr };
      return true;
    }
  });

  return HOOKS[CURRENT_HOOK_ID].value;
};  
  `
).value;

const string2 = marked(`
여기서도 마찬가지로, 에러 처리를 제외하고 하나 씩 분석해보도록 하겠습니다.
`);

const highlight2 = hljs.highlight(
  "javascript",
  `
const useMemo = (func, arr) => {
  const CURRENT_HOOK_ID = HOOK_ID++;
  if (!HOOKS[CURRENT_HOOK_ID]) {
    // 아직 Hook이 생성된 적이 없는 경우 함수를 실행하고 저장한 값을 반환한다.
    HOOKS[CURRENT_HOOK_ID] = { value: func(), beforeArr: arr };
    return HOOKS[CURRENT_HOOK_ID].value;
  }

  if (HOOKS[CURRENT_HOOK_ID].beforeArr.length !== arr.length) {
    // Hook이 생성되었고, hook이 가진 beforeArr가 현재의 arr와 length가 다른 경우, 함수를 새로 실행하고 저장한 값을 반환한다.
    HOOKS[CURRENT_HOOK_ID] = { value: func(), beforeArr: arr };
    return HOOKS[CURRENT_HOOK_ID].value;
  }

  HOOKS[CURRENT_HOOK_ID].beforeArr.some((el, i) => {
    // Hook이 생성되었고, hook이 가진 beforeArr가 현재의 arr와 length가 같은 경우 하나씩 비교를 진행한다.
    if (el !== arr[i]) {
      HOOKS[CURRENT_HOOK_ID] = { value: func(), beforeArr: arr };
      return true;
    }
  });

  // 변한 것이 있다면 value는 새로 실행되어 값이 저장되었을 것이고, 변한 것이 없다면 함수 호출 없이 이전 값만 전달한다.
  return HOOKS[CURRENT_HOOK_ID].value;
};  
`
).value;

const string3 = marked(`
이상으로 useMemo에 대한 분석이 끝났습니다.  
useEffect처럼 함수를 호출해주는 것은 동일하지만, 메모이제이션이 적용되고 좀 더 간결해진 것을 알 수 있습니다.
`);

const ArticleOfUseMemo = () => {
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
    </div>
  );
};

export default ArticleOfUseMemo;
