import React, { useState } from "react";
import {
  Title,
  SubTitle,
  Paragraph,
  How,
  HelpImage,
  ExampleBtn,
  Container,
  ExampleQuestion,
} from "./ExtraComponent";

//Webpack의 require.context를 사용하여 특정 폴더의 모든 파일 가져오기
const imagesContext = require.context(
  "../../../assets/images/extra/pivotTable",
  false,
  /\.(png|jpg|jpeg|gif|svg)$/
);

// 이미지 파일 목록을 배열로 가져오기 (해당 폴더 내의 모든 이미지 파일이 배열에 포함됨)
const images = imagesContext.keys().map(imagesContext);

//기능 설명 화면
const FeatureDescription = () => (
  <Container minHeight={"390px"} maxHeight={"390px"}>
    <Title text="피벗테이블" />
    <Paragraph
      text="피벗테이블은 데이터를 계산, 요약 및 분석하는 강력한 도구로서 데이터의
        비교, 패턴 및 추세를 보는데 사용할 수 있습니다."
    />
    <SubTitle text="사용하는 방법" />

    <How text="1. 피벗테이블로 확인하고 싶은 데이터 영역을 추가해준 뒤, [삽입] > 피벗테이블을 선택합니다." />

    <HelpImage
      width={"286px"}
      height={"146px"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 팝업창이 뜨면 데이터 범위를 점검하고, 새 시트에 피벗테이블을 추가할 것인지, 기존 시트에 추가할 것인지 선택합니다." />
    <HelpImage
      width={"344px"}
      height={"248px"}
      marginLeft={"94px"}
      src={images[1]}
    />
    <How text="3.보고 싶은 데이터 기준을 '행' 부분에, 기준에 맞추어 보고싶은 항목을 '값' 부분에 선택하여 넣어줍니다." />
    <HelpImage
      width={"736px"}
      height={"337px"}
      marginLeft={"94px"}
      src={images[2]}
    />
    <How text="4. 값에 대한 내용은 기본적으로 합계 또는 개수로 나오며 필요에 따라 평균, 최대/최소값 등으로 변경 가능합니다." />
    <HelpImage
      width={"739px"}
      height={"335px"}
      marginLeft={"94px"}
      src={images[3]}
    />
  </Container>
);

//Example 화면
const Example = () => (
  <Container minHeight={"390px"} maxHeight={"390px"}>
    <Title text="피벗테이블 예제" />
    <Paragraph text="피벗테이블 예제 페이지입니다." />
    <SubTitle text="부제목" />
  </Container>
);

const PivotTableContent = () => {
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

export default PivotTableContent;
