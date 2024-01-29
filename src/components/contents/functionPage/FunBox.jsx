import React from "react";
import { useNavigate } from "react-router-dom";
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

export default function FunBox({ funcId, funcName, sortingType, category }) {
  const navigate = useNavigate();

  const onClickBox = (event) => {
    navigate(`/home/function/${funcName}`, {
      state: { funcId, sortingType, category },
    });
  };

  return <FunctionBox onClick={onClickBox}>{funcName}</FunctionBox>;
}
