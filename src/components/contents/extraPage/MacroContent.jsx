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

//Webpack의 require.context를 사용하여 특정 폴더의 모든 파일 가져오기
const imagesContext = require.context(
  "../../../assets/images/extra/macro",
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
    <Title text="매크로" />
    <Paragraph
      text="여러 번 실행될 수 있는 작업내용을 엑셀 명령으로 저장해두고
            필요한 시트에서 한 번의 입력/클릭으로 그 작업을 실행가능하도록 자동화하는 기능입니다."
    />
    <SubTitle text="사용하는 방법" />

    <How text="1. 상단 메뉴바에 있는 개발 도구 탭에서 매크로 기록을 클릭하여 매크로 이름을 설정합니다." />
    <HelpImage
      width={"286px"}
      height={"146px"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 매크로 이름을 설정한 후 반복해서 사용할 작업내용을 실행합니다." />
    <HelpImage
      width={"344px"}
      height={"248px"}
      marginLeft={"94px"}
      src={images[1]}
    />
    <How text="3.작업내용 실행이 완료되면 매크로 중지 버튼을 클릭합니다." />
    {/* <HelpImage
      width={"736px"}
      height={"337px"}
      marginLeft={"94px"}
      src={images[3]}
    /> */}
     <How text="4.저장된 매크로는 상단 메뉴바에 있는 개발 도구 탭에서 매크로를 클릭하여 확인 가능합니다." />
    {/* <HelpImage
      width={"736px"}
      height={"337px"}
      marginLeft={"94px"}
      src={images[3]}
    /> */}
  </Container>
);

//Example 화면
const Example = () => (
  <Container>
    <Title text="매크로 예제" />
    <ExampleQuestion
      text={
        "다음은 A반 학생별 수강과목, 월학원비, 추가교재비, 총금액을 나타낸 표입니다.\n매크로를 활용하여 [F4:F12] 영역에 대하여 '통화 스타일'을 적용하는 매크코를 생성하시오.\n매크로 이름 : 통화스타일\n[도형] -> [기본 도형]의 '직사각형'을 동일 시트의 [B14:C15] 영역에 생성하고,\n도형을 클릭할 때 '통화스타일' 매크로가 실행되도록 설정하시오."}
    ></ExampleQuestion>
    <HelpImage
      width={"727px"}
      height={"302px"}
      marginLeft={"73px"}
      src={images[2]}
    />
    <ExampleAnswer
      text={
        "[개발도구] 탭을 클릭한 후 [코드] - [매크로 기록]을 클릭합니다.\n매크로 이름에 통화스타일을 기입하며 확인 버튼을 누르는 순간부터 모든 활동이 기록됩니다.\n[F4:F12] 영역을 드래그한 후 [홈] - [스타일] - [셀 스타일] - [숫자 서식] -[통화]를 클릭합니다.\n작업을 마치면 [개발 도구] - [코드] - [기록 중지]를 클릭합니다.\n[삽입] - [일러스트레이션] -[사각형] - [도형] - [직사각형]을 클릭한 후 동일 시트의 [B14:C15] 영역에 직사각형을 생성합니다.\n해당 직사각형을 클릭하고 오른쪽 마우스를 눌러 [매크로 지정] - [통화 스타일]을 지정합니다."
        }
    />
  </Container>
);

const MacroContent = () => {
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

export default MacroContent;
