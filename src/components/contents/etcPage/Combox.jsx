import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const FunctionBox = styled.div`
  width: 30%;
  min-width: 180px;
  /* margin: 0px 12px; */
  min-height: 40px;
  font-size: 16px;
  /* font-size: 18px; */
  /* align-items: center; */
  color: black;
  display: flex;
  margin-bottom: 20px;
  /* padding: 0px 20px; */
  word-break: keep-all;
  line-height: 130%;
  &:hover {
    cursor: pointer;
    color: #107c41;
    /* background-color: #107c41; */
  }
  @media screen and (max-width: 1160px) {
    width: 45%;
    min-width: 150px;
    margin-bottom: 17px;
  }
  @media screen and (max-width: 765px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: auto;
    font-size: 90%;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin-bottom: 15px;
  }
  /* background-color: pink; */
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
