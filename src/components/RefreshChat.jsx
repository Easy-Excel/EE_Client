import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import refresh from "../assets/images/chatbot/refresh.png";
// import ChatBot from "./ChatBot";

const Wrapper = styled.div`
  /* width: 17%; //Set the initial width to 50% */
  //height: 40vh; */
  /* height: 30%; */
  position: fixed;
  /* left: 92%;
  bottom: -18%; */
  right: 10px;
  bottom: 10px;
  //top:10%;
  transform-origin: right bottom;
  /* 
  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
    left: 10%;
  } */
  //RefreshChat.js position:fixed로 변경 후 -> 화면 너비 축소시 버튼 위치 이상하게 되어서 주석처리함
  /* background-color: pink; */
`;

const Btn = styled.button`
  //position: fixed;
  //bottom:10%;
  /* right: -100%; */
  //transform: translateY(0%);
  //transform: translateX(900%);
  /* margin-right: 10; */
  /* right: -10%; 오른쪽 여백 조정 */

  //챗봇은 화면 크기 줄여도 크기 고정되도록 함 (2/9)
  width: 130px;
  height: 123px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
  /* background-color: yellow; */
`;
const Image_ = styled.img`
  width: 100%;
  height: 100%;
`;

//만약에 챗봇에서 x버튼이 눌렸으면 해당 컴포넌트 show, or not 챗봇
export default function RefreshChat({ onClickFunc }) {
  const [onButton, setOnButton] = useState(false);
  // if (onButton) return <ChatBot />;
  return (
    <>
      <Wrapper className="chatbotWrapper">
        <Btn
          // onClick={() => {
          //   setOnButton(true);
          // }}
          onClick={onClickFunc}
        >
          <Image_ src={refresh} alt="활성화이미지" />
        </Btn>
      </Wrapper>
    </>
  );
}
