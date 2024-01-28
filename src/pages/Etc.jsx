import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import CommonUtil from "../components/contents/etcPage/CommonUtil";
import Feedback from "../components/contents/etcPage/Feedback";

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
function Etc() {
  useEffect(() => {
    console.log("API 호출");
  });

  const [activeContent, setActiveContent] = useState("CommonUtil");

  const [buttons,setButtons]=useState([
    { id:"CommonUtil", width: "20%", height: "50px", backgroundColor: "#107c41", fontColor: "white", border:"none", text:"자주 쓰이는 기능", content: "CommonUtil" },
    { id:"Feedback", width: "20%", height: "50px", backgroundColor: "white", fontColor: "black", border: "1px solid black", text:"피드백",content: "Feedback" },
    
  ]);//버튼들을 담을 배열

  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  }
  const contentComponents = {
    CommonUtil: <CommonUtil />,
    Feedback: <Feedback />,
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
  export default Etc
