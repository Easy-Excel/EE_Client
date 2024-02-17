import React, { useEffect, useState } from "react";
import FDetailContainer from "./FuncDetailComponents";
import FExampleContainer from "./FuncExampleComponent";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useComponentSize from "../../../hooks/UseComponentSzie";
import { API } from "../../../config";

//버튼
import Button from "../../ButtonType2";

const Wrapper = styled.div`
  /* 화면 폭이 600px 이하일 때 적용되는 스타일 */
  @media (max-width: 600px) {
    font-size: 14px; /* 예시로 글꼴 크기를 14px로 설정 */
  }
`;

export default function FuncDetail() {
  //네비게이트 훅을 통해 넘겨받은 정보 (api 연동시 사용)
  //함수 id를 받음 -> id를 가지고 서버에서 해당 함수에 대한 데이터 가져오기
  const { state } = useLocation();
  const funcId = state.funcId;

  //서버에서 함수 데이터를 가져와 저장 / 현재는 임시로 테스트 데이터 저장
  const [funcData, setFuncData] = useState(null);
  const [funcExData, setFuncExData] = useState(null);
  const [exampleCount, setExampleCount] = useState(0);
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
    console.log(`${funcId}로 데이터 가져오기`);
    // 데이터가져오기
    // 함수 설명 : http://3.39.29.173:8080/functions/{function_id}
    // 함수 예제 조회 : http://3.39.29.173:8080/functions/{function_id}/examples
    fetch(`${API.FUNCTION}/${funcId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // 가져온 데이터를 상태에 설정
        setFuncData(data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch(`${API.FUNCTION}/${funcId}/examples`)
      .then((response) => response.json())
      .then((data) => {
        setFuncExData(data.result.functionsExampleDTOList);
        setExampleCount(data.result.listSize);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [funcId]);

  //컴포넌트 사이즈 가져오기
  const [componentRef, size] = useComponentSize();
  const [containerSize, setContainerSize] = useState("84%");

  //이전, 다음 버튼 활성화 상태 관리, 예제 인덱스 상태관리
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);
  const [exIndex, setExIndex] = useState(0);

  useEffect(() => {
    console.log("exampleCount : ", exampleCount);
    if (exampleCount === 1) {
      setHasNext(false);
      setHasPrev(false);
    } else if (exampleCount > 1) {
      setHasNext(true);
      setHasPrev(false);
    }
  }, [exampleCount]);

  const onClickNext = () => {
    setExIndex((pre) => pre + 1); //인덱스 증가
    if (exIndex + 1 === exampleCount - 1) {
      setHasNext(false);
    } else {
      setHasNext(true);
    }
    setHasPrev(true);
  };

  const onClickPrev = () => {
    setExIndex((pre) => pre - 1); //인덱스 증가
    if (exIndex - 1 === 0) {
      setHasPrev(false);
    } else {
      setHasPrev(true);
    }
    setHasNext(true);
  };

  useEffect(() => {
    const newContainerSize = size.height - 32 - 10 - 70; //div(흰 박스) - 스크롤 영역 margin-top - 스크롤 영역 margin-bottom - 버튼 영역+margin
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
          idx={exIndex}
          height={containerSize}
          exData={funcExData}
          leftDisable={!hasPrev}
          rightDisable={!hasNext}
          leftClick={onClickPrev}
          rightClick={onClickNext}
          funName={funcData.name}
        />
      ) : (
        // 그룹화하기 위한 빈태그
        <Wrapper>
          <FDetailContainer height={containerSize} funData={funcData} />
        </Wrapper>
      )}
      <Button
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
