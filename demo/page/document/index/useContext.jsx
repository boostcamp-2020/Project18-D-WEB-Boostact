import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import classes from "../style";
/** @jsx Boostact.createElement */

const string1 = marked(`
# useContext

jsx에서 하위 컴포넌트로 값을 전달하는 것은, 그 깊이가 깊어질 수록 더 힘들어질 수 밖에 없습니다.  
React에서는 이걸 해결하기 위해 useContext를 만들었고, Boostact 역시 useContext 기능을 구현해놓았습니다.  
useContext를 사용하면 값을 props를 통해 전달할 필요없이 전역에서 사용할 수 있습니다.   
아래는 useContext와 createContext의 전체 코드입니다.
`);

const highlight1 = hljs.highlight(
  "javascript",
  `
const useContext = (context) => {
  if (!context) {
    throw new Error("Parameter is nothing. (ex. useContext(context))");
  }
  if (context.id === null || context.id === undefined) {
    throw new Error("Maybe it's not context... Because it doesn't have context.\"id\"");
  }
  return currentContext[context.id];
};

const createContext = (defaultValue) => {
  const CURRENT_CONTEXT_ID = CONTEXT_ID++;
  defaultContext[CURRENT_CONTEXT_ID] = defaultValue;
  currentContext = defaultContext;
  const useContextHook = {
    id: CURRENT_CONTEXT_ID,
    Provider: (props) => {
      const newContext = [...currentContext];
      newContext[CURRENT_CONTEXT_ID] = props.value;
      props.children.forEach((child) => {
        child.context = newContext;
      });
      return { type: "CONTEXT", props: { children: props.children } };
    },
  };

  CONTEXTS[CURRENT_CONTEXT_ID] = CONTEXTS[CURRENT_CONTEXT_ID] || useContextHook;
  return CONTEXTS[CURRENT_CONTEXT_ID];
};
`
).value;

const string2 = marked(`
여기서도 마찬가지로, 에러 처리를 제외하고 하나 씩 분석해보도록 하겠습니다.
`);

const highlight2 = hljs.highlight(
  "javascript",
  `
const useContext = (context) => {
  return currentContext[context.id];
};
`
).value;

const string3 = marked(`
useContext는 간단합니다. context를 매개변수로 받아서 currentContext 안에서 id 값에 해당하는 값을 돌려줍니다.  
**currentContext는 useContext 기능만을 위해 만들어진 별도의 HOOKS 배열**입니다.  
useContext는 어려운 게 없기 때문에, context가 어떻게 만들어지고 들어오는가를 볼 필요가 있어 보입니다.
`);

const highlight3 = hljs.highlight(
  "javascript",
  `
const createContext = (defaultValue) => {
  const CURRENT_CONTEXT_ID = CONTEXT_ID++;
  defaultContext[CURRENT_CONTEXT_ID] = defaultValue;
  currentContext = defaultContext;
  const useContextHook = {
    id: CURRENT_CONTEXT_ID,
    Provider: (props) => {
      const newContext = [...currentContext];
      newContext[CURRENT_CONTEXT_ID] = props.value;
      props.children.forEach((child) => {
        child.context = newContext;
      });
      return { type: "CONTEXT", props: { children: props.children } };
    },
  };

  CONTEXTS[CURRENT_CONTEXT_ID] = CONTEXTS[CURRENT_CONTEXT_ID] || useContextHook;
  return CONTEXTS[CURRENT_CONTEXT_ID];
};
`
).value;

const string4 = marked(`
createContext는 context를 만드는 함수입니다. 위에부터 차례대로 보도록 하겠습니다.  
먼저 다른 HOOK과 같이 인덱스를 추적하기 위해 CURRENT_CONTEXT_ID를 만듭니다.  
우선적으로 defaultContext[CURRENT_CONTEXT_ID]에 디폴트 값을 저장해두고, 그것을 현재 Context에도 대입해둡니다.
`);

const highlight4 = hljs.highlight(
  "javascript",
  `
const useContextHook = {
  id: CURRENT_CONTEXT_ID,
  Provider: (props) => {
    const newContext = [...currentContext];
    newContext[CURRENT_CONTEXT_ID] = props.value;
    props.children.forEach((child) => {
      child.context = newContext;
    });
    return { type: "CONTEXT", props: { children: props.children } };
  },
};
`
).value;

const string5 = marked(`
내부의 useContextHook은 결과적으로 만들고자 하는 context입니다.  
context를 탐색하기 위한 id 값, 디폴트 값 이후로도 값을 재정의하기 위한 Provider 함수로 이루어져 있습니다.
Provider 함수는 새 Context를 만들어 props의 value를 저장하고, 자식들의 모든 context를 newContext로 바꾸는 함수입니다.
결과적으로 Provider는 CONTEXT를 타입으로 갖는 JS 객체를 만듭니다. (이는 렌더링되는 Element가 아닙니다.)
    
다시 createContext 함수를 보면, 결과적으로 이미 있는 경우와 첫 생성되는 경우를 파악해 CONTEXTS를 저장하는 것을 볼 수 있습니다.
createContext는 이렇게 만들어진 CONTEXT[CURRENT_CONTEXT_ID]를 반환합니다.
`);

const ArticleOfUseContext = () => {
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
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight4}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
      <div className={classes.explaination} dangerouslySetInnerHTML={string5} />
    </div>
  );
};

export default ArticleOfUseContext;
