import Boostact from "../src/boostact/Boostact";
import Header from "./component/common/header/header";
import Footer from "./component/common/footer/footer";
import Router from "./router";
/** @jsx Boostact.createElement */

const Main = () => {
  return (
    <div>
      <Header />
      <div id="body">
        <Router />
      </div>
      <Footer />
    </div>
  );
};
export default Main;
