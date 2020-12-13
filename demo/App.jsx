import Boostact from "../src/boostact/Boostact";
import Header from "./component/common/header/header";
import Footer from "./component/common/footer/footer";
import Router from "./Router";
import HeadDecoration from "./component/common/header/headDecoration";
/** @jsx Boostact.createElement */

const Main = () => {
  return (
    <div style={{ fontFamily: "IBMPlexSansKR-Regular" }}>
      <Header />
      <HeadDecoration />
      <div id="body">
        <Router />
      </div>
      <Footer />
    </div>
  );
};
export default Main;
