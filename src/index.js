import boostact from "./boostact/Boostact.js";
import boostactDOM from "./boostactDOM/BoostactDOM.js";

const root = document.getElementById("root");

const element = boostact.createElement(
  "div",
  { id: "foo", style: { "background-color": "black" } },
  boostact.createElement("a", null, "bar"),
  boostact.createElement("b")
);

/** @jsx Didact.createElement */
/*const element = boostact.createElement(
  "div",
  { style: { background: "salmon" } },
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World"),
  boostact.createElement("h1", null, "hello World")
);
*/
if (root !== null) {
  boostactDOM.render(element, root);
}

export { boostact, boostactDOM };
