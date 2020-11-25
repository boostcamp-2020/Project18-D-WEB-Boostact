import BoostAct from "../src/boostact";
import element from "./component";

/** @jsx BoostAct.createElement */
const element = (
    <ul>
        <li>item 1</li>
        <li>item 2</li>
    </ul>
)
const container = document.getElementById("root");
BoostAct.render(element, container);
