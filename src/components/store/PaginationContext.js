import React from "react";
const PaginationContext = React.createContext({
  activePage: 0,
  changePage: (page) => {},
});

export default PaginationContext;
