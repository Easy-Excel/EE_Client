import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import styled from "styled-components";
//함수 페이지//로 가야함
import PivotTableContent from "../components/contents/extraPage/PivotTableContent";
import SummaryContent from "../components/contents/extraPage/SummaryContent";
import DataContent from "../components/contents/extraPage/DataContent";
import MacroContent from "../components/contents/extraPage/MacroContent";
import ValidationContent from "../components/contents/extraPage/ValidationContent";
import BtnWrapper from "../components/BtnWrapper";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 63vh;
  padding-bottom: 20px;
`;

//함수 페이지//로 가야함
function Extra() {
  useEffect(() => {
    console.log("API 호출");
  });
  const [activeContent, setActiveContent] = useState("PivotTable");

  const [buttons, setButtons] = useState([
    {
      id: "PivotTable",
      width: "16%",
      height: "45px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "피벗테이블",
      content: "PivotTable",
    },
    {
      id: "Summary",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "시나리오 관리자",
      content: "Summary",
    },
    {
      id: "Data",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "데이터 통합",
      content: "Data",
    },
    {
      id: "Validation",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "유효성 검사",
      content: "Validation",
    },
    {
      id: "Macro",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "매크로",
      content: "Macro",
    },
  ]); //버튼들을 담을 배열
  //
  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  };
  const contentComponents = {
    PivotTable: <PivotTableContent />,
    Summary: <SummaryContent />,
    Data: <DataContent />,
    Validation: <ValidationContent />,
    Macro: <MacroContent />,
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

export default Extra;
