import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import General from "../components/contents/shortcutPage/General";
import Integrate from "../components/contents/shortcutPage/Integrate";
import Keytable from "../components/contents/shortcutPage/Keytable";
import Move from "../components/contents/shortcutPage/Move";
import SheetEditor from "../components/contents/shortcutPage/SheetEditor";
import BtnWrapper from "../components/BtnWrapper";

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
    console.log(content);
    setActiveContent(content);
  };
  const contentComponents = {
    Execution: <Keytable />,
    General: <General />,
    SheetEditor: <SheetEditor />,
    Integrate: <Integrate />,
    Move: <Move />,
  };
  return (
    <Container>
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
