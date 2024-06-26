import React, { useState } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
const Btn = styled.div`
  //버튼 크기 조정
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 16px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$fontColor};
  border: ${(props) => props.border}; //선택/미선택 테두리 스타일 달리 적용

  overflow: hidden;
  cursor: pointer;

  // 화면 크기에 따른 텍스트 크기 조정

  //특정 페이지에서 버튼위치를 절대 좌표로 쓰기 위한 스타일 추가
  position: ${(props) => (props.absolute !== "false" ? "absolute" : "static")};
  left: ${(props) => (props.absolute !== "false" ? props.left : "auto")};
  bottom: ${(props) => (props.absolute !== "false" ? props.bottom : "auto")};

  @media screen and (max-width: 865px) {
    padding: 5px;
  }
  @media screen and (max-width: 550px) {
    border-radius: 14px;
  }
`;

const ButtonTitle = styled.div`
  //버튼 안의 텍스트
  color: ${(props) => props.$fontColor};
  font-family: SUIT;
  font-size: 16px; //버튼 글자를 조금 줄였습니다.(1/28)
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
  word-break: keep-all;
  @media screen and (max-width: 1380px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 13px;
  }
  @media screen and (max-width: 865px) {
    font-size: 11px;
  }
  @media screen and (max-width: 715px) {
    font-size: 10px;
  }
  @media screen and (max-width: 670px) {
    word-break: normal;
  }
`;

const BtnM = styled.div`
  display: flex;
  min-width: 82px;
  width: fit-content; /* 버튼의 너비가 컨텐츠 크기에 맞게 조절됩니다. */
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 합니다. */
  height: auto;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$fontColor};
  border: ${(props) => props.border}; //선택/미선택 테두리 스타일 달리 적용
`;

const ButtonTitleM = styled.div`
  //버튼 안의 텍스트
  color: ${(props) => props.$fontColor};
  text-align: center;
  word-break: keep-all;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

//버튼 한개 컴포넌트
function Button({
  width,
  height,
  border,
  text,
  onButtonClick,
  backgroundColor,
  fontColor,
  absolute = "false",
  bottom = "auto",
  left = "auto",
}) {
  if (isMobile) {
    return (
      <BtnM
        width={width}
        height={height}
        onClick={onButtonClick}
        $backgroundColor={backgroundColor}
        border={border}
      >
        <ButtonTitleM $fontColor={fontColor}>{text}</ButtonTitleM>
      </BtnM>
    );
  }
  return (
    <Btn
      width={width}
      height={height}
      onClick={onButtonClick}
      $backgroundColor={backgroundColor}
      border={border}
      absolute={absolute}
      bottom={bottom}
      left={left}
    >
      <ButtonTitle $fontColor={fontColor}>{text}</ButtonTitle>
    </Btn>
  );
}

export default Button;
