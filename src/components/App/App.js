import React, { useEffect, useState, Fragment } from "react";
import SearchBox from "../search/SearchBox";
import "./App.css";
import Layout from "./../layout/Layout";
import EmojiBox from "../emojiBox/EmojiBox";
import Loading from "../loading/Loading";
import emojiDataJson from "../../data/emojiList.json";
function App() {
  const [emojiData, setEmojiData] = useState(emojiDataJson);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/0450d557-dc1d-484e-981b-bb5a547ec99c"
    );
    const emojiData = await response.json();
    setEmojiData(emojiData);
    setLoading(false);
  };

  useEffect(() => {
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
