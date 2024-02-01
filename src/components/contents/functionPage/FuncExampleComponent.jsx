import React from "react";
import styled from "styled-components";
import { FuncContainer, FuncTitle } from "./FuncDetailComponents";
import {
  HelpImage,
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
`;

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
        <FuncTitle>{title}</FuncTitle>
        <ExampleQuestion text={question} />
        <FlexBox>
          <HelpImage
            width={"435px"}
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
  const explanations = expList.map((item) => (
    <div key={item.explanationId} style={{ display: "flex", gap: "14px" }}>
      <ExAnswerNumber>{item.explanationId}</ExAnswerNumber>
      {item.explanation}
    </div>
  ));
  const tips = tipList.map((item) => (
    <div key={item.tipId} style={{ display: "flex", gap: "14px" }}>
      <ExAnswerNumber>+</ExAnswerNumber>
      {item.content}
    </div>
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
