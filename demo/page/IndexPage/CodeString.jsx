import Boostact from "../../../src/boostact/Boostact";
/** @jsx Boostact.createElement */

const getRandomColor = () => {
  const colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  return colorCode;
};

const CodeString = () => {
  return (
    <div>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>/</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>*</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>*</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>@</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>j</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>s</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>x</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>&nbsp;</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>B</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>o</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>o</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>s</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>t</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>a</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>c</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>t</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>.</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>c</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>r</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>e</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>a</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>t</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>e</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>E</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>l</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>e</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>m</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>e</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>n</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>t</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>&nbsp;</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>*</span>
      <span style={{ color: getRandomColor(), textShadow: `3px 3px ${getRandomColor()}` }}>/</span>
    </div>
  );
};

export default CodeString;
