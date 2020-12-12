import Boostact from "../../../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const string = marked(`
# Hello world5
`);

const hooksState5 = () => {
  return <div dangerouslySetInnerHTML={string}></div>;
};

export default hooksState5;
