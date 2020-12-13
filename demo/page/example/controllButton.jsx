import Boostact from "../../../src/boostact/Boostact";
import Route from "../../../src/boostact/Route";

import { Context } from "./example";

/** @jsx Boostact.createElement */

const pageList = ["page_1", "page_2", "page_3", "page_4", "page_5", "page_6", "page_7", "page_8"];
const listLength = pageList.length;

const ControllButton = () => {
  const { states, actions } = Boostact.useContext(Context);

  const index = pageList.indexOf(states.list);
  let prevLink = "/examples/" + pageList[index - 1];
  let frontLink = "/examples/" + pageList[index + 1];
  if (index === 0) {
    prevLink = "/examples";
  }
  if (index === pageList.length - 1) {
    frontLink = "/examples";
  }

  const up = () => {
    const idx = pageList.indexOf(states.list);
    actions.setList(pageList[(idx - 1) % listLength]);
  };

  const down = () => {
    const idx = pageList.indexOf(states.list);
    actions.setList(pageList[(idx + 1) % listLength]);
  };

  return (
    <div>
      <div>
        <Route.Link to={prevLink}>
          <div>
            <button onClick={up}>◄</button>
          </div>
        </Route.Link>
      </div>
      <div>
        <Route.Link to={frontLink}>
          <div>
            <button onClick={down}>►</button>
          </div>
        </Route.Link>
      </div>
    </div>
  );
};

export default ControllButton;
