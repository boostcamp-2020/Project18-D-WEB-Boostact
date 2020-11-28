import Boostact from "../src/boostact/Boostact";

/** @jsx Boostact.createElement */
const container = document.getElementById("root")

const updateValue = e => {
  rerender(e.target.value)
}

const rerender = value => {
  const element = (
    <div>
        <div>
      <input onInput={updateValue} value={value} />
      <h2>Hello {value}</h2>
      </div>
    </div>
  )
  Boostact.render(element, container)
}

rerender("world");
