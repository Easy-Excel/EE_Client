import React from "react";
import styled from "styled-components";

const ExtraContainer = styled.div`
  box-sizing: border-box;
  height: ${({ height }) => height}; //vh단위
  overflow-y: auto;
  padding-right: 15px;
  margin-top: 17px;
  margin-bottom: 10px;
`;
const ExtraTitle = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 23px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 12px;
`;

const ExtraParagraph = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin: 0px;
  margin-left: 38px;
  margin-bottom: 10px;
`;

const ExtraSubTitle = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 20px 0px 12px 38px;
`;
const Image = styled.img`
  flex-shrink: 0;
  margin: 11px 0px;
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
const ExtraHow = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  //margin-top: 30px;
  margin: 0px 0px 10px 59px;
`;

const ExQuestion = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
  margin: 0px;
  margin-left: 37px;
  margin-bottom: 15px;
  display: flex;
  gap: 5px;
  line-height: 1.4;
`;

const SubQuestion = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
  margin: 0px;
  margin-top: 15px;
  line-height: 1.4;
`;
const ExAnswerTitle = styled.div`
  color: black;
  font-size: 16px;
  font-family: SUIT;
  font-weight: 500;
  word-wrap: break-word;
  margin: 15px;
  margin-left: 73px;
`;

const ExAnswer = styled.div`
  color: black;
  font-size: 14px;
  font-family: SUIT;
  font-weight: 500;
  word-wrap: break-word;

  border-radius: 20px;
  border: 1px solid #000;

  background: #fcfcfc;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 20px;
  margin: 0px 10px 15px 73px;
`;

const ExAnswerNumber = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;

function Title({ text }) {
  return <ExtraTitle>{text}</ExtraTitle>;
}

function SubTitle({ text }) {
  return <ExtraSubTitle>{text}</ExtraSubTitle>;
}
function Paragraph({ text }) {
  return <ExtraParagraph>{text}</ExtraParagraph>;
}
function How({ text }) {
  return <ExtraHow>{text}</ExtraHow>;
}
function HelpImage({ width, height, marginLeft, src }) {
  return (
    <Image width={width} height={height} marginLeft={marginLeft} src={src} />
  );
}

function Container({ height, children }) {
  return <ExtraContainer height={height}>{children}</ExtraContainer>;
}

function ExampleQuestion({ text, children = null }) {
  const lines = text
    .split("\n")
    .map((line, index) => <div key={index}>{line}</div>);
  return (
    <ExQuestion>
      <div>Q.</div>
      <div>
        {lines}
        {children}
      </div>
    </ExQuestion>
  );
}
function ExampleSubQuestion({ text }) {
  const lines = text
    .split("\n")
    .map((line, index) => <div key={index}>{line}</div>);
  return <SubQuestion>{lines}</SubQuestion>;
}

function ExampleAnswer({ text }) {
  const lines = text.split("\n").map((line, index) => (
    <div key={index} style={{ display: "flex", gap: "14px" }}>
      <ExAnswerNumber>{index + 1}</ExAnswerNumber>
      {line}
    </div>
  ));
  return (
    <div>
      <ExAnswerTitle> {">"} 함수식 풀이</ExAnswerTitle>
      <ExAnswer>{lines}</ExAnswer>
    </div>
  );
}

export {
  Title,
  SubTitle,
  Paragraph,
  How,
  HelpImage,
  Container,
  ExampleQuestion,
  ExampleSubQuestion,
  ExampleAnswer,
};
