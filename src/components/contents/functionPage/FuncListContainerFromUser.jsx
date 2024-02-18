//검색창에서 엔터를 눌렀을 때 일치하는 항목만을 리스트업하는 컴포넌트
import React, { useState } from "react";
import styled from "styled-components";
import FunBox from "./FunBox";

const ContainerBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 78%;
  padding: 0px 60px;
  padding-top: 27px;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  //2/15 반응형 설정
  @media screen and (max-width: 1160px) {
    padding: 0px 40px;
    padding-top: 27px;
  }
  @media screen and (max-width: 765px) {
    padding: 0px 20px;
    padding-top: 17px;
    max-height: 85%;
    &::-webkit-scrollbar {
      flex-shrink: 0;
      width: 15px;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 0px;
    padding-top: 17px;
    /* max-height: 504.469; */
    max-height: 80%;
    &::-webkit-scrollbar {
      flex-shrink: 0;
      width: 10px;
    }
  }
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

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
  }

  //FunBox 높이가 이상해져서 주석처리했습니다(기존 FunListContainer에도 같은 현상 발생해서 주석처리) - 2/8
  /* @media screen and (max-height: 750px) {
    height: 76%;
  } */
`;

//부모한테서 검색창에 일치하는 funcList를 받아올거임.
function FuncListContainerFromUser({ suggestions }) {
  console.log(suggestions);
  return (
    <ContainerBox>
      <div>
        {suggestions.map((value) => (
          <FunBox
            key={value.functionId}
            funcName={value.name}
            funcId={value.functionId}
          ></FunBox>
        ))}
      </div>
    </ContainerBox>
  );
}
export default FuncListContainerFromUser;
