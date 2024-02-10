const initialState = {
  showChatBot: true, // 기본적으로 ChatBot을 보이게 설정
};

export const hideChatBot = () => {
  return { type: "HIDE" };
};
export const showChatBot = () => {
  return { type: "SHOW" };
};

const chatBotReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        showChatBot: true,
      };
    case "HIDE":
      return {
        ...state,
        showChatBot: false,
      };
    default:
      return state;
  }
};

export default chatBotReducer;
