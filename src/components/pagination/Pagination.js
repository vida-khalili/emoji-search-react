import { useState, useReducer, useEffect, useContext } from "react";

import "./Pagination.css";

const Pagination = ({ pageCount }) => {
  let pageButtons = [];
  const [activePageNumber, setActivePageNumber] = useState(1);

  for (let i = 1; i <= pageCount; i++) {
    pageButtons.push(i);
  }

  const handlePageClick = (item) => {
    const clickedPageNumber = Number(item);
    setActivePageNumber(clickedPageNumber);
    console.log("activePageNumber:", activePageNumber);
    console.log("clickedPageNumber:", clickedPageNumber);
  };

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
