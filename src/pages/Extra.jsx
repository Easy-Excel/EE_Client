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
import useComponentSize from "../hooks/UseComponentSzie";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 450px) {
    height: auto;
    min-height: 63vh;
  }
`;

//함수 페이지//로 가야함
function Extra() {
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
    setActiveContent(content);
  };

  //Container 높이 계산해서 자식에게 props로 전달
  const [componentRef, size] = useComponentSize();

  const renderHeight = {
    mainBox: size.height - (45 + 26 + 17),
    container: size.height - (45 + 26 + 17) - 70 - 10,
  };

  const contentComponents = {
    PivotTable: <PivotTableContent height={renderHeight} />,
    Summary: <SummaryContent height={renderHeight} />,
    Data: <DataContent height={renderHeight} />,
    Validation: <ValidationContent height={renderHeight} />,
    Macro: <MacroContent height={renderHeight} />,
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

export default Extra;
