import React, { useEffect, useState } from "react";
import FContainer from "./FuncComponents";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

import Button from "../../Button";
import BtnWrapper from "../../BtnWrapper";

import testData from "./functionData.json";

export default function FuncDetail() {
  const [funcData, setFuncData] = useState(testData.result);

  const navigate = useNavigate();

  //네비게이트 훅을 통해 넘겨받은 정보 (api 연동시 사용)
  const { state } = useLocation();

  const funcId = state.funcId;
  const sortingType = state.sortingType;
  const category = state.category;

  const [funcButtons, setFunButtons] = useState([
    {
      id: "AtoH",
      width: "22%",
      height: "45px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "A~H",
      content: "AtoH",
    },
    {
      id: "ItoP",
      width: "22%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "I~P",
      content: "ItoP",
    },
    {
      id: "QtoZ",
      width: "22%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "Q~Z",
      content: "QtoZ",
    },
  ]); //버튼들을 담을 배열

  const [cateButtons, setCateButtons] = useState([
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

  useEffect(() => {
    console.log(`${funcId}로 데이터 가져오기`);
    // //데이터가져오기
    // fetch(`/functions/${funcId}`)
    // fetch("./functionData.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // 가져온 데이터를 상태에 설정
    //     setFuncData(data.result);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  }, [funcId]);

  const handleButtonClick = (subCategory) => {
    if (category === 1) {
      navigate("/home/function", { state: { subCategory } });
    } else {
      navigate("/home/category", { state: { subCategory } });
    }
  };

  const [isExamplePage, setExampePage] = useState(false);
  const [buttonText, setButtonText] = useState("함수 예제");

  //버튼 클릭시 페이지 내용 변경하는 이벤트
  const handleExamplePage = () => {
    setExampePage(!isExamplePage);
    setButtonText(isExamplePage ? "함수 예제" : "함수 설명");
  };

  return (
    <div style={{ width: "100%", height: "100%", paddingBottom: "20px" }}>
      {category === 1 ? (
        <BtnWrapper gap={"5.8vw"}>
          {funcButtons.map((button) => (
            <Button
              key={button.id}
              width={button.width}
              height={button.height}
              backgroundColor={
                button.text === sortingType ? "#107c41" : "white"
              }
              fontColor={button.text === sortingType ? "white" : "black"}
              border={button.text === sortingType ? "none" : "1px solid black"}
              text={button.text}
              onButtonClick={() => handleButtonClick(button.content)}
            />
          ))}
        </BtnWrapper>
      ) : (
        <BtnWrapper gap={"2.4vw"}>
          {cateButtons.map((button) => (
            <Button
              key={button.id}
              width={button.width}
              height={button.height}
              backgroundColor={
                button.text === sortingType ? "#107c41" : "white"
              }
              fontColor={button.text === sortingType ? "white" : "black"}
              border={button.text === sortingType ? "none" : "1px solid black"}
              text={button.text}
              onButtonClick={() => handleButtonClick(button.content)}
            />
          ))}
        </BtnWrapper>
      )}

      <FContainer
        height={"68%"}
        funcName={funcData.name}
        funcDes={funcData.explanation}
        argList={funcData.engAndKorList}
        funcFeats={funcData.caution}
      ></FContainer>
      <Button
        width={"15%"}
        // height={"53px"}
        backgroundColor={"#107c41"}
        fontColor={"white"}
        text={buttonText}
        onButtonClick={handleExamplePage}
      />
    </div>
  );
}
