import React, { useState } from "react";
import styled from "styled-components";

import {
  Title,
  SubTitle,
  Paragraph,
  How,
  HelpImage,
  Container,
  ExampleQuestion,
  ExampleAnswerTitle,
  ExampleAnswer,
} from "../../mobile/components/ExtraComponentM";

import Button from "../../components/ButtonType2";

//Webpack의 require.context를 사용하여 특정 폴더의 모든 파일 가져오기
const imagesContext = require.context(
  "../../assets/images/extra/pivotTable",
  false,
  /\.(png|jpg|jpeg|gif|svg)$/
);

// 이미지 파일 목록을 배열로 가져오기 (해당 폴더 내의 모든 이미지 파일이 배열에 포함됨)
const images = imagesContext.keys().map(imagesContext);

const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => props.height}px;
  position: relative;
   @media screen and (max-width: 450px) {
    height: auto;
    min-height: 63vh;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 450px) and (max-height: 700px) {
    height: auto;
    padding-bottom: 50px;
  } 

  //background-color:black;
`;
//기능 설명 화면
const FeatureDescription = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="피벗테이블" />
    <Paragraph
      text="피벗테이블은 데이터를 계산, 요약 및 분석하는 강력한 도구로서 데이터의
        비교, 패턴 및 추세를 보는데 사용할 수 있습니다."
    />
    <SubTitle text="사용하는 방법" />

    <How text="1. 피벗테이블로 확인하고 싶은 데이터 영역을 추가해준 뒤, [삽입] > 피벗테이블을 선택합니다." />

    <HelpImage
      width={"38%"}
      minWidth={"250px"}
      height={"auto"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 팝업창이 뜨면 데이터 범위를 점검하고, 새 시트에 피벗테이블을 추가할 것인지, 기존 시트에 추가할 것인지 선택합니다." />
    <How text="3. 보고 싶은 데이터 기준을 '행' 부분에, 기준에 맞추어 보고싶은 항목을 '값' 부분에 선택하여 넣어줍니다." />
    <How text="4. 값에 대한 내용은 기본적으로 합계 또는 개수로 나오며 필요에 따라 평균, 최대/최소값 등으로 변경 가능합니다." />
  </Container>
);

//Example 화면
const Example = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="피벗테이블 예제 - 피벗 테이블 보고서 작성" />
    <ExampleQuestion
      text={
        "피벗 테이블 보고서를 [B16] 셀에 작성하시오.\n1) 보고서 레이아웃을 테이블 형식으로 표시하고 '밝은 회색, 피벗 스타일 밝게 15' 스타일을 적용하시오.\n2) 근속년수 필드를 그룹화하되 시작값은 1, 끝값은 10, 단위는 2로 지정하시오.\n3) 빈셀에는 '*'가 나오도록 하고, 열의 총합계는 표시하지 마시오."
      }
    ></ExampleQuestion>
    <ExampleAnswerTitle />
    <ExampleAnswer
      text={"1) [삽입] - [피벗 테이블] - [테이블/범위에서]를 클릭합니다."}
    />
    <ExampleAnswer
      text={
        "2) 표/범위는 현재 표가 위치한 범위 [B3:G13]을 설정하고 위치는 기존 워크시트 B16셀을 입력합니다."
      }
    />
    <HelpImage
      width={"65%"}
      minWidth={"500px"}
      height={"auto"}
      marginLeft={"30px"}
      src={images[1]}
    />
    <ExampleAnswer
      text={
        "3) 열에는 직급, 행에는 근속년수, 값에는 상호평가점수, 영업실적을 입력하고 ∑ 값의 위치를 행 레이블로 이동시킵니다."
      }
    />
    <HelpImage
      width={"80%"}
      minWidth={"480px"}
      marginLeft={"20px"}
      src={images[2]}
    />
    <ExampleAnswer
      text={
        "4) 보고서 레이아웃을 테이블 형식으로 표시하고 스타일은 '밝은 회색, 피벗 스타일 밝게 15'로 설정합니다."
      }
    />
    <ExampleAnswer
      text={
        "5) 근속년수 필드를 그룹화하되 시작값은 1, 끝값은 10, 단위는 2로 지정합니다."
      }
    />
    <ExampleAnswer
      text={
        "6) 빈셀에 오른쪽 마우스 커서를 눌러 피벗 테이블 옵션에 들어가 빈셀 표시에 *을 입력하고 열의 총합계는 표시하지 않습니다."
      }
    />
  </Container>
);

const PivotTableContent = ({ height }) => {
  //useState Hook을 사용하여 페이지 상태, 버튼 텍스트 상태 관리
  const [isExamplePage, setExampePage] = useState(false);
  const [buttonText, setButtonText] = useState("예제");

  //버튼 클릭시 페이지 내용 변경하는 이벤트
  const handleExamplePage = () => {
    setExampePage(!isExamplePage);
    setButtonText(isExamplePage ? "예제" : "기능 설명");
  };

  return (
    <StyledDiv height={height.mainBox}>
      {isExamplePage ? (
        <Example containerSize={height.container} />
      ) : (
        <FeatureDescription containerSize={height.container} />
      )}
      <Button
        width={"10%"}
        height={"47px"}
        backgroundColor={"#107c41"}
        fontColor={"white"}
        text={buttonText}
        onButtonClick={handleExamplePage}
        absolute={"true"}
        left={"65%"}
      />
    </StyledDiv>
  );
};

export default PivotTableContent;
