import React, { useState, useEffect, useCallback } from "react";
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
  const [activeContent, setActiveContent] = useState("");
  const [functionsList, setFunctionsList] = useState([]);
  const [sortingType, setSortyingType] = useState("");
  const [endpoints, setEndpoints] = useState({
    DateTime: "http://3.39.29.173:8080/functions/category?type=DATE_TIME",
    Statistics: "http://3.39.29.173:8080/functions/category?type=STATISTICS",
    SearchRef:
      "http://3.39.29.173:8080/functions/category?type=SEARCH_REFERENCE",
    DataBase: "http://3.39.29.173:8080/functions/category?type=DATABASE",
    Text: "http://3.39.29.173:8080/functions/category?type=TEXT",
  });

  useEffect(() => {
    setActiveContent("DateTime");
  }, []);

  const fetchFunListHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);

    try {
      //async await 사용
      const response = await fetch(endpoints[activeContent], { method: "GET" });
      const data = await response.json();
      const functions = data.result.inquiryList;

      setFunctionsList(functions);
      console.log(data.result.categoryType);
      setSortyingType(data.result.categoryType);

      // setIsLoading(false);
    } catch (error) {
      // setError(error.message);
    }
    // setIsLoading(false);
  }, [activeContent, endpoints]);

  useEffect(() => {
    fetchFunListHandler();
  }, [fetchFunListHandler]);

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
    setActiveContent(content);
  };
  const contentComponents = {
    DateTime: (
      <DateTime functionsList={functionsList} sortingType={sortingType} />
    ),
    Statistics: (
      <Statistics functionsList={functionsList} sortingType={sortingType} />
    ),
    SearchRef: (
      <SearchRef functionsList={functionsList} sortingType={sortingType} />
    ),
    DataBase: (
      <DataBase functionsList={functionsList} sortingType={sortingType} />
    ),
    Text: <Text functionsList={functionsList} sortingType={sortingType} />,
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
