export const SET_ERROR_CODE='SET_ERROR_CODE';
export const setErrorCode=(errorCode)=>({//에러코드 받아와서 액션 객체 생성
    type:SET_ERROR_CODE,
    payload : errorCode,
}
);