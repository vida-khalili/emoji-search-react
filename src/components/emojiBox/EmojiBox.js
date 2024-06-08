import React, { useEffect, useRef, useState } from "react";
import "./EmojiBox.css";

const EmojiBox = ({ emojiData }) => {
  const [pageCount, setPageCount] = useState(0);
  const alertBox = useRef();
  useEffect(() => {
    setPageCount(calcPageCount());
  }, [emojiData]);

  const calcPageCount = () => {
    if (emojiData.length % 110 > 0) {
      return parseInt(emojiData.length / 110 + 1);
    }
    return parseInt(emojiData.length / 110);
  };

  let pageButtons = [];
  const [activePageNumber, setActivePageNumber] = useState(1);

  for (let i = 1; i <= pageCount; i++) {
    pageButtons.push(i);
  }

  const handlePageClick = (item) => {
    let NewActivePageNumber = item;
    setActivePageNumber(NewActivePageNumber);
  };

  const handleCopy = (symbol) => {
    navigator.clipboard.writeText(symbol);
    alertBox.current.style.display = "block";
    setTimeout(() => {
      alertBox.current.style.display = "none";
    }, 1000);
  };
  return (
    <React.Fragment>
      <div className="emoji-box ms-auto me-auto d-flex flex-wrap justify-content-center position-relative">
        {emojiData
          .slice(110 * activePageNumber - 110, 110 * activePageNumber)
          .map((item, index) => {
            return (
              <div
                key={index}
                className="emoji-item p-1"
                onClick={() => {
                  handleCopy(item.symbol);
                }}
              >
                {item.symbol}
              </div>
            );
          })}
        <div className="copy-alert alert alert-primary" ref={alertBox}>
          emoji copied to clipboard
        </div>
      </div>
      <nav aria-label="Page navigation example" className="mt-3 ">
        <ul className="pagination ms-auto me-auto justify-content-center d-flex flex-wrap">
          {pageButtons.map((item, index) => {
            return (
              <li
                className="page-item d-flex align-items-center justify-content-center "
                key={index}
              >
                <button
                  type="button"
                  className={
                    item === activePageNumber
                      ? "page-link p-1 active"
                      : "page-link p-1"
                  }
                  onClick={() => {
                    handlePageClick(item);
                  }}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default EmojiBox;
