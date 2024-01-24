import React, { useState } from "react";
import ButtonE from "../components/ButtonE";
import styled from "styled-components";
//함수 페이지//로 가야함
import PivotTableContent from "../components/contents/extraPage/PivotTableContent";
import SummaryContent from "../components/contents/extraPage/SummaryContent";
import DataContent from "../components/contents/extraPage/DataContent";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;

//버튼을 클릭하면 해당 내용이 show되도록 짤 거임.
function Extra() {
  const [activeContent, setActiveContent] = useState("pivotTable");

  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  };
  const contentComponents = {
    pivotTable: <PivotTableContent />,
    summary: <SummaryContent />,
    data: <DataContent />,
    // validation :,
    // macro:,
  };

  return (
    <Container>
      <ButtonE onButtonClick={handleButtonClick} />
      {/* onButtonClick은 버튼에서 온 props */}
      {contentComponents[activeContent]}
      {/* {activeContent==="pivotTable"&& <div>피벗테이블 내용</div>}

    {activeContent==="summary" &&<div>시나리오 요약</div>}

    {activeContent==="data" && <div>데이터 표</div>}

    {activeContent==="validation" && <div>유효성 검사</div>}

    {activeContent==="macro" &&<div>매크로</div>} */}
    </Container>
  );
}

export default Extra;
