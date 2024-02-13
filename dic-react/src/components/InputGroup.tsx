import { useState } from "react";
import Button from "./Button";

const InputGroup = () => {
  const [value, setValue] = useState("");
  const [words] = useState([""]);

  const handleSaveClick = () => {
    if (words.includes(value) === false) {
      words.push(value);
    }
    setValue("");
  };

  const handleSearchClick = () => {
    if (words.includes(value) === false) {
      alert("This word is NOT in the dictionary.");
    } else {
      alert("This word is in the dictionary.");
      setValue("");
    }
  };

  return (
    <div className="input-group mb-3">
      <Button onClick={handleSaveClick}>Save</Button>

      <Button onClick={handleSearchClick}>Search</Button>
      <input
        id="input"
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Enter a word"
        value={value}
      />
    </div>
  );
};

export default InputGroup;
