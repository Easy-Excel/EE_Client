import { SET_ERROR_CODE } from "./errorCodeActions";

const initialState={
    errorCode:null,
}

const errorCodeReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_ERROR_CODE:
            return{
                ...state,
                errorCode:action.payload,
            };
            default:
                return state;
    }
};
export default errorCodeReducer;