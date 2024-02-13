import { useState } from "react";
import Button from "./Button";

function InputGroup() {
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
      <div className="input-group mb-3">
        <Button onClick={handleSaveClick}>Save</Button>
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
        <Button onClick={handleSearchClick}>Search</Button>
        <input
          id="input"
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter a word"
          value={searchValue}
        />
      </div>
    </>
  );
}

export default InputGroup;
