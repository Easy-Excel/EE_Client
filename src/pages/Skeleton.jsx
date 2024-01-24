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
  height: calc(100vh - 88px);
`;
const ServContainer = styled.div`
  background-color: #f9f8f8;
  height: 80px;
  text-align: center;
`;

const Content = styled.div`
  //width: calc(100% - 200px);
  width: 80%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 700px;
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 0px;
  padding: 0px 58px;
`;
const Footer = styled.footer`
  position: absolute;
  color: #107c41;
  font-weight: 400;
  font-size: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 3px;
`;

export default function Home2() {
  return (
    <MainContainer>
      <ServContainer>서비스 상세 내용 </ServContainer>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer>Copyright © Easy Excel</Footer>
    </MainContainer>
  );
}
