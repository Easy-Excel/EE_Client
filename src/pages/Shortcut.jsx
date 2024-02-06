import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Keytable from "../components/contents/shortcutPage/Keytable";
import BtnWrapper from "../components/BtnWrapper";

//컴포넌트 사이즈를 가져오기 위한 hook
import useComponentSize from "../hooks/UseComponentSzie";
import { render } from "@testing-library/react";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;

//함수 페이지//로 가야함
function ShortCut() {
  useEffect(() => {
    console.log("API 호출");
  });
  const [activeContent, setActiveContent] = useState("Execution");

  const [buttons, setButtons] = useState([
    {
      id: "Execution",
      width: "16%",
      height: "45px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "파일 실행",
      content: "Execution",
    },
    {
      id: "General",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "일반",
      content: "General",
    },
    {
      id: "SheetEditor",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "시트 편집",
      content: "SheetEditor",
    },
    {
      id: "Integrate",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "통합문서 편집",
      content: "Integrate",
    },
    {
      id: "Move",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "이동",
      content: "Move",
    },
  ]); //버튼들을 담을 배열

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  //Container 높이 계산해서 자식에게 props로 전달
  const [componentRef, size] = useComponentSize();

  const renderHeight = {
    mainBox: size.height - (45 + 26 + 17),
  };
  const contentComponents = {
    Execution: <Keytable contentType="FILE_EXECUTION" height={renderHeight} />,
    General: <Keytable contentType="GENERAL" height={renderHeight} />,
    SheetEditor: <Keytable contentType="SHEET_EDITING" height={renderHeight} />,
    Integrate: <Keytable contentType="INTEGRATED_DOCUMENT_EDITING" height={renderHeight} />,
    Move: <Keytable contentType="MOVE" height={renderHeight} />,
  };
  return (
    <Container ref={componentRef}>
      <BtnWrapper gap={"2.4vw"}>
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
export default ShortCut;
