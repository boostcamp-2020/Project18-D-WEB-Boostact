import Boostact from "../../../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const string = marked(`
# Hello world1
`);

const hooksState1 = () => {
  return <div dangerouslySetInnerHTML={string}></div>;
};

export default hooksState1;
