import Boostact from "../src/boostact/Boostact";
import Header from "./component/common/header/header";
import Footer from "./component/common/footer/footer";
import Router from "./Router";
import TextLink from './component/common/textLink/TextLink';
/** @jsx Boostact.createElement */

const Main = () => {
  return (
    <div style={{ fontFamily: "IBMPlexSansKR-Regular" }}>
      <Header />
      <div id="body" style={{ paddingTop: "60px" }}>
      <TextLink text={"test"} href={"/test"}></TextLink>
        <Router />
      </div>
      <Footer />
    </div>
  );
};
export default Main;
