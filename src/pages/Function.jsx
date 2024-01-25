import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ButtonA from "../components/ButtonA";
import AtoH from "../components/contents/functionPage/AtoH";
import ItoP from "../components/contents/functionPage/ItoP";
import QtoZ from "../components/contents/functionPage/QtoZ";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;

//함수 페이지//로 가야함
function Function() {
  useEffect(() => {
    console.log("API 호출");
  });

  const [activeContent, setActiveContent] = useState("AtoH");

  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  };
  
  const contentComponents = {
    AtoH: <AtoH />,
    ItoP: <ItoP />,
    QtoZ: <QtoZ />,
  };
  return (
    <Container>
      <ButtonA onButtonClick={handleButtonClick} />
      {contentComponents[activeContent]}
    </Container>
  );
}
export default Function;
