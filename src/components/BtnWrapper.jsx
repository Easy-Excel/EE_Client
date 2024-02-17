import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  flex-grow: 1; /* 각 항목이 동일한 너비를 가지도록 설정합니다. */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 가운데 정렬 */
  width: 100%;
  gap: ${(props) => props.gap};
  flex-shrink: 0;
  margin: 0px; //서브 카테고리 위치를 조정
  margin-top: 26px;
  padding: 0px 20px;
  padding-bottom: 17px;
  border-bottom: 2px solid black;
  @media screen and (max-width: 765px) {
    gap: 15px;
    padding: 0px 10px;
    padding-bottom: 17px;
  }

  @media screen and (max-width: 550px) {
    gap: 10px;
    padding: 0px 8px;
    padding-bottom: 17px;
  }
`;

export default function BtnWrapper({ gap, children }) {
  return <ButtonWrapper gap={gap}>{children}</ButtonWrapper>;
}
