import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import CommonUtil from "../components/contents/etcPage/CommonUtil";
import Feedback from "../components/contents/etcPage/Feedback";
import BtnWrapper from "../components/BtnWrapper";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;

//함수 페이지//로 가야함
function Etc() {
  useEffect(() => {
    console.log("API 호출");
  });

  const [activeContent, setActiveContent] = useState("CommonUtil");

  const [buttons, setButtons] = useState([
    {
      id: "CommonUtil",
      width: "22%",
      height: "45px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "자주 쓰이는 기능",
      content: "CommonUtil",
    },
    {
      id: "Feedback",
      width: "22%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "피드백",
      content: "Feedback",
    },
  ]); //버튼들을 담을 배열

  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  };
  const contentComponents = {
    CommonUtil: <CommonUtil />,
    Feedback: <Feedback />,
  };

  return (
    <Container>
      <BtnWrapper gap={"2.8vw"}>
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
    </Container>
  );
}
export default Etc;
