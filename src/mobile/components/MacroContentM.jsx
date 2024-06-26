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
  ExampleSubQuestion,
} from "../../mobile/components/ExtraComponentM";
import Button from "../../components/ButtonType2";

//Webpack의 require.context를 사용하여 특정 폴더의 모든 파일 가져오기
const imagesContext = require.context(
  "../../assets/images/extra/macro",
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
    padding-bottom: 80px;
  }
  @media screen and (max-width: 450px) and (max-height: 700px) {
    height: auto;
    padding-bottom: 80px;
  }
`;

//기능 설명 화면
const FeatureDescription = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="매크로" />
    <Paragraph
      text="여러 번 실행될 수 있는 작업내용을 엑셀 명령으로 저장해두고
            필요한 시트에서 한 번의 입력/클릭으로 그 작업을 실행가능하도록 자동화하는 기능입니다."
    />
    <SubTitle text="사용하는 방법" />

    <How text="1. 상단 메뉴바에 있는 개발 도구 탭에서 매크로 기록을 클릭하여 매크로 이름을 설정합니다." />
    <HelpImage
      width={"30%"}
      minWidth={"250px"}
      height={"auto"}
      marginLeft={"94px"}
      src={images[0]}
    />
    <How text="2. 매크로 이름을 설정한 후 반복해서 사용할 작업내용을 실행합니다." />
    <How text="3.작업내용 실행이 완료되면 매크로 중지 버튼을 클릭합니다." />
    <How text="4.저장된 매크로는 상단 메뉴바에 있는 개발 도구 탭에서 매크로를 클릭하여 확인 가능합니다." />
  </Container>
);

//Example 화면
const Example = ({ containerSize }) => (
  <Container height={containerSize}>
    <Title text="매크로 예제 - '통화 스타일'을 적용하는 매크로 생성" />
    <ExampleQuestion
      text={
        "다음은 A반 학생별 수강과목, 월학원비, 추가교재비, 총금액을 나타낸 표입니다.\n매크로를 활용하여 [F4:F12] 영역에 대하여 '통화 스타일'을 적용하는 매크코를 생성하시오."
      }
    >
      <ExampleSubQuestion
        text={
          "매크로 이름 : 통화스타일\n[도형] -> [기본 도형]의 '직사각형'을 동일 시트의 [B14:C15] 영역에 생성하고,\n도형을 클릭할 때 '통화스타일' 매크로가 실행되도록 설정하시오."
        }
      />
    </ExampleQuestion>

    <ExampleAnswerTitle />
    <ExampleAnswer
      text={"1) [개발도구] 탭을 클릭한 후 [코드] - [매크로 기록]을 클릭합니다."}
    />
    <ExampleAnswer
      text={
        "2) 매크로 이름에 통화스타일을 기입하며 확인 버튼을 누르는 순간부터 모든 활동이 기록됩니다."
      }
    />
    <HelpImage
      width={"80%"}
      minWidth={"500px"}
      marginLeft={"66px"}
      src={images[1]}
    />
    <ExampleAnswer
      text={
        "3) [F4:F12] 영역을 드래그한 후 [홈] - [스타일] - [셀 스타일] - [숫자 서식] -[통화]를 클릭합니다."
      }
    />
    <ExampleAnswer
      text={"4) 작업을 마치면 [개발 도구] - [코드] - [기록 중지]를 클릭합니다."}
    />
    <ExampleAnswer
      text={
        "5) [삽입] - [일러스트레이션] -[사각형] - [도형] - [직사각형]을 클릭한 후 동일 시트의 [B14:C15] 영역에 직사각형을 생성합니다."
      }
    />
    <HelpImage
      width={"55%"}
      minWidth={"400px"}
      marginLeft={"66px"}
      src={images[2]}
    />
    <ExampleAnswer
      text={
        "6) 해당 직사각형을 클릭하고 오른쪽 마우스를 눌러 [매크로 지정] - [통화 스타일]을 지정합니다."
      }
    />
  </Container>
);

const MacroContent = ({ height }) => {
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

export default MacroContent;
