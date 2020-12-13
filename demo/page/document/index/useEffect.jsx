import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import classes from "../style";
/** @jsx Boostact.createElement */

const string1 = marked(`
# useEffect

useEffect는 컴포넌트가 생성될 때, 그리고 소멸할 때에 실행될 함수를 정의하는 데 이용됩니다.  
boostact의 내부에 useEffect는 아래와 같은 구조로 되어 있습니다.
`);

const highlight1 = hljs.highlight(
  "javascript",
  `
const useEffect = (fn, arr) => {
  if (!fn) {
    throw new Error("Note : did you forget parameters?");
  }

  if (!arr) {
    throw new Error("If you don't want to observe any variable, you have to put an empty array.");
  }

  const CURRENT_HOOK_ID = HOOK_ID++;
  const useEffectHook = {
    cleanUp: null,
    work: null,
    beforeArr: [],
  };

  if (HOOKS[CURRENT_HOOK_ID] && HOOKS[CURRENT_HOOK_ID].beforeArr.length) {
    const { beforeArr } = HOOKS[CURRENT_HOOK_ID];
    beforeArr.some((el, i) => {
      if (el !== arr[i]) {
        HOOKS[CURRENT_HOOK_ID].beforeArr = arr;
        if (typeof HOOKS[CURRENT_HOOK_ID].cleanUp === "function") {
          HOOKS[CURRENT_HOOK_ID].cleanUp();
        }

        HOOKS[CURRENT_HOOK_ID].cleanUp = HOOKS[CURRENT_HOOK_ID].work();
        if (HOOKS[CURRENT_HOOK_ID].cleanUp && typeof HOOKS[CURRENT_HOOK_ID].cleanUp !== "function") {
          throw new Error("useEffect must be return function.");
        }
        return true;
      }
    });
  } else if (!HOOKS[CURRENT_HOOK_ID]) {
    HOOKS[CURRENT_HOOK_ID] = useEffectHook;
    HOOKS[CURRENT_HOOK_ID].work = fn;
    if (arr.length) {
      HOOKS[CURRENT_HOOK_ID].beforeArr = arr;
    }
    HOOKS[CURRENT_HOOK_ID].cleanUp = HOOKS[CURRENT_HOOK_ID].work();
    if (HOOKS[CURRENT_HOOK_ID].cleanUp && typeof HOOKS[CURRENT_HOOK_ID].cleanUp !== "function") {
      throw new Error("useEffect must be return function.");
    }
  } else if (!HOOKS[CURRENT_HOOK_ID].beforeArr.length) {
    if (typeof HOOKS[CURRENT_HOOK_ID].cleanUp === "function") {
      HOOKS[CURRENT_HOOK_ID].cleanUp();
    }
    HOOKS[CURRENT_HOOK_ID].work = fn;
    HOOKS[CURRENT_HOOK_ID].cleanUp = HOOKS[CURRENT_HOOK_ID].work();
    if (HOOKS[CURRENT_HOOK_ID].cleanUp && typeof HOOKS[CURRENT_HOOK_ID].cleanUp !== "function") {
      throw new Error("useEffect must be return function");
    }
  }
};
`
).value;

const string2 = marked(`
useEffect의 코드는 useState에 비하면 매우 긴 편에 해당합니다. 그러니 에러 처리를 제외한 나머지를, 작은 단위로 잘라보겠습니다.
`);

const highlight2 = hljs.highlight(
  "javascript",
  `
const CURRENT_HOOK_ID = HOOK_ID++;
const useEffectHook = {
  cleanUp: null,
  work: null,
  beforeArr: [],
};
`
).value;

const string3 = marked(`
useEffect도 useState와 같이 현재의 HOOK_ID를 미리 저장해둡니다. 이후 HOOK_ID에 대한 설명은 생략하겠습니다.   
HOOK_ID가 어떻게 결정되는지가 궁금하신 분께서는, "주요 개념 2. HOOK 상태 관리"를 참고해주시기 바랍니다.   
   
useEffectHook 이라는 객체는 useEffect가 HOOKS 배열에 저장할 객체입니다.    
cleanUp은 소멸자에 해당하는 함수, work는 생성자에 해당하는 함수입니다.    
beforeArr는 useEffect가 주기적으로 동작하기 위해서 변경점을 파악할 변수들을 저장할 배열로서 만들어졌습니다.  
이제 아래 로직들을 따라가며 값을 정해주기만 하면 됩니다.  
`);

const highlight3 = hljs.highlight(
  "javascript",
  `
if (HOOKS[CURRENT_HOOK_ID] && HOOKS[CURRENT_HOOK_ID].beforeArr.length) {
  // 상황1 : 이미 훅이 생성된 적이 있고, beforeArr에 저장된 변수가 있을 경우
  // 결과1 : beforeArr와 인자로 받은 arr를 비교하여 변경 시에 cleanUp, work 함수를 차례대로 실행시킵니다.
  const { beforeArr } = HOOKS[CURRENT_HOOK_ID];
  beforeArr.some((el, i) => {
    if (el !== arr[i]) {
      HOOKS[CURRENT_HOOK_ID].beforeArr = arr;
      if (typeof HOOKS[CURRENT_HOOK_ID].cleanUp === "function") {
        HOOKS[CURRENT_HOOK_ID].cleanUp();
      }
      HOOKS[CURRENT_HOOK_ID].cleanUp = HOOKS[CURRENT_HOOK_ID].work();
      return true;
    }
  });
} else if (!HOOKS[CURRENT_HOOK_ID]) {
  // 상황2 : 처음으로 Hook이 불린 경우, 즉 Hook이 아직 생성되지 않은 경우.
  // 결과2 : 위와 동일하게 진행됩니다.
  HOOKS[CURRENT_HOOK_ID] = useEffectHook;
  HOOKS[CURRENT_HOOK_ID].work = fn;
  if (arr.length) {
    HOOKS[CURRENT_HOOK_ID].beforeArr = arr;
  }
  HOOKS[CURRENT_HOOK_ID].cleanUp = HOOKS[CURRENT_HOOK_ID].work();
} else if (!HOOKS[CURRENT_HOOK_ID].beforeArr.length) {
  // 상황3 : 빈 배열을 파라미터로 받은 경우
  // 결과3 : 비교 연산 없이 cleanUp, work 함수를 실행합니다.
  if (typeof HOOKS[CURRENT_HOOK_ID].cleanUp === "function") {
    HOOKS[CURRENT_HOOK_ID].cleanUp();
  }
  HOOKS[CURRENT_HOOK_ID].work = fn;
  HOOKS[CURRENT_HOOK_ID].cleanUp = HOOKS[CURRENT_HOOK_ID].work();
}
`
).value;

const string4 = marked(`
주석은 useEffect가 실행될 때 어떤 흐름을 타는지를 보여줍니다. useEffect는 class의 생성, 소멸자와 유사하다고 볼 수 있습니다.
`);

const ArticleOfUseEffect = () => {
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
          dangerouslySetInnerHTML={highlight3}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
      <div className={classes.explaination} dangerouslySetInnerHTML={string4} />
    </div>
  );
};

export default ArticleOfUseEffect;
