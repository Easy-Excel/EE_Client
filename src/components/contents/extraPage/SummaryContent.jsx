import React, { useState } from "react";
import {
  Title,
  SubTitle,
  Paragraph,
  How,
  HelpImage,
  ExampleBtn,
  Container,
} from "./ExtraComponent";

//Webpack의 require.context를 사용하여 특정 폴더의 모든 파일 가져오기
const imagesContext = require.context(
  "../../../assets/images/extra/summary",
  false,
  /\.(png|jpg|jpeg|gif|svg)$/
);
// 이미지 파일 목록을 배열로 가져오기 (해당 폴더 내의 모든 이미지 파일이 배열에 포함됨)
const images = imagesContext.keys().map(imagesContext);

const FeatureDescription = () => (
  <Container minHeight={"390px"} maxHeight={"390px"}>
    <Title text="시나리오 관리자" />
    <Paragraph
      text="시나리오 관리자는 다양한 상황과 변수에 따른 여러가지 결과값을 예상하여 알려주는 기능으로, 
      어떤 값이 이렇게 변할 때 결과값이 어떻게 되는지를 알려줍니다."
    />
    <SubTitle text="사용하는 방법" />

    <How text="1. 상단 메뉴바에 있는 데이터 탭에서 가상분석 버튼 > 시나리오 관리자를 클릭합니다." />

    <HelpImage
      width={"352px"}
      height={"191px"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 시나리오 추가 버튼을 눌러 시나리오 이름, 변경 셀을 입력한 후 바꿀 값을 입력합니다." />
    <HelpImage
      width={"763px"}
      height={"222px"}
      marginLeft={"94px"}
      src={images[1]}
    />
    <How text="3. 입력 후 요약 버튼을 누른 후 시나리오 요약과 시나리오 피벗 테이블 보고서 중 하나의 보고서 종류를 선택합니다." />
    <HelpImage
      width={"763px"}
      height={"228px"}
      marginLeft={"94px"}
      src={images[2]}
    />
  </Container>
);

const Example = () => (
  <Container minHeight={"390px"} maxHeight={"390px"}>
    <Title text="시나리오 관리자 예제" />
    <Paragraph text="피벗테이블 예제 페이지입니다." />
    <SubTitle text="부제목" />
  </Container>
);

const SummaryContent = () => {
  //useState Hook을 사용하여 페이지 상태, 버튼 텍스트 상태 관리
  const [isExamplePage, setExampePage] = useState(false);
  const [buttonText, setButtonText] = useState("예제");

  //버튼 클릭시 페이지 내용 변경하는 이벤트
  const handleExamplePage = () => {
    setExampePage(!isExamplePage);
    setButtonText(isExamplePage ? "예제" : "기능 설명");
  };
  return (
    <div>
      {isExamplePage ? <Example /> : <FeatureDescription />}
      <ExampleBtn onClick={handleExamplePage} buttonText={buttonText} />
    </div>
  );
};

export default SummaryContent;
