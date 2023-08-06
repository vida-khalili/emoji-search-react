import React, { useEffect, useState } from "react";
import SearchBox from "../search/SearchBox";
import "./App.css";
import Layout from "./../layout/Layout";
import EmojiBox from "../emojiBox/EmojiBox";
import PaginationProvider from "../store/PaginationProvider";
function App() {
  const [emojiData, setEmojiData] = useState([]);
  const [loading, setLoading] = useState(true);

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
  return (
    <div className="App bg-light p-3">
      <Layout>
        <SearchBox emojiData={emojiData}/>
        {loading ? "loading" : <EmojiBox emojiData={emojiData} />}
      </Layout>
    </div>
  );
}

export default App;
