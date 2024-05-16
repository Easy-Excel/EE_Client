import React from "react";
import styled from "styled-components";
import { FuncContainer, FuncTitle } from "./FuncDetailComponents";
import {
  ExAnswerTitle,
  ExAnswer,
  ExAnswerNumber,
  ExampleQuestion,
} from "../extraPage/ExtraComponent";

import leftArrow from "../../../assets/images/example/leftArrow.png";
import rightArrow from "../../../assets/images/example/rightArrow.png";

const FlexBox = styled.div`
  display: flex;
  margin-top: 23px;
  margin-left: 38px;
  margin-bottom: 10px;
  gap: 25px;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 765px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 0px;
    width: 100%;
  }
`;

const AnswerFlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  background-color: #107c41;
  width: 39px;
  height: 39px;
  border: none;

  & > img {
    width: 100%;
    height: 100%;
  }

  &:disabled {
    background-color: #cfe5d9;
  }
  @media screen and (max-width: 765px) {
    width: 33px;
    height: 33px;
  }
  @media screen and (max-width: 450px) {
    width: 30px;
    height: 30px;
  }
`;

const ExImg = styled.img`
  flex-shrink: 0;
  margin: 11px 0px;
  margin-left: ${({ $marginLeft }) => $marginLeft};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  @media screen and (max-width: 1100px) {
    width: 100%;
    margin: auto;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    min-width: auto;
  }
`;
const ButtonContainer = styled.div`
  height: 39px;
  position: absolute;
  bottom: 27px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;

  @media screen and (max-width: 450px) {
    position: static;
    margin-bottom: 90px;
    justify-content: space-between;
    height: auto;
  }
`;

const FunExAnswerLine = styled.div`
  display: flex;
  gap: 14px;
  /* align-items: center; */
`;

function FunExImage({ width, minWidth, height, marginLeft, src }) {
  return (
    <ExImg
      width={width}
      $minWidth={minWidth}
      height={height}
      $marginLeft={marginLeft}
      src={src}
    />
  );
}

export function FExampleNextButton({
  leftDisable,
  rightDisable,
  leftClick,
  rightClick,
}) {
  return (
    <ButtonContainer>
      <NextButton onClick={leftClick} disabled={leftDisable}>
        <img src={leftArrow} alt="왼쪽" />
      </NextButton>
      <NextButton onClick={rightClick} disabled={rightDisable}>
        <img src={rightArrow} alt="오른쪽" />
      </NextButton>
    </ButtonContainer>
  );
}

export default function FExampleContainer({
  idx,
  height,
  exData,
  leftDisable,
  rightDisable,
  leftClick,
  rightClick,
  funName,
}) {
  const exampleData = exData[idx];
  if (!exampleData) {
    return null;
  }

  const {
    title,
    question,
    exampleExplanationDTOList,
    exampleTipDTOList,
    exampleImgDTOList,
  } = exampleData;

  return (
    <>
      <FuncContainer height={height}>
        <FuncTitle>
          {funName} 예제 - {title}
        </FuncTitle>
        <ExampleQuestion text={question} />
        <FlexBox>
          <FunExImage
            width={"400px"}
            height={"auto"}
            marginLeft={"0px"}
            src={exampleImgDTOList[0].url}
          />
          <ExampleAnswer
            expList={exampleExplanationDTOList}
            tipList={exampleTipDTOList}
          />
        </FlexBox>
      </FuncContainer>
      <FExampleNextButton
        leftDisable={leftDisable}
        rightDisable={rightDisable}
        leftClick={leftClick}
        rightClick={rightClick}
      />
    </>
  );
}

function ExampleAnswer({ expList, tipList }) {
  const explanations = expList.map((item, index) => (
    <FunExAnswerLine key={item.explanationId}>
      <ExAnswerNumber>{index + 1}</ExAnswerNumber>
      <div>{item.explanation}</div>
    </FunExAnswerLine>
  ));
  const tips = tipList.map((item) => (
    <FunExAnswerLine key={item.tipId}>
      <ExAnswerNumber>+</ExAnswerNumber>
      <div>{item.content}</div>
    </FunExAnswerLine>
  ));
  return (
    <AnswerFlexBox>
      <ExAnswerTitle style={{ marginLeft: "0px" }}>
        {">"} 함수식 풀이
      </ExAnswerTitle>
      <ExAnswer style={{ marginLeft: "0px" }}>{explanations}</ExAnswer>
      <ExAnswer style={{ backgroundColor: "#CEEBDE", marginLeft: "0px" }}>
        {tips}
      </ExAnswer>
    </AnswerFlexBox>
  );
}
