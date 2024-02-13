import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  /* padding: 0px 20px; */
  padding-right: 20px;
  /* background-color: pink; */
  word-break: break-all;
  &:hover {
    cursor: pointer;
    color: #107c41;
    /* background-color: #107c41; */
  }
`;



export default function ComBox({ commonId, commonName }) {
  const navigate = useNavigate();
  const location = useLocation();
  const onClickBox = (event) => {
    
     const changeCommonName = commonName.replace(/\s+/g, "").replace(/\//g, "_");
     console.log(changeCommonName);
      navigate(`/home/etc/frequent-functions/${changeCommonName}`, {
        state: { commonId },
      });
    
  }; //함수를 클릭하면 함수 정보로 navigate

  return <FunctionBox onClick={onClickBox}>{commonName}</FunctionBox>;
}
