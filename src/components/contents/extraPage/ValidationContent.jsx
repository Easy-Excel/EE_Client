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
} from "./ExtraComponent";
import Button from "../../Button";
//import images from "../../../assets/images/extra/valid";

//Webpack의 require.context를 사용하여 특정 폴더의 모든 파일 가져오기
const imagesContext = require.context(
  "../../../assets/images/extra/valid",
  false,
  /\.(png|jpg|jpeg|gif|svg)$/
);

// 이미지 파일 목록을 배열로 가져오기 (해당 폴더 내의 모든 이미지 파일이 배열에 포함됨)
const images = imagesContext.keys().map(imagesContext);

const StyledDiv = styled.div`
  height: 100%;
`;

//기능 설명 화면
const FeatureDescription = () => (
  <Container>
    <Title text="유효성 검사" />
    <Paragraph
      text="원하는 영역에 숫자에 대한 조건, 글자에 대한 조건, 사용자 지정 등
            다양하게 데이터값을 제한할 수 있는 기능입니다."
    />
    <SubTitle text="사용하는 방법" />

    <How text="1. 상단 메뉴바에 있는 데이터 탭에서 데이터 도구 버튼 > 유효성 검사를 클릭합니다." />
    <HelpImage
      width={"286px"}
      height={"146px"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 모든값, 정수, 소수점, 목록, 텍스트 길이, 사용자 지정 등 제한 대상을 선정합니다." />
    <HelpImage
      width={"344px"}
      height={"248px"}
      marginLeft={"94px"}
      src={images[1]}
    />
    <How text="3.셀을 선택하면 나타날 설명 메시지 또는 오류 메시지 설정이 가능합니다." />
    <HelpImage
      width={"736px"}
      height={"337px"}
      marginLeft={"94px"}
      src={images[3]}
    />
  </Container>
);

//Example 화면
const Example = () => (
  <Container>
    <Title text="유효성 검사 예제" />
    <ExampleQuestion
      text={
        "데이터 유효성 검사를 통해 유효성 조건 - 제한 대상을 목록으로 설정하시오.\n오류 메시지는 스타일 : 중지, 제목 : 분류명 오류, 오류 메시지 : 해당 분류명은 존재하지 않습니다로 지정하시오."
      }
    ></ExampleQuestion>
    <HelpImage
      width={"727px"}
      height={"302px"}
      marginLeft={"73px"}
      src={images[2]}
    />
    <ExampleAnswer
      text={
        "설정 페이지에서 제한 대상을 목록으로 설정하고 원본에는 스커트, 셔츠, 팬츠, 티셔츠를 기입합니다.\n[데이터] - [예측] -[가상분석] - [시나리오 관리자]를 클릭합니다.\n추가 버튼을 눌러 누른 후 시나리오 이름을 [비율인상]으로 기입합니다.\n변경 셀은 E4, E5셀을 기입하고 시나리오 값에는 각각 30, 90을 작성합니다.\n비율인하의 경우에도 4)와 같은 방식으로 작성한 후 [시나리오 관리자] - [요약] 버튼을 클릭하고 변동 셀에는 D10 셀을 기입합니다.\n확인 버튼을 클릭하면 시나리오 요약 보고서가 생성됩니다."
        }
    />
  </Container>
);

const ValidationContent = () => {
  //useState Hook을 사용하여 페이지 상태, 버튼 텍스트 상태 관리
  const [isExamplePage, setExampePage] = useState(false);
  const [buttonText, setButtonText] = useState("예제");

  //버튼 클릭시 페이지 내용 변경하는 이벤트
  const handleExamplePage = () => {
    setExampePage(!isExamplePage);
    setButtonText(isExamplePage ? "예제" : "기능 설명");
  };
  return (
    <StyledDiv>
      {isExamplePage ? <Example /> : <FeatureDescription />}
      <Button
        width={"15%"}
        // height={"53px"}
        backgroundColor={"#107c41"}
        fontColor={"white"}
        text={buttonText}
        onButtonClick={handleExamplePage}
      />
    </StyledDiv>
  );
};

export default ValidationContent;
