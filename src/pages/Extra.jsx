import React, { useState } from "react";
import ButtonE from "../components/ButtonE";
import styled from "styled-components";
//함수 페이지//로 가야함
import PivotTableContent from "../components/contents/extraPage/PivotTableContent";

const Content = styled.div`
  width: 100%; //무조건 width 100%로 해주어야 함!
`;

//버튼을 클릭하면 해당 내용이 show되도록 짤 거임.
function Extra() {
  const [activeContent, setActiveContent] = useState("pivotTable");

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };
  const contentComponents = {
    pivotTable: <PivotTableContent />,
  };

  return (
    <Content>
      <ButtonE onButtonClick={handleButtonClick} />
      {/* onButtonClick은 버튼에서 온 props */}
      {contentComponents[activeContent]}
      {/* {activeContent==="pivotTable"&& <div>피벗테이블 내용</div>}

    {activeContent==="summary" &&<div>시나리오 요약</div>}

    {activeContent==="data" && <div>데이터 표</div>}

    {activeContent==="validation" && <div>유효성 검사</div>}

    {activeContent==="macro" &&<div>매크로</div>} */}
    </Content>
  );
}

export default Extra;
