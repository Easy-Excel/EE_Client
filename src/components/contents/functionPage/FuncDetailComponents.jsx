import React from "react";
import styled from "styled-components";

export const FuncContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: ${(props) => props.height};
  overflow-y: auto;
  margin-top: 27px;
  margin-bottom: 10px;
  padding-right: 15px;

  //-----스크롤바 스타일링------//
  &::-webkit-scrollbar {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #d9d9d9;
  }
  //호버시 색상 변경
  &::-webkit-scrollbar-thumb:hover {
    background-color: #908f8f;
  }
`;

export const FuncTitle = styled.h1`
  color: #000;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 12px;
`; //함수 이름
const FuncSubTitle = styled.h2`
  color: #000;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 10px;
`; //함수 구문, 함수 특징(하위 제목 부분)

export const FuncDescription = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 36px;
  margin-bottom: 8px;
`; //함수 설명 text

//Syntax 부분 component
const FuncSyntaxBox = styled.div`
  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: white;
`; //함수 구문 box
const FuncSyntax = styled.div`
  padding: 18px 36px;
  display: flex;
  gap: 5px;
`; //함수 구문(=함수이름(인수,...)
const FuncSyntaxFName = styled.div`
  color: #107c41;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const FuncSyntaxSign = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`; //=, (,) 등
const FuncSyntaxArgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`; //argument 영어, 한국어 한 묶음

const FuncSyntaxArg = styled.div`
  border-bottom: 2.5px solid black;
  text-align: center;
  padding-bottom: 3px;
`; //argument

const FuncSyntaxArgKor = styled.div`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`; //argument (한국어)

const FlexDivMargin = styled.div`
  display: flex;
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
`;

const FuncFeatures = styled.ul`
  margin-left: 38px;
  /* margin-bottom: 10px; */
`;
//함수 특징 unordered lists 묶음
const FuncFeature = styled.li`
  list-style-type: disc;
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 8px;
`; //함수 특징 list

export default function FDetailContainer({
  height,
  funcName,
  funcDes,
  argList,
  funcFeats,
}) {
  return (
    <FuncContainer height={height}>
      {/* 함수 설명 */}
      <FuncTitle>{funcName}</FuncTitle>
      {funcDes.split("\n").map((line, index) => (
        <FuncDescription key={index}>{line}</FuncDescription>
      ))}

      {/* 함수 구문 */}
      <FuncSubTitle>함수 구문</FuncSubTitle>
      <FSynBox funcName={funcName} argList={argList}></FSynBox>

      {/* 함수 특징 */}
      <FuncSubTitle>특징</FuncSubTitle>
      <FFeatures featureList={funcFeats} />
    </FuncContainer>
  );
}

function FSynBox({ funcName, argList }) {
  return (
    <FuncSyntaxBox>
      <FuncSyntax>
        <FuncSyntaxSign>=</FuncSyntaxSign>
        <FuncSyntaxFName>{funcName}</FuncSyntaxFName>
        <FuncSyntaxSign>{"("}</FuncSyntaxSign>
        <FSynArgs argList={argList} />
        <FuncSyntaxSign>{")"}</FuncSyntaxSign>
      </FuncSyntax>
    </FuncSyntaxBox>
  );
}

function FSynArgs({ argList }) {
  //order 속성을 기준으로 오름차순 정렬
  const sortedArgList = argList.sort((a, b) => a.order - b.order); //계산 결과가 음수면 앞으로 이동, 양수면 뒤로 이동
  return (
    <FlexDivMargin>
      {sortedArgList.map((arg, index) => {
        let eng = arg.eng;
        let kor = arg.kor;
        let key = "인수" + arg.order;
        let comma = true;
        if (index === sortedArgList.length - 1) {
          comma = false;
        }
        return (
          <FlexDivMargin>
            <FuncSyntaxArgBox key={key}>
              <FuncSyntaxArg>{eng}</FuncSyntaxArg>
              <FuncSyntaxArgKor>{kor}</FuncSyntaxArgKor>
            </FuncSyntaxArgBox>
            {comma ? (
              <FlexDivMargin ml={"2px"} mr={"10px"}>
                ,
              </FlexDivMargin>
            ) : null}
          </FlexDivMargin>
        );
      })}
    </FlexDivMargin>
  );
}

function FFeatures({ featureList }) {
  return (
    <FuncFeatures>
      {featureList.map((feature, index) => {
        return <FuncFeature key={index}>{feature}</FuncFeature>;
      })}
    </FuncFeatures>
  );
}
