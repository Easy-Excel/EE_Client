import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FunctionBox = styled.div`
  width: 100%;
  min-height: 40px;
  font-size: 18px;
  color: black;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #107c41;
  }
`;

export default function FunBox({ funcName }) {
  const navigate = useNavigate();

  const onClickBox = (event) => {
    event.preventDefault();
    navigate(`/home/function/${funcName}`);
  };

  return <FunctionBox onClick={onClickBox}>{funcName}</FunctionBox>;
}
