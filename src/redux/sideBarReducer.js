const initialState = {
  showSideBar: false, //기본적으로 안보이게 설정
};

export const hideSideBar = () => {
  return { type: "HIDE" };
};
export const showSideBar = () => {
  return { type: "SHOW" };
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        showSideBar: true,
      };
    case "HIDE":
      return {
        ...state,
        showSideBar: false,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
