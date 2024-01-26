import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ceebde;
  /* height: calc(100vh - 88px); */ //Content 길이에 맞게 늘어나도록 주석처리
`;
const ServContainer = styled.div`
  display: flex;
  padding-top: 53px; //글자 위치 조절시 조정
  justify-content: center;
  background-color: #f9f8f8;
  height: 170px;
  text-align: center;
  font-size: 18px; //1/25
  font-family: SUIT;
  font-weight: 500;
  word-wrap: break-word;
  gap: 6px;

  > div {
    font-family: SUIT;
    font-weight: 700;
    word-wrap: break-word;
  }
`;

const Content = styled.div`
  width: 70%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 63vh; //1/26 : viewport height로 수정
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 0px;
  margin-bottom: 59px; //bottom 여백 추가
  padding: 0px 58px; //Content 좌우 여백 전체 적용
`;

export default function Skeleton() {
  return (
    <MainContainer>
      <ServContainer>
        슬기로운 엑셀 사용을 위한 통합정리 서비스,
        <span>Easy Excel</span>
      </ServContainer>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  );
}
