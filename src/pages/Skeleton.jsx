import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ButtonA from "../components/ButtonA";
import { Outlet } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ceebde;
  /* height: calc(100vh - 88px); */ //Content 길이에 맞게 늘어나도록 주석처리
`;
const ServContainer = styled.div`
  background-color: #f9f8f8;
  height: 80px;
  text-align: center;
`;

const Content = styled.div`
  width: 80%; //백분율로 조장해야 화면 크기에 따라 조절됨
  min-height: 700px;
  max-height: 700px;
  overflow-y: auto; // 세로 스크롤바를 표시하고, 내용이 넘칠 때 스크롤 가능하게 함
  overflow-x: hidden;
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 0px;
  margin-bottom: 60px; //bottom 여백 추가
  padding: 0px 58px; //Content 좌우 여백 전체 적용
`;

export default function Skeleton() {
  return (
    <MainContainer>
      <ServContainer>서비스 상세 내용 </ServContainer>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  );
}
