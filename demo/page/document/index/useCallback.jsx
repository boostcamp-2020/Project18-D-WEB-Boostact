import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import classes from "../style";
/** @jsx Boostact.createElement */

const string1 = marked(`
# useCallback

useCallback의 내부 구조는 useMemo와 같습니다. 아래를 확인해주세요.
`);

const highlight1 = hljs.highlight(
  "javascript",
  `
const useCallback = (func, arr) => {
  if (!arr || !func) {
    throw new Error("useCallback Hook must have two parameter... (example. useCallback(func, array)");
  }
  return useMemo(() => func, arr);
};
`
).value;

const string2 = marked(`
useCallback은 useMemo와 달리 상태가 아니라 함수를 저장하기 위한 Hook입니다.    
따라서 useCallback은 useMemo를 그대로 사용하되, useMemo의 첫번째 매개변수를 func을 반환하는 함수로 작성합니다.
`);

const ArticleOfUseCallback = () => {
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

export default ArticleOfUseCallback;
