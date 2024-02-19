import { useState } from "react";
import SaveButton from "./components/SaveButton";
import SearchButton from "./components/SearchButton";

function App() {
  const [saveValue, setSaveValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [words] = useState([""]);

  const handleSaveClick = () => {
    if (words.includes(saveValue) === false) {
      words.push(saveValue);
    }
    setSaveValue("");
  };

  const handleSearchClick = () => {
    if (words.includes(searchValue) === false) {
      alert("This word is NOT in the dictionary.");
    } else {
      alert("This word is in the dictionary.");
      setSearchValue("");
    }
  };
  return (
    <>
      <div className="card mb-3">
        <h5 className="card-header text-bg-success">Dictionary</h5>
        <div className="card-body d-grid gap-2">
          <div className="input-group mb-3">
            <SaveButton onClick={handleSaveClick}></SaveButton>
            <input
              id="input"
              onChange={(e) => setSaveValue(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter a word"
              value={saveValue}
            />
          </div>
          <div className="input-group mb-3">
            <SearchButton onClick={handleSearchClick}></SearchButton>
            <input
              id="input"
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter a word"
              value={searchValue}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
