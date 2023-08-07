import { useEffect, useRef, useState } from "react";
import "./SearchBox.css";
import { BsSearch } from "react-icons/bs";

const SearchBox = ({ emojiData }) => {
  let [searchValue, setSearchValue] = useState("");
  const [content, setContent] = useState(
    "Click on any emoji to copy to clipboard"
  );
  let [result, setResult] = useState([]);
  const inputElement = useRef();
  const alertBox = useRef();

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
      setContent("Nothing Found! :/");
      setResult(filtered);
    } else {
      setContent("Click on any emoji to copy to clipboard");
      setResult([]);
    }
    // console.log(result);
  }, [searchValue, emojiData]);

  const handleCopy = (symbol) => {
    navigator.clipboard
      .writeText(symbol)
      .then(() => {
        alertBox.current.style.display = "block";
      })
      .catch((error) => {
        console.log("error", error);
      });

    setTimeout(() => {
      alertBox.current.style.display = "none";
    }, 1000);
  };

  return (
    <div className="position-relative search-container">
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
        {result.length > 0
          ? result.map((emoji, index) => {
              return (
                <span
                  className="emoji-item"
                  key={index}
                  onClick={() => {
                    handleCopy(emoji.symbol);
                  }}
                >
                  {emoji.symbol}
                </span>
              );
            })
          : `${content}`}
      </div>
      <div className="copy-alert alert alert-primary" ref={alertBox}>
        emoji copied to clipboard{" "}
      </div>
    </div>
  );
};

export default SearchBox;
