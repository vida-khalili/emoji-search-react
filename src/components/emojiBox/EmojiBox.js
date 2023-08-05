import React, { useEffect, useState } from "react";
import "./EmojiBox.css";
const EmojiBox = () => {
  const [emojiData, setEmojiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  const fetchApi = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/b86e5b36-2f73-4c3d-a06d-da1438fea4cf"
    );
    const emojiData = await response.json();
    setEmojiData(emojiData);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    setPageCount(calcPageCount());
  }, [emojiData]);

  const calcPageCount = () => {
    if (emojiData.length % 84 > 0) {
      return parseInt(emojiData.length / 84 + 1);
    }
    return parseInt(emojiData.length / 84);
  };

  let pageButtons = [];
  const [activePageNumber, setActivePageNumber] = useState(1);

  for (let i = 1; i <= pageCount; i++) {
    pageButtons.push(i);
  }

  const handlePageClick = (item) => {
    let NewActivePageNumber = item;
    setActivePageNumber(NewActivePageNumber);
    console.log("activePageNumber:", activePageNumber);
  };

  return (
    <React.Fragment>
      <div className="emoji-box ms-auto me-auto d-flex flex-wrap justify-content-center">
        {loading
          ? "loading"
          : emojiData
              .slice(84 * activePageNumber - 84, 84 * activePageNumber)
              .map((item, index) => {
                return (
                  <div key={index} className="emoji-item p-1">
                    {item.symbol}
                  </div>
                );
              })}
      </div>
      <nav aria-label="Page navigation example" className="mt-3 ">
        <ul className="pagination ms-auto me-auto justify-content-center">
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
      {/* <Pagination pageCount={pageCount} /> */}
    </React.Fragment>
  );
};

export default EmojiBox;
