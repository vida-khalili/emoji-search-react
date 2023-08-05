import { useEffect, useReducer, useState } from "react";
import Pagination from "../pagination/Pagination";
import "./EmojiBox.css";
import PaginationReducer from "../../reducers/PaginationReducer";
const EmojiBox = () => {
  const [emojiData, setEmojiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [state, dispatch] = useReducer(PaginationReducer, {
    activePage: 1,
  });
  let activePageNumber = Number(state.activePage);
  console.log("active in emoji box:", activePageNumber);
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
    console.log("page count: ", pageCount);
  }, [emojiData]);

  const calcPageCount = () => {
    if (emojiData.length % 84 > 0) {
      return parseInt(emojiData.length / 84 + 1);
    }
    return parseInt(emojiData.length / 84);
  };

  return (
    <div>
      <div className="emoji-box ms-auto me-auto d-flex flex-wrap justify-content-center">
        {loading
          ? "loading"
          : emojiData
              .slice(0 * activePageNumber, 84 * state.activePage + 1)
              .map((item, index) => {
                return (
                  <div key={index} className="emoji-item p-1">
                    {item.symbol}
                  </div>
                );
              })}
      </div>
      <Pagination pageCount={pageCount} />
    </div>
  );
};

export default EmojiBox;
