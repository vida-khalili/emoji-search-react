import SearchBox from "../search/SearchBox";
import "./App.css";
import Layout from "./../layout/Layout";
import EmojiBox from "../emojiBox/EmojiBox";
import PaginationProvider from "../store/PaginationProvider";
function App() {
  return (
    <div className="App bg-light p-3">
      <Layout>
        <SearchBox />
        <EmojiBox />
      </Layout>
    </div>
  );
}

export default App;
