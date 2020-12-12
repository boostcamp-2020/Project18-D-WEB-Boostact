import Boostact from "../../../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const string = marked(`
# Hello world7
`);

const hooksState7 = () => {
  return <div dangerouslySetInnerHTML={string}></div>;
};

export default hooksState7;
