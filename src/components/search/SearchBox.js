import "./SearchBox.css";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <div className="SearchBox d-flex bg-white rounded justify-content-center align-items-center gap-3 border-1 border-black border p-2 w-25 mb-2 ms-auto me-auto">
      <input
        type="email"
        className="form-control border-0 outline-0"
        id="exampleFormControlInput1"
        placeholder="Search emoji..."
        autoComplete="off"
      />
      <button className="btn">
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchBox;
