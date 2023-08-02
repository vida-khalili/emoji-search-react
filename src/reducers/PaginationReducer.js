const PaginationReducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "ACTIVE_PAGE":
      let newActivePage = state.activePage;
      // localStorage.setItem("activePage", state.activePage);
      return {
        ...state,
        activePage: newActivePage,
      };
    default:
      break;
  }
};

export default PaginationReducer;
