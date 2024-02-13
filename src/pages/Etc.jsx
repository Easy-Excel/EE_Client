import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import CommonUtil from "../components/contents/etcPage/CommonUtil";
import Feedback from "../components/contents/etcPage/Feedback";
import BtnWrapper from "../components/BtnWrapper";
import useComponentSize from "../hooks/UseComponentSzie";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;

//함수 페이지//로 가야함
function Etc() {
  const { state } = useLocation();
  if (state !== null) {
    console.log(state.content);
  }

  const [activeContent, setActiveContent] = useState(
    state === null ? "CommonUtil" : state.content
  );

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
  //Container 높이 계산해서 자식에게 props로 전달
  const [componentRef, size] = useComponentSize();
  const renderHeight = {
    mainBox: size.height - (45 + 26 + 17),
    container: size.height - (45 + 26 + 17) - 25,
  };

  const contentComponents = {
    CommonUtil: <CommonUtil />,
    Feedback: <Feedback height={renderHeight} />,
  };

  return (
    <Container ref={componentRef}>
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
