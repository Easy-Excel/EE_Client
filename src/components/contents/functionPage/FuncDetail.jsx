import React, { useEffect, useState } from "react";
import FDetailContainer from "./FuncDetailComponents";
import FExampleContainer from "./FuncExampleComponent";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

import useComponentSize from "../../../hooks/UseComponentSzie";

//버튼
import Button from "../../Button";
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
  const exType = 1; //예제 타입을 저장. 임시로 값 할당

  //서버에서 함수 데이터를 가져와 저장 / 현재는 임시로 테스트 데이터 저장
  const [funcData, setFuncData] = useState(testData.result);
  const [funcExData, setFuncExData] = useState(exampleTestData.result);

  //함수 설명, 함수 예제 상태 관리
  const [isExamplePage, setExampePage] = useState(false);
  const [buttonText, setButtonText] = useState("함수 예제");
  //버튼 클릭시 페이지 내용 변경하는 이벤트
  const handleExamplePage = () => {
    setExampePage(!isExamplePage);
    setButtonText(isExamplePage ? "함수 예제" : "함수 설명");
  };

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

  //컴포넌트 사이즈 가져오기
  const [componentRef, size] = useComponentSize();
  const [containerSize, setContainerSize] = useState("84%");

  useEffect(() => {
    const newContainerSize = size.height - 27 - 10 - 65.5; //div(흰 박스) - 스크롤 영역 margin-top - 스크롤 영역 margin-bottom - 버튼 영역+margin
    setContainerSize(newContainerSize.toString() + "px");
  }, [size]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      ref={componentRef} // ref 속성 추가 (컨텐츠 크기를 가져오기 위함)
    >
      {isExamplePage ? (
        <FExampleContainer
          type={exType}
          height={containerSize}
          exData={funcExData}
        />
      ) : (
        // 그룹화하기 위한 빈태그
        <>
          <FDetailContainer
            height={containerSize}
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
