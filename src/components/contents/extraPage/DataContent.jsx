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
  "../../../assets/images/extra/data",
  false,
  /\.(png|jpg|jpeg|gif|svg)$/
);
// 이미지 파일 목록을 배열로 가져오기 (해당 폴더 내의 모든 이미지 파일이 배열에 포함됨)
const images = imagesContext.keys().map(imagesContext);

const FeatureDescription = () => (
  <Container minHeight={"390px"} maxHeight={"390px"}>
    <Title text="데이터 통합" />
    <Paragraph text="복수의 데이터를 종합하여, 개별 데이터로는 알 수 없는 인사이트를 도출하거나 새로운 시각을 제공하는 기능입니다." />
    <SubTitle text="사용하는 방법" />

    <How text="1. 상단 메뉴바에 있는 데이터 탭에서 데이터 도구 > 통합을 클릭합니다." />

    <HelpImage
      width={"269px"}
      height={"220px"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 대화상자가 나오면 구하고자 하는 종류의 함수를 선택하고 참조 영역을 드래그한 후 추가합니다." />
    <HelpImage
      width={"711px"}
      height={"256px"}
      marginLeft={"94px"}
      src={images[1]}
    />
    <How text="3. 사용할 레이블에서 첫 행과 왼쪽 열에 체크를 하고 난 뒤 확인을 클릭하여 작업을 마무리합니다." />
    <HelpImage
      width={"404px"}
      height={"306px"}
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

const DataContent = () => {
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

export default DataContent;
