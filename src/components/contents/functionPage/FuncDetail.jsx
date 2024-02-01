import React, { useEffect, useState, useRef } from "react";
import FDetailContainer from "./FuncDetailComponents";
import FExampleContainer from "./FuncExampleComponent";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

import useComponentSize from "../../../hooks/UseComponentSzie";

//버튼
import Button from "../../Button";
import BtnWrapper from "../../BtnWrapper";

//테스트용 데이터
import testData from "./functionData.json";
import exampleTestData from "./functionExampleData.json";

export default function FuncDetail() {
  const navigate = useNavigate();

  //네비게이트 훅을 통해 넘겨받은 정보 (api 연동시 사용)
  //함수 id를 받음 -> id를 가지고 서버에서 해당 함수에 대한 데이터 가져오기
  const { state } = useLocation();
  const funcId = state.funcId;
  const sortingType = state.sortingType;
  const category = Number(state.category); //서브 카테고리를 위해 가져오는 값(함수인지 범주인지)
  const exType = 1; //예제 타입을 저장. 임시로 값 할당

  //category가 함수인경우 서브 카테고리 버튼
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

  //category가 범주인 경우 서브 카테고리 버튼
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

  //서버에서 함수 데이터를 가져와 저장 / 현재는 임시로 테스트 데이터 저장
  const [funcData, setFuncData] = useState(testData.result);
  const [funcExData, setFuncExData] = useState(exampleTestData.result);

  //데이터 가져오기
  useEffect(() => {
    // console.log(`${funcId}로 데이터 가져오기`);
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

  //서브 카테고리 버튼 클릭시 페이지 이동
  const handleButtonClick = (subCategory) => {
    if (category === 1) {
      navigate("/home/function", { state: { subCategory } });
    } else {
      navigate("/home/category", { state: { subCategory } });
    }
  };

  //함수 설명, 함수 예제 상태 관리
  const [isExamplePage, setExampePage] = useState(false);
  const [buttonText, setButtonText] = useState("함수 예제");

  //버튼 클릭시 페이지 내용 변경하는 이벤트
  const handleExamplePage = () => {
    setExampePage(!isExamplePage);
    setButtonText(isExamplePage ? "함수 예제" : "함수 설명");
  };

  const [componentRef, size] = useComponentSize();
  const [detailContainerSize, setDetailContainerSize] = useState("84%");
  const [exContainerSize, setExContainerSize] = useState("84%");

  useEffect(() => {
    console.log(size.height.toString());
    const newDetailSize = size.height - 90 - 65.5 - 17 - 10; // div(흰 박스) - 서브 카테고리 바 사이즈(margin,padding 고려) - 버튼 크기+위치 - 스크롤 영역 margin-top - 스크롤 영역 margin-bottom
    const newExSize = size.height - 17 - 10; //div(흰 박스) - 스크롤 영역 margin-top - 스크롤 영역 margin-bottom
    console.log(newDetailSize);
    setDetailContainerSize(newDetailSize.toString() + "px");
    setDetailContainerSize(newExSize.toString() + "px");
  }, [size]);

  // 17~10
  return (
    // 서브카테고리 버튼들
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "pink",
      }}
      ref={componentRef} // ref 속성 추가
    >
      {isExamplePage ? (
        <FExampleContainer
          type={exType}
          height={exContainerSize}
          exData={funcExData}
        />
      ) : (
        // 그룹화하기 위한 빈태그
        <>
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
                  border={
                    button.text === sortingType ? "none" : "1px solid black"
                  }
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
                  border={
                    button.text === sortingType ? "none" : "1px solid black"
                  }
                  text={button.text}
                  onButtonClick={() => handleButtonClick(button.content)}
                />
              ))}
            </BtnWrapper>
          )}
          <FDetailContainer
            height={detailContainerSize}
            funcName={funcData.name}
            funcDes={funcData.explanation}
            argList={funcData.engAndKorList}
            funcFeats={funcData.caution}
          />
        </>
      )}

      <Button
        width={"15%"}
        // height={"53px"}
        backgroundColor={"#107c41"}
        fontColor={"white"}
        text={buttonText}
        onButtonClick={handleExamplePage}
        absolute={true}
        bottom="23px"
      />
    </div>
  );
}

//FDetailContainer 값 넘겨줄 때 하나씩 넘겨주지 말고 result 객체 자체를 넘기고 내부에서 처리하도록 수정할까 고려중...
//FExampleContainer 처럼
