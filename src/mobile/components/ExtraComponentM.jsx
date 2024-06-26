import React from "react";
import styled from "styled-components";

const ExtraContainer = styled.div`
  box-sizing: border-box;
  height: ${(props) => props.height}px;
  overflow-y: auto;
  padding-right: 15px;
  padding-top: 17px;
  margin-bottom: 10px;
  
  background-color: blue;

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

  @media screen and (max-width: 450px) {
    height: auto;
    padding-right: 0px;
    min-height: 520px;
  }
`;

const ExtraTitle = styled.div`//피벗테이블

  margin-bottom: 12px;
  margin-left: 20px;
  background-color: green;
  color: #000;
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

`;

const ExtraParagraph = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 287px;
  margin: 0px;
  margin-left: 38px;
  margin-bottom: 10px;
  background-color: gray;
`;

const ExtraSubTitle = styled.div`//사용하는 방법
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 287px;
  letter-spacing: -0.4px;
  margin: 20px 0px 12px 38px;
  background-color: yellow;


`;
const Image = styled.img`
  flex-shrink: 0;
  margin: 11px 0px;
  margin-left: ${({ $marginLeft }) => $marginLeft};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: ${({ $minWidth }) => $minWidth};

`;
const ExtraHow = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 10px 14px 30px;
  background-color: beige;
  letter-spacing: -0.28px;
  width: 84%;
`;

const ExQuestion = styled.div`//작성하시오~
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  word-wrap: break-word;
  width:80%;
  margin-left: 37px;
  margin-bottom: 20px;
  display: flex;
  gap: 5px;
  line-height: 1.4;
  background-color: yellow;
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
  background-color: black;
`;

export const ExAnswerTitle = styled.div`
  color: black;
  font-size: 16px;
  font-family: SUIT;
  font-weight: 500;
  word-wrap: break-word;
  margin: 15px;
  margin-left: 37px;
  @media screen and (max-width: 900px) {
    margin-left: 12px;
  }
  @media screen and (max-width: 700px) {
    margin-left: 10px;
    margin-top: 10px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 0px;
    font-size: 13px;
  }
`;

//추가기능 페이지에서 사용 안하고 함수 예제에서 사용
//추가기능 페이지에서는 디자인 수정으로 인해 새로 컴포넌트 만듦
export const ExAnswer = styled.div`
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
  @media screen and (max-width: 1000px) {
    font-size: 13px;
  }

  @media screen and (max-width: 765px) {
    font-size: 13px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

  @media screen and (max-width: 450px) {
    padding: 15px;
    font-size: 11px;
    margin: 0px;
    margin-bottom: 15px;
  }
`;

//추가기능 페이지에서 사용 안하고 함수 예제에서 사용
export const ExAnswerNumber = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  min-width: 18px;
  font-size: 11px;
  background-color: skyblue;
`;

const ExAnswerLine = styled.div`
  color: black;
  font-size: 14px;
  font-family: SUIT;
  font-weight: 500;
  word-wrap: break-word;
  width:80%;
  margin: 6px;
  margin-left: 37px;
  background-color: red;
  letter-spacing: -0.28px;
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
function HelpImage({ width, minWidth, height, marginLeft, src }) {
  return (
    <Image
      width={width}
      $minWidth={minWidth}
      height={height}
      $marginLeft={marginLeft}
      src={src}
    />
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
  //시나리오 부분
  const lines = text
    .split("\n")
    .map((line, index) => <div key={index}>{line}</div>);
  return <SubQuestion>{lines}</SubQuestion>;
}

function ExampleAnswerTitle() {
  return <ExAnswerTitle> {">"} 풀이</ExAnswerTitle>;
}

//추가 기능 디자인 + 사진 수정됨에 따라 수정(2/12)
function ExampleAnswer({ text }) {
  return <ExAnswerLine>{text}</ExAnswerLine>;
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
  ExampleAnswerTitle,
  ExampleAnswer,
};
