import Boostact from "../../../src/boostact/Boostact";
/** @jsx Boostact.createElement */

const getRandomColor = () => {
  const colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  return colorCode;
};

const CodeString = () => {
  const code = "/** @jsx Boostact.createElement /";

  return (
    <div>
      {code.split("").map((el) => {
        return <span style={{ color: getRandomColor(), textShadow: `1px 1px ${getRandomColor()}` }}>{el}</span>;
      })}
    </div>
  );
};

export default CodeString;
