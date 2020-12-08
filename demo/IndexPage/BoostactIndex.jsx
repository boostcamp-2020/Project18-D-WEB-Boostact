import Boostact from "../../src/boostact/Boostact";
import Banner from "./Banner";
import Gist from "./Gist";
import SimpleContents from "./SimpleContents";

/** @jsx Boostact.createElement */

const BoostactIndex = () => {
  return (
    <div style={{ minWidth: "100%" }}>
      <Banner />
      <div id="contents" style={{ minWidth: "80%", marginLeft: "10%", marginRight: "10%" }}>
        <Gist />
        <hr style={{ marginTop: "90px", marginBottom: "90px" }} />
        <SimpleContents />
      </div>
    </div>
  );
};

export default BoostactIndex;
