import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const FunctionBox = styled.div`
  width: 30%;
  min-width: 180px;
  /* margin: 0px 12px; */
  min-height: 40px;
  font-size: 100%;
  /* font-size: 18px; */
  color: black;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  /* padding: 0px 20px; */
  margin-left: 3%;
  padding-left: 40px;
  word-break: break-all;
  &:hover {
    cursor: pointer;
    color: #107c41;
    text-decoration: underline; /* 텍스트 밑줄 추가 */
    /* background-color: #107c41; */
  }
  /* background-color: pink; */

  @media screen and (max-width: 1160px) {
    width: 47%;
    padding-left: 50px;
    min-width: 150px;
  }
  @media screen and (max-width: 765px) {
    width: 100%;
    justify-content: center;
    padding-left: 0px;
    min-width: auto;
    font-size: 90%;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 450px) {
    font-size: 70%;
    margin-bottom: 17px;
  }
`;

function findPath(funName) {
  const firstLetter = funName[0];
  if (firstLetter <= "H") {
    return "AtoH";
  } else if (firstLetter <= "P") {
    return "ItoP";
  } else {
    return "QtoZ";
  }
}

export default function FunBox({ funcId, funcName, content }) {
  const navigate = useNavigate();
  const location = useLocation();
  const onClickBox = (event) => {
    if (location.pathname.startsWith("/home/function")) {
      navigate(`/home/function/${content}/${funcName}`, {
        state: { funcId },
      });
    } else if (location.pathname.startsWith("/home/category")) {
      navigate(`/home/category/${content}/${funcName}`, {
        state: { funcId },
      });
    } else if (location.pathname.startsWith("/home/find")) {
      content = findPath(funcName);
      navigate(`/home/function/${content}/${funcName}`, {
        state: { funcId },
      });
    }
  }; //함수를 클릭하면 함수 정보로 navigate

  return <FunctionBox onClick={onClickBox}>{funcName}</FunctionBox>;
}
