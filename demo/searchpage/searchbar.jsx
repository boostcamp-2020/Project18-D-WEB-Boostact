import Boostact from "../../src/boostact/Boostact";
/** @jsx Boostact.createElement */

const SearchBar = (props) => {
  const { inputText, setText } = props;
  const updateValue = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input onInput={updateValue} value={inputText} />
    </div>
  );
};

export default SearchBar;
