import Boostact from "../../../src/boostact/Boostact";
import Banner from "./Banner";
import Gist from "./Gist";
import classes from "./style";
import SimpleContents from "./SimpleContents";

/** @jsx Boostact.createElement */

const BoostactIndex = () => {
  return (
    <div>
      <Banner />
      <div className={classes.contents}>
        <Gist />
        <hr className={classes.divider} />
        <SimpleContents />
      </div>
    </div>
  );
};

export default BoostactIndex;
