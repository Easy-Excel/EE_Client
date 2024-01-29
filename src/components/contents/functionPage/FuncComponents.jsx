import React from "react";
import styled from "styled-components";

const FuncContainer = styled.div`
  box-sizing: border-box;
  height: ${({ height }) => height}; //vh단위
  /* overflow-y: auto; */
  padding-right: 15px;
  margin-top: 17px;
  margin-bottom: 10px;
`;

const FuncTitle = styled.h1`
  color: #000;
  font-family: SUIT;
  font-size: 22 px;
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
  margin-top: 17px;
  margin-bottom: 10px;
`; //함수 구문, 함수 특징(하위 제목 부분)

const FuncDescription = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 36px;
  margin-bottom: 6px;
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
`; //함수 구문 box
const FuncSyntax = styled.div``; //함수 구문(=함수이름(인수,...)
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
  padding-bottom: 2px;
`; //argument
const FuncSyntaxArgKor = styled.div`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`; //argument (한국어)

const FuncFeatures = styled.ul`
  margin-left: 38px;
  /* margin-bottom: 10px; */
`;
//함수 특징 unordered lists 묶음
const FuncFeature = styled.li`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 6px;
`; //함수 특징 list

export default function FContainer({ funcName, funcDes, argList, funcFeats }) {
  return (
    <FuncContainer>
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
    <div>
      {sortedArgList.map((arg) => {
        let eng = arg.eng;
        let kor = arg.kor;
        let key = "인수" + arg.order;
        return (
          <FuncSyntaxArgBox key={key}>
            <FuncSyntaxArg>eng</FuncSyntaxArg>
            <FuncSyntaxArgKor>kor</FuncSyntaxArgKor>
          </FuncSyntaxArgBox>
        );
      })}
    </div>
  );
}

function FFeatures({ featureList }) {
  return (
    <FuncFeatures>
      {featureList.map((feature, index) => {
        <FuncFeature key={index}>{feature}</FuncFeature>;
      })}
    </FuncFeatures>
  );
}
