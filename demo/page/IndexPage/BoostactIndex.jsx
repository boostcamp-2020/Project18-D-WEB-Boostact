import Boostact from "../../../src/boostact/Boostact";
import Banner from "./Banner";
import Gist from "./Gist";
import SimpleContents from "./SimpleContents";

/** @jsx Boostact.createElement */

const BoostactIndex = () => {
  return (
    <div style={{ minWidth: "100%" }}>
      <Banner />
      <div id="contents" style={{ minWidth: "70%", marginLeft: "15%", marginRight: "15%" }}>
        <Gist />
        <hr style={{ marginTop: "90px", marginBottom: "90px" }} />
        <SimpleContents />
      </div>
    </div>
  );
};

export default BoostactIndex;
