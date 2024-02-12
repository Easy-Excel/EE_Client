const initialState = {
    searchResults: {"results":{"searchResults":[]}}//수정
};
  
const keyTableReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return {
          ...state,
          searchResults: action.payload
        };
      default:
        return state;
    }
};

export default keyTableReducer;