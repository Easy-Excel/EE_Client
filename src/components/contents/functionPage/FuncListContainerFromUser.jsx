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
  }

  @media screen and (max-height: 750px) {
    height: 76%;
  }
`;

//부모한테서 검색창에 일치하는 funcList를 받아올거임.
function FuncListContainerFromUser({suggestions}) {
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