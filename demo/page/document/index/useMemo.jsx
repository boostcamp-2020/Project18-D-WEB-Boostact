import Boostact from "../../../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const string = marked(`
# Hello world6
`);

const hooksState6 = () => {
  return <div dangerouslySetInnerHTML={string}></div>;
};

export default hooksState6;
