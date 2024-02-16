import React, { useState } from "react";
import styled from "styled-components";
import ComBox from "./Combox";

const ContainerBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 78%;
  padding: 0px 35px;
  padding-top: 30px;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  //2/15 반응형 설정
  @media screen and (max-width: 1160px) {
    padding-top: 27px;
  }
  @media screen and (max-width: 765px) {
    padding: 0px 20px;
    padding-top: 17px;
    &::-webkit-scrollbar {
      flex-shrink: 0;
      width: 15px;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 0px 20px;
    padding-top: 17px;
    //-----스크롤바 스타일링------//
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
    justify-content: space-between;
  }

  @media screen and (max-height: 750px) {
    height: 76%;
  }
`;

function ComListContainer({ commonList }) {
  return (
    <ContainerBox>
      <div>
        {commonList.map((value) => {
          return (
            <ComBox
              key={value.frequentFeatureId}
              commonName={value.name}
              commonId={value.frequentFeatureId}
            ></ComBox>
          );
        })}
      </div>
    </ContainerBox>
  );
}
export default ComListContainer;
