import Pagination from "../pagination/Pagination";
import emojiData from "./../../data/emojiList.json";

const EmojiBox = () => {
  return (
    <div>
      <div className="d-flex w-25 flex-wrap">
        {emojiData.map((item, index) => {
          return <div key={index}>{item.symbol}</div>;
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default EmojiBox;
