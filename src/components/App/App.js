import React, { useEffect, useState, Fragment } from "react";
import SearchBox from "../search/SearchBox";
import "./App.css";
import Layout from "./../layout/Layout";
import EmojiBox from "../emojiBox/EmojiBox";
import Loading from "../loading/Loading";
import emojiDataJson from "../../data/emojiList.json";
function App() {
  const [emojiData, setEmojiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEmojiData(emojiDataJson);
    setLoading(false);
  }, []);
  return (
    <div className="App p-3">
      <Layout>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <SearchBox emojiData={emojiData} />
            <EmojiBox emojiData={emojiData} />
          </Fragment>
        )}
      </Layout>
    </div>
  );
}

export default App;
