import Boostact from "../src/boostact/Boostact";
import Header from "./component/common/header/header";
import Footer from "./component/common/footer/footer";
import Router from "./Router";
/** @jsx Boostact.createElement */

const Main = () => {
  return (
    <div>
      <Header />
      <div id="body" style={{ paddingTop: "60px" }}>
        <Router />
      </div>
      <Footer />
    </div>
  );
};
export default Main;
