import React, { useState,useEffect } from "react";
import Button from "../components/Button";
import styled from "styled-components";
//함수 페이지//로 가야함
import PivotTableContent from "../components/contents/extraPage/PivotTableContent";
import SummaryContent from "../components/contents/extraPage/SummaryContent";
import DataContent from "../components/contents/extraPage/DataContent";
import MacroContent from "../components/contents/extraPage/MacroContent";
import ValidationContent from "../components/contents/extraPage/ValidationContent";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;
const BtnWrapper = styled.div`
  box-sizing: border-box;
  flex-grow: 1; /* 각 항목이 동일한 너비를 가지도록 설정합니다. */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 가운데 정렬 */
  width: 100%;
  height: 100px;
  gap: 90px;
  flex-shrink: 0;
  margin:  -10px 12px auto; //서브 카테고리 위치를 조정
  padding: 27px 20px;
  border-bottom: 3.11px solid black;
`;

//함수 페이지//로 가야함
function Extra() {
  useEffect(() => {
    console.log("API 호출");
  });
  const [activeContent, setActiveContent] = useState("PivotTable");

  const [buttons,setButtons]=useState([
    { id:"PivotTable", width: "50%", height: "50px", backgroundColor: "#107c41", fontColor: "white", border:"none", text:"피벗테이블", content: "PivotTable" },
    { id:"Summary", width: "50%", height: "50px", backgroundColor: "white", fontColor: "black", border: "1px solid black", text:"시나리오 관리자",content: "Summary" },
    { id:"Data", width: "50%", height: "50px", backgroundColor: "white", fontColor: "black", border: "1px solid black", text:"데이터 통합",content: "Data" },
    { id:"Validation", width: "50%", height: "50px", backgroundColor: "white", fontColor: "black", border: "1px solid black", text:"유효성 검사",content: "Validation" },
    { id:"Macro", width: "50%", height: "50px", backgroundColor: "white", fontColor: "black", border: "1px solid black", text:"매크로",content: "Macro" },
  ]);//버튼들을 담을 배열
// 
  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  }
  const contentComponents = {
    PivotTable: <PivotTableContent />,
    Summary: <SummaryContent />,
    Data: <DataContent />,
    Validation :<ValidationContent/>,
    Macro:<MacroContent/>
  };
  
  return (
    <Container>
      <Button onButtonClick={handleButtonClick} />
      <BtnWrapper>
      {buttons.map((button)=>(
        <Button
          key={button.id}
          width={button.width}
          height={button.height}
          backgroundColor={button.id===activeContent? "#107c41":"white"}
          fontColor={button.id===activeContent? "white":"black"}
          border={button.id===activeContent? "none" : "1px solid black"}
          text={button.text}
          onButtonClick={() => handleButtonClick(button.content)}
          >
        </Button>
      ))}
      </BtnWrapper>
      {contentComponents[activeContent]}
    </Container>
  );
  }

export default Extra;

