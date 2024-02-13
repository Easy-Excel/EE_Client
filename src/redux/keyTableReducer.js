const initialState = {
    searchResults: [],
};
  
const keyTableReducer = (state = initialState, action) => {
  console.log("1"+initialState);
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return {
          ...state,
          searchResults: action.payload
        };
      default:
        return {
          ...state,
        }
    }
};

export default keyTableReducer;