import Boostact from "../../../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const string = marked(`
# Hello world9
`);

const hooksState9 = () => {
  return <div dangerouslySetInnerHTML={string}></div>;
};

export default hooksState9;
