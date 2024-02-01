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

export default function FExampleContainer({ type, height, exData }) {
  const {
    title,
    question,
    answer,
    exampleExplanationDTOList,
    exampleTipDTOList,
    exampleImgDTOList,
  } = exData;
  switch (type) {
    case 1:
      return (
        <FuncContainer style={{ paddingTop: "10px" }} height={height}>
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
      );
    case 2:
      return;
    case 3:
      return;
    default:
      return;
  }
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
