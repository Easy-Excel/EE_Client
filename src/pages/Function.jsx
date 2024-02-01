import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import AtoH from "../components/contents/functionPage/AtoH";
import ItoP from "../components/contents/functionPage/ItoP";
import QtoZ from "../components/contents/functionPage/QtoZ";
import BtnWrapper from "../components/BtnWrapper";
import ChatBot from "../components/ChatBot";
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;

//함수 페이지//로 가야함
function Function() {
  useEffect(() => {
    console.log("API 호출");
  });

  //navigator로 넘겨받은 값
  const { state } = useLocation();
  const [activeContent, setActiveContent] = useState(state.subCategory);

  const [buttons, setButtons] = useState([
    {
      id: "AtoH",
      width: "22%",
      height: "45px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "A~H",
      content: "AtoH",
    },
    {
      id: "ItoP",
      width: "22%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "I~P",
      content: "ItoP",
    },
    {
      id: "QtoZ",
      width: "22%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "Q~Z",
      content: "QtoZ",
    },
  ]); //버튼들을 담을 배열

  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  };
  const contentComponents = {
    AtoH: <AtoH />,
    ItoP: <ItoP />,
    QtoZ: <QtoZ />,
  };

  return (
    <>
    <Container>
      <BtnWrapper gap={"5.8vw"}>
        {buttons.map((button) => (
          <Button
            key={button.id}
            width={button.width}
            height={button.height}
            backgroundColor={button.id === activeContent ? "#107c41" : "white"}
            fontColor={button.id === activeContent ? "white" : "black"}
            border={button.id === activeContent ? "none" : "1px solid black"}
            text={button.text}
            onButtonClick={() => handleButtonClick(button.content)}
          ></Button>
        ))}
      </BtnWrapper>
      {contentComponents[activeContent]}
        <ChatBot></ChatBot>
    </Container>

    </>

  );
}
export default Function;
