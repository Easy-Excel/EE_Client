import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ellipse3 from "../assets/images/chatbot/ellipse2.png";
import x from "../assets/images/chatbot/x.png";
import RefreshChat from "./RefreshChat";
import useComponentSize from "../hooks/UseComponentSzie";
//import refresh from "../assets/images/chatbot/refresh.png";

const messageBoxPadding = "12px";

const Wrapper = styled.div`
  position: fixed;
  right: 34px;
  bottom: 0px; //34px
  width: 350px; // 수정 가능
  /* height: 40vh; */ //height는 회색박스가 vh에 맞게 조절되도록한다. (회색 박스만 크기가 줄어들게 설정)

  // 요소가 변형되는 기준점을 정의
  transform-origin: right bottom;
  z-index: 100;
  background: none;

  /* width: 17%;  */
  /* Set the initial width to 50% */
  /* height: 30%; */
  /* position: absolute; */
  //margin-right:40%
  /* left: 80%;
  bottom: 9.6%; */

  /* @media (max-width: 768px) {
    width: 80%;
    height: 80%;
    left: 10%;
  } */
  //RefreshChat을 position:fixed로 변경 후 브라우저 width 줄이면 위치가 이상하게 변해서 주석처리
  border-radius: 20px 20px 0px 0px; //shadow 때문에 추가
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
`;

//타이틀
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 13px 14px;
  flex-direction: row; //동그라미랑 제목이랑 나란히 배치하려고
  //align-items: flex-start;
  align-items: center;
  gap: 10px;
  border-radius: 20px 20px 0px 0px;
  background: var(--Primary-200, #409667);
`;
const Title = styled.div`
  color: var(--Gray-50, #f9f8f8);
  font-family: SUIT;
  font-size: 20px; //폰트 조금 키움
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9%;
  height: 9%;
`;
const SubImage = styled.img`
  /* width:1.5vw;
    height:1.5vw; */
  width: 100%;
  height: 100%;
`;

const Btn = styled.button`
  width: 9%;
  height: 9%;
  margin-left: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

//대화 내용 컨테이너(회색박스)
const DialogContainer = styled.div`
  width: 100%;
  height: 55vh;
  padding-bottom: 50px;
  background: var(--Gray-100, #f6f5f5);
  //background: #e7e7a9;
  position: relative;
  min-height: 200px;
  /* overflow-y: scroll; */ //여기에 overflow scroll을 주면 적용이 안되고 하위에 한 번 더 감싸서 스크롤을 주니 해결됐습니다.

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const DialogForScroll = styled.div`
  height: 100%;
  overflow-y: auto;

  //-----스크롤바 스타일링------//
  &::-webkit-scrollbar {
    flex-shrink: 0;
    width: 10px; //스크롤바의 너비 조절 (조금 좁게 함)
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #d9d9d9;
  }
  //호버시 색상 변경
  &::-webkit-scrollbar-thumb:hover {
    background-color: #908f8f;
  }
`;

//사용자 input Box
const Userbox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0px ${messageBoxPadding} 15px 40px;
  flex-wrap: wrap;

  /* width: 100%; */
  /* align-items: center; */
  /* gap: 7px; */
  /* position: absolute;
  right: 14px;
  bottom: 65px; */
`;

const UserQuestion = styled.div`
  color: #f9f8f8;
  background: var(--Primary-200, #409667);
  border-radius: 20px;
  padding: 10px;
  max-width: 80%;
  word-wrap: break-word;
`;

const Responsebox = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0px 40px 15px ${messageBoxPadding};
  /* padding: 10px;
  align-items: center;
  gap: 7px;
  position: absolute;
  left: 12px;
  bottom: 140px;
  border-radius: 20px;
  background: var(--Gray-25, #fcfcfc); */
  //position: relative;
`;
const ChatBotResponse = styled.div`
  background: var(--Gray-25, #fcfcfc);
  border-radius: 20px;
  padding: 10px;
  color: #605f5f;
`;
const Input = styled.input`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px 10px 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 0px;
  //background: blue;

  border: none;
  outline: none;
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #908f8f;
    font-weight: 300;
  }
`;

export default function ChatBot({ xButton }) {
  const [userInput, setUserInput] = useState("");
  const [dialog, setDialog] = useState([]);
  const [onXButton, setOnXButton] = useState(false); //x버튼을 누르면 챗봇을 안보이게 할거임.
  const dialContainerRef = useRef(null);
  const [componentRef, size] = useComponentSize();

  useEffect(() => {
    console.log("useEffect is running");
    if (dialContainerRef.current) {
      console.log(dialContainerRef.current.scrollHeight);
      dialContainerRef.current.scrollTop = 0;
    }
  }, [dialog]);

  const handleUserQuestionSubmit = () => {
    if (userInput.trim() !== "") {
      setDialog((prevDialog) => [
        ...dialog,
        { type: "user", content: userInput },
        { type: "chatbot", content: "//response//" },
      ]);
      setUserInput("");
    }
  };

  if (onXButton) return <RefreshChat />;

  return (
    <>
      {xButton ? (
        <RefreshChat />
      ) : (
        <Wrapper className="열린화면">
          <TitleContainer className="타이틀 박스" ref={componentRef}>
            <ImgContainer>
              <SubImage src={ellipse3} alt="의미없는동그라미" />
            </ImgContainer>
            <Title>Chatbot</Title>
            <Btn
              onClick={() => {
                setOnXButton(true);
              }}
            >
              <SubImage src={x} alt="x버튼" />
            </Btn>
          </TitleContainer>
          <DialogContainer paddingTop={size.height} className="다이얼로그 박스">
            <DialogForScroll>
              {dialog.map(
                (entry, index) =>
                  // <div key={index}>
                  entry.type === "user" ? (
                    <Userbox key={index}>
                      <UserQuestion>{entry.content}</UserQuestion>
                    </Userbox>
                  ) : (
                    <Responsebox>
                      <ChatBotResponse>{entry.content}</ChatBotResponse>
                    </Responsebox>
                  )
                // </div>
              )}
            </DialogForScroll>
            <Input
              className="input입력란"
              text="text"
              placeholder="궁금한 내용을 입력하세요."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onBlur={handleUserQuestionSubmit}
              onKeyDown={(e) => e.key === "Enter" && handleUserQuestionSubmit()}
            />
          </DialogContainer>
        </Wrapper>
      )}
    </>
  );
}
