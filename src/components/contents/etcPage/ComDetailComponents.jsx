import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const FuncContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: ${(props) => props.height}px;
  overflow-y: auto;
  padding-top: 17px;
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
      width: 13px;
    }
  }
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 0px;
    padding-top: 17px;
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
    font-size: 17.5px;
  }

  @media screen and (max-width: 450px) {
    word-break: keep-all;
    font-size: 16px;
    width: 100%;
    text-align: center;
  }
`;

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

  @media screen and (max-width: 1000px) {
    margin-left: 26px;
    font-size: 18px;
  }

  @media screen and (max-width: 765px) {
    margin-left: 20px;
    font-size: 17px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 15px;
    font-size: 15px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 0px;
    font-size: 14px;
    width: 100%;
    text-align: center;
  }
`;

export const FuncDescription = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 36px;
  margin-bottom: 8px;
  word-break: keep-all;

  @media screen and (max-width: 1000px) {
    margin-left: 26px;
    font-size: 15px;
  }

  @media screen and (max-width: 765px) {
    margin-left: 20px;
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 15px;
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

const FuncFeatures = styled.ul`
  margin-left: 78px;

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
  line-height: 150%;
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
    font-size: 12px;
    margin-bottom: 8px;
    word-break: break-all;
  }
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

  @media screen and (max-width: 1000px) {
    margin-left: 53px;
    font-size: 15px;
  }

  @media screen and (max-width: 765px) {
    margin-left: 32px;
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 22px;
    font-size: 13px;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    font-size: 12px;
    margin-bottom: 15px;
    margin-left: 0px;
    text-align: center;
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
