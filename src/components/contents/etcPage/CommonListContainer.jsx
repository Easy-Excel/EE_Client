import React, { useState } from "react";
import styled from "styled-components";
import FunBox from "../functionPage/FunBox";

//3개의 리스트로 쪼개는 함수. 각 리스트 원소 개수는 최소 6개여야 함
function chunkArray(array) {
  const chunkSize = Math.max(Math.ceil(array.length / 3), 5);
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const ContainerBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 40vh;
  padding: 0px 60px;
  overflow-y: auto;

  display: grid;
  //3개의 열로 나누기
  grid-template-columns: repeat(3, 1fr);
  /* row-gap: 24px; */
  column-gap: 83px;
  margin-top: 27px;
`;

const FuncListColum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function CommonListContainer({ funcList }) {
  const dividedArrays = chunkArray(funcList);
  return (
    <ContainerBox>
      {dividedArrays.map((array, arrayIndex) => (
        <FuncListColum key={arrayIndex}>
          {array.map((currentValue, index) => {
            console.log(currentValue);
            return <FunBox key={index} value={currentValue}></FunBox>;
          })}
        </FuncListColum>
      ))}
    </ContainerBox>
  );
}

export default CommonListContainer;
