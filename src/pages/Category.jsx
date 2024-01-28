import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import DateTime from "../components/contents/categoryPage/DateTime";
import Statistics from "../components/contents/categoryPage/Statistics";
import SearchRef from "../components/contents/categoryPage/SearchRef";
import Text from "../components/contents/categoryPage/Text";
import DataBase from "../components/contents/categoryPage/DataBase";

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
function Category() {
  useEffect(() => {
    console.log("API 호출");
  });

  const [activeContent, setActiveContent] = useState("DateTime");

  const [buttons,setButtons]=useState([
    { id:"DateTime", width: "30%", height: "50px", backgroundColor: "#107c41", fontColor: "white", border:"none", text:"날짜/시간", content: "DateTime" },
    { id:"Statistics", width: "30%", height: "53px", backgroundColor: "white", fontColor: "black", border: "1px solid black", text:"통계",content: "Statistics" },
    { id:"SearchRef", width: "30%", height: "53px", backgroundColor: "white", fontColor: "black", border: "1px solid black", text:"찾기/참조 영역",content: "SearchRef" },
    { id:"DataBase", width: "30%", height: "53px", backgroundColor: "white", fontColor: "black", border: "1px solid black", text:"데이터베이스",content: "DataBase" },
    { id:"Text", width: "30%", height: "53px", backgroundColor: "white", fontColor: "black", border: "1px solid black", text:"텍스트",content: "Text" },
  ]);//버튼들을 담을 배열

  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  }
  const contentComponents = {
    DateTime: <DateTime/>,
    Statistics: <Statistics />,
    SearchRef: <SearchRef />,
    DataBase:<DataBase/>,
    Text:<Text/>,

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
  export default Category
