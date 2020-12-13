import Boostact from "../../../src/boostact/Boostact";
import Route from "../../../src/boostact/Route";

import { Page_1, Page_2, Page_3, Page_4, Page_5, Page_6, Page_7, Page_8 } from "./scripts";

/** @jsx Boostact.createElement */

const PAGE_NUMBER = 8;
const pageList = [Page_1, Page_2, Page_3, Page_4, Page_5, Page_6, Page_7, Page_8];

const Router = () => {
  const routerList = Array(PAGE_NUMBER)
    .fill(0)
    .map((val, index) => {
      const path = "/examples/page_" + (index + 1);
      return <Route.Route path={path} component={pageList[index]} isContained></Route.Route>;
    });

  return (
    <div>
      <Route.Route exact path="/examples" component={Page_1}></Route.Route>
      {routerList}
    </div>
  );
};

export default Router;
