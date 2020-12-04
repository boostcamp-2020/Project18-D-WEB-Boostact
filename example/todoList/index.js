import Boostact from "../src/boostact/Boostact";
import TodoTemplate from "../example/todoList/todoTemplate";
import "@fortawesome/fontawesome-free/js/all";

/** @jsx Boostact.createElement */
function App() {
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <TodoTemplate />
    </div>
  );
}

const container = document.getElementById("root");
Boostact.render(<App />, container);
