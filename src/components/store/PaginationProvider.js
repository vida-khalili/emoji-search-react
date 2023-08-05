import React, { useReducer } from "react";
import PaginationContext from "./PaginationContext";

const defaultPageState = {
  activePage: 1,
};

const paginationReducer = (state, action) => {
  if (action.type === "CHANGE_ACTIVE-PAGE") {
    const activePage = action.clickedPage;
  }
  return defaultPageState;
};

const PaginationProvider = (props) => {
  const [pageState, dispatchPageAction] = useReducer(
    paginationReducer,
    defaultPageState
  );

  const changePageHandler = (clickedPage) => {
    dispatchPageAction({ type: "CHANGE_ACTIVE-PAGE", activePage: clickedPage });
  };

  const pageContext = {
    activePage: pageState.activePage,
    changePage: changePageHandler,
  };

  return (
    <PaginationContext.Provider value={pageContext}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
