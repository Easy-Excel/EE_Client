import React, { useState } from "react";
import {
  Title,
  SubTitle,
  Paragraph,
  How,
  HelpImage,
  Container,
  ExampleQuestion,
  ExampleSubQuestion,
  ExampleAnswer,
} from "./ExtraComponent";
import Button from "../../Button";

//Webpack의 require.context를 사용하여 특정 폴더의 모든 파일 가져오기
const imagesContext = require.context(
  "../../../assets/images/extra/summary",
  false,
  /\.(png|jpg|jpeg|gif|svg)$/
);
// 이미지 파일 목록을 배열로 가져오기 (해당 폴더 내의 모든 이미지 파일이 배열에 포함됨)
const images = imagesContext.keys().map(imagesContext);

const FeatureDescription = () => (
  <Container height={"42vh"}>
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
  <Container height={"42vh"}>
    <Title text="시나리오 관리자 예제" />
    <ExampleQuestion
      text={
        "[1] 시나리오 관리자 기능을 이용하여 표에서 기획팀과 개발팀의 소진율 [E4:E5]이 다음과 같이 변동하는 경우 소진액 합계 [D10]의 변동 시나리오를 작성하시오.\n이때 소진액은 예산*소진율/100으로 계산됩니다.\n [E4] 셀의 이름은 '기획팀소진율', '[E5]셀의 이름은 '개발팀소진율'로 정의하시오."
      }
    >
      <ExampleSubQuestion
        text={
          "시나리오1: 시나리오 이름은 '비율인상', 기획팀 소진율은 30, 개발팀 소진율은 90으로 설정하시오.\n시나리오2: 시나리오 이름은 '비율인하', 기획팀 소진율은 10, 개발팀 소진율은 60으로 설정하시오."
        }
      />
    </ExampleQuestion>
    <HelpImage
      width={"553px"}
      height={"284px"}
      marginLeft={"73px"}
      src={images[3]}
    />
    <ExampleAnswer
      text={
        "[E4] 셀을 클릭한 후 셀이름을 '기획팀소진율'로 정의하고 [E5] 셀을 클릭한 후 셀이름을 '개발팀소진율'로 정의합니다.\n[데이터] - [예측] -[가상분석] - [시나리오 관리자]를 클릭합니다.\n추가 버튼을 눌러 누른 후 시나리오 이름을 [비율인상]으로 기입합니다.\n변경 셀은 E4, E5셀을 기입하고 시나리오 값에는 각각 30, 90을 작성합니다.\n비율인하의 경우에도 4)와 같은 방식으로 작성한 후 [시나리오 관리자] - [요약] 버튼을 클릭하고 변동 셀에는 D10 셀을 기입합니다.\n확인 버튼을 클릭하면 시나리오 요약 보고서가 생성됩니다."
      }
    />
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

  const contentComponents = {
    예제: <Example />,
    기능설명: <FeatureDescription />,
  };
  return (
    <div>
      {isExamplePage ? <Example /> : <FeatureDescription />}
      <Button
        width={"15%"}
        // height={"53px"}
        backgroundColor={"#107c41"}
        fontColor={"white"}
        text={buttonText}
        onButtonClick={handleExamplePage}
      />
    </div>
  );
};

export default SummaryContent;
