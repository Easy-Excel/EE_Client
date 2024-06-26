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
  ExampleSubQuestion,
  ExampleAnswer,
  ExampleAnswerTitle,
} from "../../mobile/components/ExtraComponentM";
import Button from "../../components/ButtonType2";

//Webpack의 require.context를 사용하여 특정 폴더의 모든 파일 가져오기
const imagesContext = require.context(
  "../../assets/images/extra/summary",
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
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 450px) and (max-height: 700px) {
    height: auto;
    padding-bottom: 30px;
  }
`;

const FeatureDescription = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="시나리오 관리자" />
    <Paragraph
      text="시나리오 관리자는 다양한 상황과 변수에 따른 여러가지 결과값을 예상하여 알려주는 기능으로, 
      어떤 값이 이렇게 변할 때 결과값이 어떻게 되는지를 알려줍니다."
    />
    <SubTitle text="사용하는 방법" />

    <How text="1. 상단 메뉴바에 있는 데이터 탭에서 가상분석 버튼 > 시나리오 관리자를 클릭합니다." />

    <HelpImage
      width={"35%"}
      minWidth={"250px"}
      height={"auto"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 시나리오 추가 버튼을 눌러 시나리오 이름, 변경 셀을 입력한 후 바꿀 값을 입력합니다." />

    <How text="3. 입력 후 요약 버튼을 누른 후 시나리오 요약과 시나리오 피벗 테이블 보고서 중 하나의 보고서 종류를 선택합니다." />
  </Container>
);

const Example = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="시나리오 관리자 예제 - 비율인상/인하 변동 시나리오 작성" />
    <ExampleQuestion
      text={
        "시나리오 관리자 기능을 이용하여 표에서 기획팀과 개발팀의 소진율 [E4:E5]이 다음과 같이 변동하는 경우 소진액 합계 [D10]의 변동 시나리오를 작성하시오.\n이때 소진액은 예산*소진율/100으로 계산됩니다.\n [E4] 셀의 이름은 '기획팀소진율', '[E5]셀의 이름은 '개발팀소진율'로 정의하시오."
      }
    >
      <ExampleSubQuestion
        text={
          "시나리오1: 시나리오 이름은 '비율인상', 기획팀 소진율은 30, 개발팀 소진율은 90으로 설정하시오.\n시나리오2: 시나리오 이름은 '비율인하', 기획팀 소진율은 10, 개발팀 소진율은 60으로 설정하시오."
        }
      />
    </ExampleQuestion>
    <ExampleAnswerTitle />
    <ExampleAnswer
      text={
        "1) [E4] 셀을 클릭한 후 셀이름을 '기획팀소진율'로 정의하고 [E5] 셀을 클릭한 후 셀이름을 '개발팀소진율'로 정의합니다."
      }
    />
    <ExampleAnswer
      text={
        "2) [데이터] - [예측] -[가상분석] - [시나리오 관리자]를 클릭합니다."
      }
    />
    <ExampleAnswer
      text={
        "3) 추가 버튼을 눌러 누른 후 시나리오 이름을 [비율인상]으로 기입합니다."
      }
    />
    <HelpImage
      width={"85%"}
      minWidth={"544px"}
      height={"auto"}
      marginLeft={"66px"}
      src={images[1]}
    />

    <ExampleAnswer
      text={
        "4) 변경 셀은 E4, E5셀을 기입하고 시나리오 값에는 각각 30, 90을 작성합니다."
      }
    />
    <ExampleAnswer
      text={
        "5) 비율인하의 경우에도 4)와 같은 방식으로 작성한 후 [시나리오 관리자] - [요약] 버튼을 클릭하고 변동 셀에는 D10 셀을 기입합니다."
      }
    />
    <HelpImage
      width={"85%"}
      minWidth={"544px"}
      marginLeft={"66px"}
      src={images[2]}
    />
    <ExampleAnswer
      text={"6) 확인 버튼을 클릭하면 시나리오 요약 보고서가 생성됩니다."}
    />
  </Container>
);

const SummaryContent = ({ height }) => {
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
        left={"65%"}
      />
    </StyledDiv>
  );
};

export default SummaryContent;
