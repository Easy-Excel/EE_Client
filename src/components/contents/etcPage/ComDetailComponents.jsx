import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

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
  margin-left: 38px;
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

const FuncFeatures = styled.ul`
  margin-left: 78px;
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
  line-height: 150%;
`; //함수 특징 list

const FuncFunction = styled.div`
  color: #107c41;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 65px;
  margin-bottom: 8px;
  text-decoration: underline;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`;
export default function FDetailContainer({ height, funData }) {
  const navigate = useNavigate();
  const functionClickHandler = () => {
    const funcName = funcFunList[0].name.toUpperCase();
    const content = findPath(funcFunList[0].name);
    const funcId = funcFunList[0].functionId;
    navigate(`/home/function/${content}/${funcName}`, {
      state: { funcId },
    });
  };

  function findPath(funName) {
    const firstLetter = funName[0];
    if (firstLetter <= "H") {
      return "AtoH";
    } else if (firstLetter <= "P") {
      return "ItoP";
    } else {
      return "QtoZ";
    }
  }
  if (!funData) {
    return null;
  }
  const {
    frequentFeatureId: funcId,
    name: funcName,
    explanation: funcExp,
    featureCharacteristicList: funcCau,
    featureFunctionsList: funcFunList,
  } = funData;
  return (
    <FuncContainer height={height}>
      {/* 함수 설명 */}
      <FuncTitle>{funcName}</FuncTitle>
      {funcExp.split("\n").map((line, index) => (
        <FuncDescription key={index}>{line}</FuncDescription>
      ))}

      {/* 함수 특징 */}
      <FuncSubTitle>특징</FuncSubTitle>
      <FFeatures featureList={funcCau} />

      {/*활용 함수 */}
      <FuncSubTitle>활용 함수</FuncSubTitle>
      <FuncFunction onClick={functionClickHandler}>
        {funcFunList[0].name}
      </FuncFunction>
    </FuncContainer>
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
