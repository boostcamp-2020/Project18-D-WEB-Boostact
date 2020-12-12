import Boostact from "../../../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const string = marked(`
# Hello world8
`);

const hooksState8 = () => {
  return <div dangerouslySetInnerHTML={string}></div>;
};

export default hooksState8;
