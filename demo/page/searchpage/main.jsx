import Boostact from "../../../src/boostact/Boostact";
import Content from "./content";
import SearchBar from "./searchbar";
import mockData from "./mock-data";
/** @jsx Boostact.createElement */

const Search = () => {
  const [inputText, setText] = Boostact.useState("");
  const [searchResult, setResult] = Boostact.useState([]);
  Boostact.useEffect(() => {
    if (inputText.length < 2) {
      return;
    }
    const result = mockData.filter((data) => data.name.includes(inputText) || data.keyword.indexOf(inputText) !== -1);
    setResult(result);
  }, [inputText]);
  return (
    <div>
      <div>
        <SearchBar inputText={inputText} setText={setText} />
        <div>{inputText}</div>
      </div>
      <div>
        {searchResult.map((result) => {
          return <Content img={result.img} name={result.name} />;
        })}
      </div>
    </div>
  );
};

export default Search;
