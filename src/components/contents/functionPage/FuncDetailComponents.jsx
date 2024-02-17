import React from "react";
import styled from "styled-components";

export const FuncContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: ${(props) => props.height};
  overflow-y: auto;
  margin-top: 32px;
  margin-bottom: 10px;
  padding-right: 15px;
  position: relative;

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

  @media screen and (max-width: 765px) {
    &::-webkit-scrollbar {
      flex-shrink: 0;
      width: 10px;
    }
  }
  @media screen and (max-width: 450px) {
    height: auto;
    padding-right: 0px;
    /* padding-bottom: 100px; */

    &::-webkit-scrollbar {
      flex-shrink: 0;
      width: 10px;
    }
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
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }

  @media screen and (max-width: 765px) {
    font-size: 19px;
  }
  @media screen and (max-width: 600px) {
    font-size: 17px;
  }

  @media screen and (max-width: 450px) {
    word-break: keep-all;
    font-size: 16px;
    width: 100%;
    text-align: center;
  }
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
  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }

  @media screen and (max-width: 765px) {
    font-size: 17px;
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 0px;
    font-size: 14px;
    width: 100%;
    text-align: center;
  }
`; //함수 구문, 함수 특징(하위 제목 부분)

export const FuncDescription = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 3%; /* 왼쪽 패딩을 화면의 너비에 따라 상대적으로 조절 */
  margin-bottom: 8px;
  word-break: keep-all;
  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }

  @media screen and (max-width: 765px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 0px;
    padding: 0px 10px;
    font-size: 12px;
    margin-bottom: 5px;
    width: 100%;
    word-break: break-all;
  }
`;

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
  overflow-wrap: break-word; /* 텍스트가 박스를 넘어갈 때 단어를 자르고 줄 바꿈 */
  max-height: max-content;

  @media screen and (max-width: 600px) {
    max-height: max-content;
    border: 1.5px solid #000;
  }
`; //함수 구문 box

const FuncSyntax = styled.div`
  padding: 18px 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-height: max-content;

  @media screen and (max-width: 450px) {
    padding: 15px 20px;
    display: flex;
    max-height: max-content;
  }
`; //함수 구문(=함수이름(인수,...)

const FuncSyntaxFName = styled.div`
  color: #107c41;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 765px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`;
const FuncSyntaxSign = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 765px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`; //=, (,) 등
const FuncSyntaxArgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 765px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`; //argument 영어, 한국어 한 묶음

const FuncSyntaxArg = styled.div`
  border-bottom: 2.5px solid black;
  text-align: center;
  padding-bottom: 3px;
  @media screen and (max-width: 600px) {
    font-size: 13px;
    border-bottom: 1.5px solid black;
  }
`; //argument

const FuncSyntaxArgKor = styled.div`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 765px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`; //argument (한국어)

const FlexDivMargin = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  margin-bottom: 3px;
  @media screen and (max-width: 450px) {
    padding-left: 5px;
    margin-bottom: 3px;
    margin-top: 3px;
    flex-wrap: wrap;
  }
`;

const FuncFeatures = styled.ul`
  margin-left: 5%; /* 초기 마진을 상대적인 단위로 설정 */
  /* margin-bottom: 10px; */
  @media screen and (max-width: 1000px) {
    margin-left: 66px;
  }

  @media screen and (max-width: 765px) {
    margin-left: 45px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 35px;
  }

  @media screen and (max-width: 450px) {
    margin-left: 0px;
    padding-left: 10px;
    padding-right: 10px;
  }
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
  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }

  @media screen and (max-width: 765px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }

  @media screen and (max-width: 450px) {
    margin-left: 0px;
    font-size: 12px;
    margin-bottom: 8px;
    word-break: break-all;
  }
`; //함수 특징 list

export default function FDetailContainer({ height, funData }) {
  if (!funData) {
    return null;
  }
  const {
    id: funcId,
    name: funcName,
    explanation: funcExp,
    caution: funcCau,
    engAndKorList: funcArgList,
  } = funData;
  return (
    <FuncContainer height={height}>
      {/* 함수 설명 */}
      <FuncTitle>{funcName}</FuncTitle>
      {funcExp.split("\n").map((line, index) => (
        <FuncDescription key={index}>{line}</FuncDescription>
      ))}

      {/* 함수 구문 */}
      <FuncSubTitle>함수 구문</FuncSubTitle>
      <FSynBox funcName={funcName} argList={funcArgList}></FSynBox>

      {/* 함수 특징 */}
      <FuncSubTitle>특징</FuncSubTitle>
      <FFeatures featureList={funcCau} />
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
