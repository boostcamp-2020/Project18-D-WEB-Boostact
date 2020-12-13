import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
const highlightedCode = hljs.highlight(
  "javascript",
  `const useState = (initValue) => {  
  HOOKS[HOOK_ID] = HOOKS[HOOK_ID] || initValue;  
  const CURRENT_HOOK_ID = HOOK_ID++;  
  
  const setState = (nextValue) => {  
    typeof nextValue === "function" ?  
    (HOOKS[CURRENT_HOOK_ID] = nextValue(HOOKS[CURRENT_HOOK_ID])) :  
    (HOOKS[CURRENT_HOOK_ID] = nextValue);  
    reRender();  
  };  
  return [HOOKS[CURRENT_HOOK_ID], setState];  
  
  console.log(123); import a from "b"
};`
).value;

/** @jsx Boostact.createElement */

const Component = () => {
  //  hljs.initHighlightingOnLoad();

  return (
    <div>
      <pre>
        <code className="javascript hljs" dangerouslySetInnerHTML={highlightedCode}></code>
      </pre>
    </div>
  );
};

export default Component;
