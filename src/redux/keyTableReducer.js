const initialState = {
  searchResults: [],
};

const keyTableReducer = (state = initialState, action) => {
  // console.log("1" + initialState);
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      console.log("SET_SEARCH 리듀서실행");
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      // console.log(state);
      return state;
  }
};

export default keyTableReducer;
