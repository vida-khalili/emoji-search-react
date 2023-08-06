import { useEffect, useRef, useState, Fragment } from "react";
import "./SearchBox.css";
import { BsSearch } from "react-icons/bs";

const SearchBox = ({ emojiData }) => {
  let [searchValue, setSearchValue] = useState("");
  let [result, setResult] = useState([]);
  const inputElement = useRef();
  const handleSearchInput = () => {
    setSearchValue(inputElement.current.value);
    return;
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      const filtered = emojiData.filter((emoji) => {
        return (
          emoji.title.includes(searchValue) ||
          emoji.keywords.includes(searchValue)
        );
      });
      setResult(filtered);
    } else {
      setResult([]);
    }
    // console.log(result);
  }, [searchValue, emojiData]);

  return (
    <Fragment>
      <div className="search-box d-flex bg-white rounded justify-content-center align-items-center gap-3 border-1 border-black border p-2 w-100 mb-2 ms-auto me-auto">
        <input
          ref={inputElement}
          type="email"
          className="form-control border-0 outline-0"
          id="exampleFormControlInput1"
          placeholder="Search emoji..."
          autoComplete="off"
          onChange={handleSearchInput}
        />
        <button className="btn">
          <BsSearch />
        </button>
      </div>
      <div className="search-result   d-flex  align-items-center gap-3 p-1">
        {result.map((emoji, index) => {
          return (
            <span className="emoji-item" key={index}>
              {emoji.symbol}
            </span>
          );
        })}
      </div>
    </Fragment>
  );
};

export default SearchBox;
