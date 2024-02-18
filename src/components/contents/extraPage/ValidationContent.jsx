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
import Button from "../../ButtonType2";
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
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => props.height}px;
  position: relative;
  @media screen and (max-width: 450px) {
    height: auto;
    min-height: 63vh;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 450px) and (max-height: 700px) {
    height: auto;
    padding-bottom: 40px;
  }
`;

//기능 설명 화면
const FeatureDescription = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="유효성 검사" />
    <Paragraph
      text="원하는 영역에 숫자에 대한 조건, 글자에 대한 조건, 사용자 지정 등
            다양하게 데이터값을 제한할 수 있는 기능입니다."
    />
    <SubTitle text="사용하는 방법" />

    <How text="1. 상단 메뉴바에 있는 데이터 탭에서 데이터 도구 버튼 > 유효성 검사를 클릭합니다." />
    <HelpImage
      width={"35%"}
      minWidth={"200px"}
      height={"auto"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 모든값, 정수, 소수점, 목록, 텍스트 길이, 사용자 지정 등 제한 대상을 선정합니다." />

    <How text="3.셀을 선택하면 나타날 설명 메시지 또는 오류 메시지 설정이 가능합니다." />
  </Container>
);

//Example 화면
const Example = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="유효성 검사 예제 - 데이터 유효성 검사 설정" />
    <ExampleQuestion
      text={
        "데이터 유효성 검사를 통해 유효성 조건 - 제한 대상을 목록으로 설정하시오.\n오류 메시지는 스타일 : 중지, 제목 : 분류명 오류, 오류 메시지 : 해당 분류명은 존재하지 않습니다로 지정하시오."
      }
    ></ExampleQuestion>
    <ExampleAnswerTitle />
    <ExampleAnswer
      text={
        "1) [데이터] - [데이터 도구] - [데이터 유효성 검사]를 통해 시행합니다."
      }
    />
    <ExampleAnswer
      text={
        "2) 설정 페이지에서 제한 대상을 목록으로 설정하고 원본에는 스커트, 셔츠, 팬츠, 티셔츠를 기입합니다."
      }
    />
    <HelpImage
      width={"75%"}
      minWidth={"450px"}
      height={"auto"}
      marginLeft={"66px"}
      src={images[1]}
    />
    <ExampleAnswer
      text={
        "3) 오류 메시지에서는 스타일 : 중지, 제목 : 분류명 오류, 오류 메시지 : 해당 분류명은 존재하지 않습니다로 입력합니다."
      }
    />
    <HelpImage
      width={"75%"}
      minWidth={"450px"}
      height={"auto"}
      marginLeft={"66px"}
      src={images[2]}
    />
    <ExampleAnswer
      text={
        "4) 이에 따라 스커트, 셔츠, 팬츠, 티셔츠가 포함된 목록상자가 생성되며 이외 다른 텍스트가 작성될 경우 오류 메시지가 나타납니다."
      }
    />
    <HelpImage
      width={"50%"}
      minWidth={"400px"}
      height={"auto"}
      marginLeft={"66px"}
      src={images[3]}
    />
  </Container>
);

const ValidationContent = ({ height }) => {
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
      />
    </StyledDiv>
  );
};

export default ValidationContent;
