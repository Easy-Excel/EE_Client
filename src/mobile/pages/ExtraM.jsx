import React, { useState } from "react";
import Button from "../../components/Button";
import styled from "styled-components";

import PivotTableContentM from "../components/PivotTableContentM";
import SummaryContentM from "../components/SummaryContentM";
import DataContentM from "../components/DataContentM";
import MacroContentM from "../components/MacroContentM";
import ValidationContentM from "../components/ValidationContentM";

import BtnWrapper from "../../components/BtnWrapper";
import useComponentSize from "../../hooks/UseComponentSzie";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: pink;
  //flex-direction: column;
`;

const StyledBtnWrapper = styled(BtnWrapper)`
  //버튼 2줄 배열하려고
  gap: 2.4vw;
  justify-content: center;
  width: 100%;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.4vw;
  flex-wrap: wrap;
  background-color: red;
`;

//함수 페이지//로 가야함
function ExtraM() {
  const [activeContent, setActiveContent] = useState("PivotTable");

  const [buttons, setButtons] = useState([
    {
      id: "PivotTable",
      //width: "16%",
      width: "89px",
      height: "36px",
      padding: "10px",
      gap: "10px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "피벗테이블",
      content: "PivotTable",
    },
    {
      id: "Summary",
      width: "89px",
      height: "36px",
      padding: "10px",
      gap: "10px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "시나리오 관리자",
      content: "Summary",
    },
    {
      id: "Data",
      width: "89px",
      height: "36px",
      padding: "10px",
      gap: "10px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "데이터 통합",
      content: "Data",
    },
    {
      id: "Validation",
      width: "89px",
      height: "36px",
      padding: "10px",
      gap: "10px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "유효성 검사",
      content: "Validation",
    },
    {
      id: "Macro",
      width: "89px",
      height: "36px",
      padding: "10px",
      gap: "10px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
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
    PivotTable: <PivotTableContentM height={renderHeight} />,
    Summary: <SummaryContentM height={renderHeight} />,
    Data: <DataContentM height={renderHeight} />,
    Validation: <ValidationContentM height={renderHeight} />,
    Macro: <MacroContentM height={renderHeight} />,
  };

  return (
    <Container ref={componentRef}>
      <StyledBtnWrapper>
        <ButtonRow>
          {buttons.map((button) => (
            <Button
              key={button.id}
              backgroundColor={
                button.id === activeContent ? "#107c41" : "white"
              }
              fontColor={button.id === activeContent ? "white" : "black"}
              border={button.id === activeContent ? "none" : "1px solid black"}
              text={button.text}
              onButtonClick={() => handleButtonClick(button.content)}
            ></Button>
          ))}
        </ButtonRow>
        {/* 
        <ButtonRow>
        {buttons.slice(3).map((button) => (
          <Button
            key={button.id}
            backgroundColor={button.id === activeContent ? "#107c41" : "white"}
            fontColor={button.id === activeContent ? "white" : "black"}
            border={button.id === activeContent ? "none" : "1px solid black"}
            text={button.text}
            onButtonClick={() => handleButtonClick(button.content)}
          ></Button>
        ))}
        </ButtonRow> */}
      </StyledBtnWrapper>
      {contentComponents[activeContent]}
    </Container>
  );
}

export default ExtraM;
