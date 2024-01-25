import React from "react";
import styled from "styled-components";

const ExtraContainer = styled.div`
  box-sizing: border-box;
  max-height: ${({ maxHeight }) => maxHeight};
  min-height: ${({ minHeight }) => minHeight};
  overflow-y: auto;
  padding-right: 15px;
`;
const ExtraTitle = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 20px 0px;
`;

const ExtraParagraph = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin: 0px;
  margin-left: 38px;
  margin-bottom: 15px;
`;

const ExtraSubTitle = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.44px;
  margin: 20px 0px 10px 38px;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  //margin-top: 30px;
  margin: 0px 0px 10px 59px;
`;

const Btn = styled.button`
  //버튼 크기 조정
  display: flex;
  width: 14%; //창 조절할 때마다 버튼 크기도 조정
  padding: 10px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  background-color: #107c41;
  color: #fff;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }

  //화면 너비에 따라 글자 크기 조정 임시 적용
  @media (max-width: 1300px) {
    font-size: 1.6923vw;
  }
`;

const ExQuestion = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 20px;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
  margin: 0px;
  margin-top: 15px;
  line-height: 1.4;
`;
const ExAnswerTitle = styled.div`
  color: black;
  font-size: 22px;
  font-family: SUIT;
  font-weight: 500;
  word-wrap: break-word;
  margin: 15px;
  margin-left: 73px;
`;

const ExAnswer = styled.div`
  color: black;
  font-size: 18px;
  font-family: SUIT;
  font-weight: 500;
  word-wrap: break-word;

  border-radius: 20px;
  border: 1px solid #000;

  background: #fcfcfc;

  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 20px 20px;
  margin: 0px 10px 15px 73px;
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

function ExampleBtn({ buttonText, onClick }) {
  return <Btn onClick={onClick}>{buttonText}</Btn>;
}

function Container({ minHeight, maxHeight, children }) {
  return (
    <ExtraContainer minHeight={minHeight} maxHeight={maxHeight}>
      {children}
    </ExtraContainer>
  );
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
      <div
        style={{
          border: "1px solid black",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {index}
      </div>
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
  ExampleBtn,
  Container,
  ExampleQuestion,
  ExampleSubQuestion,
  ExampleAnswer,
};
