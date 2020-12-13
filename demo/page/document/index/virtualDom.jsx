import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import classes from "../style";
/** @jsx Boostact.createElement */

const string1 = marked(`
# 가상 DOM

가상 DOM은 Boostact에 있어서 **가장 중요한 부분**입니다. 이 점은, Boostact가 React를 따라 만들었기 때문만은 아닙니다.  
조금 더 근원적인 이유로써, Boostact가 웹 프레임워크로 동작하는 데에 가상 DOM은 **필수적인 요소**입니다. 가상 DOM이 없다면 Boostact는 현재 렌더링된 페이지와 다음 번 렌더링될 페이지의 차이점을 파악하지 못할 것이고, 이는 큰 성능 저하로 이어질 것입니다.  
Boostact에서 DOM은 총 3개로, 편의 상 **CurrentDOM과 wipDOM, realDOM**이라고 나누겠습니다.     
  
**realDOM**은 실제로 Rendering 되어 있는 DOM을 말합니다.  
**currentDOM**은 realDOM과 동일한 형태의 JS 객체, 가상DOM을 의미합니다.   
**wipDOM** 역시 currentDOM과 마찬가지로 가상 DOM입니다. 상세한 내용은 곧 바로 설명드리겠습니다.
이 장에서는 각각의 DOM들이 어떤 역할을 하며, 어떤 상호작용을 주고 받는지에 대해 이야기하겠습니다.  
  
# DOM의 비교

`);

const string2 = marked(`
두 DOM이 있습니다. 하나는 currentDOM입니다. 앞서 말한 것과 같이, currentDOM은 렌더링된 페이지와 같은 구조로 되어 있습니다.  
우측에 있는 DOM은 wip DOM입니다. wip는 다음에 렌더링될 모습을 의미합니다. 상태가 변한 것인지, 5번 Node가 지워진 것처럼 보입니다.    
DOM이 렌더링될 때, Boostact에서는 두 DOM을 root 지점부터 비교하며 내려오게 됩니다. 따라서 비교가 계속 되면 5번 Node 지점에 도착했을 때 삭제가 되었다는 것을 파악하게 됩니다.   
아래가 바로 그 부분을 담당한 로직입니다.
`);

const highlight1 = hljs.highlight(
  "javascript",
  `
  const determineState = (curChild, vChild) => {
    const sameType = curChild && vChild && curChild.type === vChild.type;
    if (vChild && vChild.parent.effectTag === "PLACEMENT") {
      vChild.alternate = curChild;
      vChild.dom = null;
      vChild.effectTag = "PLACEMENT";
    } else if (sameType) {
      vChild.alternate = curChild;
      vChild.dom = curChild.dom;
      if (isUnchanged(curChild, vChild)) {
        vChild.effectTag = "NONE";
        return;
      }
      vChild.effectTag = "UPDATE";
    } else if (!vChild && !sameType) {
      curChild.effectTag = "DELETION";
      curChild.child = null;
      deletionQueue.push(curChild);
    } else if (!sameType) {
      vChild.alternate = curChild;
      vChild.dom = null;
      vChild.effectTag = "PLACEMENT";
    }
  
    if (vChild && curChild && curChild.props.dangerouslySetInnerHTML) {
      vChild.alternate = curChild;
      vChild.dom = null;
      vChild.effectTag = "PLACEMENT";
    }
  };
  `
).value;

const string3 = marked(`
비교를 용이하게 하기 위해 Boostact에서는 먼저, 같은 타입인지를 파악합니다.   
예컨대 두 노드가 여전히 'div' 태그를 가지고 있다면, 두 노드는 같은 타입인 것으로 간주합니다.    
이 때, Boostact는 노드끼리를 비교한 결과를 4가지의 상태로 표현합니다. 바로 **PLACEMENT, DELETION, UPDATE, NONE**입니다.      
만약 새로 추가된 것이 있다면 PLACEMENT, 삭제된 것이 있다면 DELETION, 타입은 같지만 props에 수정된 사항이 있다면 UPDATE, 타입이 같고 수정된 것도 없다면 NONE이 됩니다.     
이 후 **NONE을 제외한 3가지는 렌더링 시 실제 DOM에 반영**됩니다.  
반영은 아래의 함수에서 이루어집니다.  
`);

const highlight2 = hljs.highlight(
  "javascript",
  `
const reflectDOM = (node) => {
  let currentNode = node;
  deletionQueue.forEach((node) => {
    node.parent.dom.removeChild(node.dom);
  });
  deletionQueue.length = 0;

  while (currentNode) {
    switch (currentNode.effectTag) {
      case "PLACEMENT":
        placeNode(currentNode);
        break;
      case "UPDATE":
        updateNode(currentNode);
        break;
      case "NONE":
        break;
      default:
        throw new Error("reflectDOM : currentNode.effectTag is undefined.");
    }
    if(Object.keys(currentNode.props).some((prop) => prop.startsWith("on"))){
      eventModule.add(currentNode);
    }

    if (currentNode.child) {
      currentNode = currentNode.child;
      continue;
    }

    if (currentNode.sibling) {
      currentNode = currentNode.sibling;
      continue;
    }

    while (currentNode.parent && !currentNode.parent.sibling) {
      currentNode = currentNode.parent;
    }
    currentNode = currentNode.parent && currentNode.parent.sibling;
  }
};
`
).value;

const string4 = marked(`
이 함수에서의 switch문은 각 node의 effectTag를 확인합니다. 여기에는 앞서 말한 4가지의 상태가 있습니다.  
각 node는 자신에게 붙은 상태에 따라 각기 다른 함수로 보내지며, 이후 DOM에는 해당하는 내용으로 나타나게 될 것입니다.

# DOM의 과부하를 줄이는 법
`);

const highlight3 = hljs.highlight(
  "javascript",
  `
  const workLoop = (deadline) => {
    let isIdle = false;
    while (nextVNode && !isIdle) {
      nextVNode = makeVNode(nextVNode);
      isIdle = deadline.timeRemaining() < 1;
    }
    if (!nextVNode && vRoot) {
      reflectDOM(vRoot);
      currentRoot = vRoot;
      vRoot = undefined;
      container.appendChild(currentRoot.parent.dom)
      HOOK_ID = INIT_VALUE;
    }
    requestIdleCallback(workLoop);
  };
`
).value;

const string5 = marked(`
여기까지 오셨다면 가상DOM에 상당한 부하가 걸리지 않는지 걱정이 될 수 있습니다. 하지만 Boostact에서는 다음과 같은 방법들로 부하를 줄이기 위해 노력하고 있습니다.   
    
첫째, requestIdleCallback을 사용하여 브라우저가 실행중인 로직이 없는 경우에만 렌더링한다.    
둘째, NONE 태그를 사용하여 변화가 없는 DOM에는 렌더링을 하지 않는다.    
셋째, 가상DOM이 실제 DOM 형태로 렌더링이 되면, 그 상단의 root만을 div#root에 붙임으로써 렌더링을 최소화한다.    
    
`);

const HelloWorld = () => {
  return (
    <div className={classes.paddingRightAndBottom}>
      <div className={classes.explaination} dangerouslySetInnerHTML={string1} />
      <img
        style={{ width: "100%" }}
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Frz5Y3%2FbtqPYjwV40p%2F70rejF72QardQDNJnAH2lk%2Fimg.png"
      ></img>

      <div className={classes.explaination} dangerouslySetInnerHTML={string2} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight1}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>

      <div className={classes.explaination} dangerouslySetInnerHTML={string3} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight2}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
      <div className={classes.explaination} dangerouslySetInnerHTML={string4} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight3}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
      <div className={classes.explaination} dangerouslySetInnerHTML={string5} />
    </div>
  );
};

export default HelloWorld;
