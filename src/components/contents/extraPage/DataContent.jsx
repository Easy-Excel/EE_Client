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
  ExampleAnswer,
  ExampleAnswerTitle,
} from "./ExtraComponent";
import Button from "../../Button";

//Webpack의 require.context를 사용하여 특정 폴더의 모든 파일 가져오기
const imagesContext = require.context(
  "../../../assets/images/extra/data",
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
`;

const FeatureDescription = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="데이터 통합" />
    <Paragraph text="복수의 데이터를 종합하여, 개별 데이터로는 알 수 없는 인사이트를 도출하거나 새로운 시각을 제공하는 기능입니다." />
    <SubTitle text="사용하는 방법" />

    <How text="1. 상단 메뉴바에 있는 데이터 탭에서 데이터 도구 > 통합을 클릭합니다." />

    <HelpImage
      width={"30%"}
      minWidth={"250px"}
      height={"auto"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 대화상자가 나오면 구하고자 하는 종류의 함수를 선택하고 참조 영역을 드래그한 후 추가합니다." />
    <How text="3. 사용할 레이블에서 첫 행과 왼쪽 열에 체크를 하고 난 뒤 확인을 클릭하여 작업을 마무리합니다." />
  </Container>
);

const Example = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="데이터 통합 예제 - 여러 개의 표에서 구하고자 하는 데이터 통합" />
    <ExampleQuestion
      text={
        "데이터 통합 기능을 이용하여 [표1], [표2], [표3], [표4]의 자료에서 대륙별 '육지면적'과 '해양면적'의 최대값이 [표5]에 표시되도록 지정하되, 아시아, 유럽, 아프리카 대륙만을 대상으로 하시오."
      }
    ></ExampleQuestion>
    <ExampleAnswerTitle />
    <ExampleAnswer
      text={"1) [표5]에 구하고자 하는 대륙명과 면적의 종류를 작성합니다."}
    />
    <ExampleAnswer
      text={
        "2) [표5]를 드래그한 채 [데이터] - [데이터 도구] - [통합]을 클릭합니다."
      }
    />
    <ExampleAnswer
      text={"3) 최대값을 구해야 하므로 함수 부분에서 최대를 선택합니다."}
    />
    <ExampleAnswer
      text={
        "4) 참조 영역에는 [표1], [표2], [표3], [표4]에 해당하는 범위를 드래그한 후 아래에 추가 버튼을 클릭합니다."
      }
    />
    <HelpImage
      width={"85%"}
      minWidth={"500px"}
      height={"auto"}
      marginLeft={"66px"}
      src={images[1]}
    />
    <ExampleAnswer
      text={
        "5) 사용할 레이블에 있는 첫 행, 왼쪽 열 항목을 모두 체크해준 후 확인 버튼을 눌러 작업을 완료합니다."
      }
    />

    <HelpImage
      width={"38%"}
      minWidth={"250px"}
      height={"auto"}
      marginLeft={"66px"}
      src={images[2]}
    />
  </Container>
);

const DataContent = ({ height }) => {
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
        width={"15%"}
        height={"47px"}
        backgroundColor={"#107c41"}
        fontColor={"white"}
        text={buttonText}
        onButtonClick={handleExamplePage}
        absolute={"true"}
        bottom="23px"
      />
    </StyledDiv>
  );
};

export default DataContent;
