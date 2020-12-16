import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import classes from "../style";
/** @jsx Boostact.createElement */

const string1 = marked(`
# Hook 사용하기

이 장에서는 Boostact에서 사용할 수 있는 여러 Hook 기능들의 사용법에 대해 설명드리겠습니다.
아래의 예시는 공식문서 대문에 있는 예제 중 하나인 Timer의 코드 일부입니다.
이 예제를 이용해 useState와 useEffect를 사용하는 방법에 대해 말해보고자 합니다.

---

## Timer 예제 코드
`);

const highlight1 = hljs.highlight(
  "javascript",
  `
import Boostact from "./src/boostact/Boostact";

/** @jsx Boostact.createElement */

const numPad = (num) => {
  if (typeof num === "number" && num < 10) {
    num = "0" + num;
  }
  return num;
};

const Timer = () => {
  const startTime = new Date();

  const [hours, setHours] = Boostact.useState(numPad(startTime.getHours()));
  const [minutes, setMinutes] = Boostact.useState(numPad(startTime.getMinutes()));
  const [seconds, setSeconds] = Boostact.useState(numPad(startTime.getSeconds()));

  Boostact.useEffect(() => {
    const intervalId = setInterval(() => {
      const timer = new Date();
      setSeconds(numPad(timer.getSeconds()));
      setMinutes(numPad(timer.getMinutes()));
      setHours(numPad(timer.getHours()));
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds, minutes, hours]);

  return (
    <div>
        <div>{hours}:{minutes}:{seconds}</div>
    </div>
  );
};

export default Timer;

`
).value;

const string2 = marked(`
이 중에서 useState와 setState, useEffect가 쓰인 지점에 집중해서 보도록 하겠습니다.
## useState
`);

const highlight2_1 = hljs.highlight(
  "javascript",
  `
  
const [hours, setHours] = Boostact.useState(numPad(startTime.getHours()));
const [minutes, setMinutes] = Boostact.useState(numPad(startTime.getMinutes()));
const [seconds, setSeconds] = Boostact.useState(numPad(startTime.getSeconds()));

`
).value;

const string3_1 = marked(`
useState는 현재의 state 값과 이 값을 업데이트 해주는 함수와 함께 쌍을 이룹니다.
state는 기본값으로 useState를 선언할 때 함께 넣어줍니다. 
이러한 state는 setState를 이용하여 업데이트 해줄 수 있습니다.

예제에서의 코드를 한 번 살펴보겠습니다.
시, 분, 초 각각의 상태를 따로 관리하기 위해서, useState를 각각 사용하여 따로 상태를 관리해주려고 합니다. 
이처럼 여러 개의 상태를 관리하고 싶을 때는 여러 개의 useState를 사용하면 됩니다.
setState를 이용하여 상태를 갱신하는 방법은 아래 useEffect의 예시와 함께 보도록 하겠습니다.


## useEffect
`);

const highlight2_2 = hljs.highlight(
  "javascript",
  `
  Boostact.useEffect(() => {
      const intervalId = setInterval(() => {
          const timer = new Date();
          setSeconds(numPad(timer.getSeconds()));
          setMinutes(numPad(timer.getMinutes()));
          setHours(numPad(timer.getHours()));
      }, 100);
    return () => {
        clearInterval(intervalId);
      };
    }, [seconds, minutes, hours]);
  `
).value;

const string3_2 = marked(`
useEffect를 이용하면 컴포넌트가 생성되거나 삭제될 때 실행되는 함수를 정의할 수 있습니다.
특정 값이 업데이트 될 때 호출하고 싶다면, 두번째 인자에 배열 형태로 값들을 넣어주면 됩니다.
예제에서는 seconds, minutes, hours의 상태가 변할 때 호출하기 위해 배열로 넣어주었습니다.

예제 속 useEffect 함수 내부의 useState는 선언해두었던 seconds, minutes, hours의 상태를 바꾸기 위해
setSconds, setMinutes, setHours를 이용해 현재의 시간으로 상태를 업데이트 합니다. 
이렇게 시간이 바뀌면 useEffect가 다시 실행되어 1초마다 시간이 바뀌는 Timer를 구현할 수 있습니다. 

컴포넌트가 삭제될 때 실행하고 싶은 작업이 있다면, cleanUp 함수를 반환하면 됩니다.
예제에서는 setInterval로 동작하고 있는 함수를 삭제하기 위해 clearInterval 함수를 반환합니다.

## useContext
`);

const highlight3 = hljs.highlight(
  "javascript",
  `
import Boostact from "boostact";
import { Context } from "./example";

/** @jsx Boostact.createElement */

const ControllButton = () => {
  const { states, actions } = Boostact.useContext(Context);
	// ...생략
	return (<div></div>)
};

export default ControllButton;
`
).value;

const string4 = marked(`
useContext는 항상 context를 받는 것으로 시작됩니다. context는 Boostact의 createContext 함수로 만들어진 값을 의미합니다. 이 때 createContext 함수로 만든 값에는 재정의 전까지는 default 값이 들어가있습니다.
useContext의 파라미터에 이 context를 넣어주면 useContext는 그 context에 저장되어 있던 값을 반환해줍니다.
위 코드에서는 ./example이라는 경로에서 Context를 만들었고, 이것을 아래 Boostact.useContext(Context) 코드를 통해 사용하고 있음을 알 수 있습니다.
이렇게 만들어진 값은 Context의 하위 컴포넌트 전체에서 접근할 수 있습니다.

## useReducer
`);

const highlight4 = hljs.highlight(
  "javascript",

  `
import Boostact from "boostact";

/** @jsx Boostact.createElement */
const initialState = { number: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "DECREASE":
      return { number: state.number - 1 };
    case "INCREASE":
      return { number: state.number + 1 };
    default:
      throw new Error("에러 발생");
  }
};

const reducerExample = () => {
  const [state, dispatch] = Boostact.useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREASE" })}>감소</button>
      <div>{state.number}</div>
      <button onClick={() => dispatch({ type: "INCREASE" })}>증가</button>
    </div>
  );
};
`
).value;

const string5 = marked(`
useReducer는 useState와 달리 하나의 상태에 대해서 다양한 상황에 대응할 수 있습니다.
useReducer는 인자로 reducer와 초기값을 받고, dispatch와 짝을 이루어 현재 상태인 state를 반환하게 됩니다.

dispatch에 원하는 매개변수를 넣으면, reducer의 action을 호출할 수 있습니다.
예제 코드에서와 같이 reducer 함수를 컴포넌트 밖에 정의하여 사용할 수 있습니다. 

## useMemo
`);

const highlight5 = hljs.highlight(
  "javascript",
  `
import Boostact from "../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const User = () => {
  const [nickname, setNickname] = Boostact.useState("");
  const nicknameLength = Boostact.useMemo(() => nickname.length, [nickname]);

  console.log("nicknameLengthFunc : ", nicknameLength);
  const updateNickname = (event) => {
    const nickname = event.target.value;
    setNickname(nickname);
  };

  return (
    <div>
      <div>
        <input onInput={updateNickname} />
        <label>{nicknameLength}</label>
      </div>
    </div>
  );
};

export default User;

`
).value;

const string6 = marked(`
useMemo는 두 개의 파라미터를 받습니다. 첫번째에는 연산할 함수를, 두번째에는 관찰할 값을 배열 형태로 넣어줍니다. useMemo는 관찰한 값이 변경된 경우에는 이 함수를 실행시키고, 값이 변경되지 않았다면 이전에 저장된 값을 재사용합니다.
  
## useCallback
`);

const highlight6 = hljs.highlight(
  "javascript",
  `
import Boostact from "../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const User = () => {
  const [nickname, setNickname] = Boostact.useState("");
  const nicknameLength = Boostact.useCallback(() => () => nickname.length, [nickname]);

  console.log("nicknameLengthFunc : ", nicknameLength());
  const updateNickname = (event) => {
    const nickname = event.target.value;
    setNickname(nickname);
  };

  return (
    <div>
      <div>
        <input onInput={updateNickname} />
        <label>{nicknameLength()}</label>
      </div>
    </div>
  );
};

export default User;

`
).value;

const string7 = marked(`
useCallback은 useMemo와 매우 유사합니다. 다른 점이 있다면, 첫번째 파라미터의 함수가 반환하는 것이 상태가 아닌 함수 형태인 점에서 차이가 있습니다. 위 코드는 앞선 useMemo와 매우 유사해보이지만, console.log와 jsx에서 다른 점이 보입니다.  
따라서 nicknameLength가 console.log와 jsx 포맷 안에서 함수 형태로 사용되고 있는 것을 확인할 수 있습니다.
`);

const HelloWorld = () => {
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
          dangerouslySetInnerHTML={highlight2_1}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
      <div className={classes.explaination} dangerouslySetInnerHTML={string3_1} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight2_2}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
      <div className={classes.explaination} dangerouslySetInnerHTML={string3_2} />
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
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight5}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>

      <div className={classes.explaination} dangerouslySetInnerHTML={string6} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight6}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>

      <div className={classes.explaination} dangerouslySetInnerHTML={string7} />
    </div>
  );
};

export default HelloWorld;
