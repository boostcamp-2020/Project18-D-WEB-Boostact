import Boostact from "../../../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const string = marked(`
# Hello world2
`);

const hooksState2 = () => {
  return <div dangerouslySetInnerHTML={string}></div>;
};

export default hooksState2;
