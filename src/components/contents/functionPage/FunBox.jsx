import React from "react";
import styled from "styled-components";

const FunctionBox = styled.div`
  width: 33%;
  min-width: 180px;
  /* margin: 0px 12px; */
  min-height: 40px;
  font-size: 100%;
  /* font-size: 18px; */
  color: black;
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
    color: #107c41;
    /* background-color: #107c41; */
  }
`;

export default function FunBox({ value }) {
  return <FunctionBox>{value}</FunctionBox>;
}
