import React, { useState } from "react";
import styled from "styled-components";
import FunBox from "./FunBox";

//3개의 리스트로 쪼개는 함수. 각 리스트 원소 개수는 최소 6개여야 함
// function chunkArray(array) {
//   const chunkSize = Math.max(Math.ceil(array.length / 3), 5);
//   const result = [];
//   for (let i = 0; i < array.length; i += chunkSize) {
//     result.push(array.slice(i, i + chunkSize));
//   }
//   return result;
// }

const ContainerBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 78%;
  padding: 0px 60px;
  padding-top: 27px;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-height: 750px) {
    height: 76%;
  }
`;

// const FuncListColum = styled.div`
//   background-color: yellow;
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

function FuncListContainer({ funcList }) {
  // const dividedArrays = chunkArray(funcList);
  return (
    <ContainerBox>
      <div>
        {funcList.map((value, index) => (
          <FunBox key={index} value={value}></FunBox>
        ))}
      </div>
    </ContainerBox>
  );
}
export default FuncListContainer;
