import React, { useState } from "react";
import styled from "styled-components";
import ComBox from "./Combox";

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


function ComListContainer({ commonList}) {
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
