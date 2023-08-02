import { useState, useReducer, useEffect } from "react";
import PaginationReducer from "../../reducers/PaginationReducer";
import "./Pagination.css";
const Pagination = ({ pageCount }) => {
  let pageButtons = [];
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [state, dispatch] = useReducer(PaginationReducer, { activePage: 1 });
  for (let i = 1; i <= pageCount; i++) {
    pageButtons.push(i);
  }

  const handlePageClick = (item) => {
    const clickedPageNumber = Number(item);
    setActivePageNumber(clickedPageNumber);
  };

  useEffect(() => {
    dispatch({
      type: "ACTIVE_PAGE",
      activePage: activePageNumber,
    });
  }, [activePageNumber]);
  return (
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
  );
};

export default Pagination;
