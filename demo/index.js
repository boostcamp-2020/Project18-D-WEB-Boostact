import Boostact from "../src/boostact/Boostact";

/** @jsx Boostact.createElement */

function Counter(props) {
  const {state,setState} = props;
  const clictEvent = () => {
     console.log(setState(state + 1));
  }
  return (
    <button onClick={clictEvent} style="user-select: none">
      Count: {state}
    </button>
  );
}

function App(){
  const [count1, setCount1] = Boostact.useState(1);
  const [count2, setCount2] = Boostact.useState(1);
  return (
    <div>
      <h1>Boostact is aswesome</h1>
    <Counter setState={setCount1} state={count1}/>
  <div>{count1}</div>
    <Counter setState={setCount2} state={count2}/>
  <div>{count2}</div>
  </div>
  )
  }
const container = document.getElementById("root");
Boostact.render(<App/>, container);
