import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";
import DateTime from "../components/contents/categoryPage/DateTime";
import Statistics from "../components/contents/categoryPage/Statistics";
import SearchRef from "../components/contents/categoryPage/SearchRef";
import Text from "../components/contents/categoryPage/Text";
import DataBase from "../components/contents/categoryPage/DataBase";
import BtnWrapper from "../components/BtnWrapper";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
`;

//함수 페이지//로 가야함
function Category() {
  useEffect(() => {
    console.log("API 호출");
  });

  //navigator로 넘겨받은 값
  const { state } = useLocation();
  const [activeContent, setActiveContent] = useState(state.subCategory);

  const [buttons, setButtons] = useState([
    {
      id: "DateTime",
      width: "16%",
      height: "45px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "날짜/시간",
      content: "DateTime",
    },
    {
      id: "Statistics",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "통계",
      content: "Statistics",
    },
    {
      id: "SearchRef",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "찾기/참조 영역",
      content: "SearchRef",
    },
    {
      id: "DataBase",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "데이터베이스",
      content: "DataBase",
    },
    {
      id: "Text",
      width: "16%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "텍스트",
      content: "Text",
    },
  ]); //버튼들을 담을 배열

  const handleButtonClick = (content) => {
    console.log(content);
    setActiveContent(content);
  };
  const contentComponents = {
    DateTime: <DateTime />,
    Statistics: <Statistics />,
    SearchRef: <SearchRef />,
    DataBase: <DataBase />,
    Text: <Text />,
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
export default Category;
