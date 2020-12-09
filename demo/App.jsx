import Boostact from "../src/boostact/Boostact";
import Header from "./component/common/header/header";
import Footer from "./component/common/footer/footer";
import Router from "./Router";
/** @jsx Boostact.createElement */

const Main = () => {
  return (
    <div style={{ fontFamily: "BMJUA" }}>
      <Header />
      <div id="body">
        <Router />
      </div>
      <Footer />
    </div>
  );
};
export default Main;
