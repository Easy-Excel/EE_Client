import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";
//import Navbar from "../components/Navbar";
import Navbar from "../components/Navbar"
//import Navbar from "../components/Navbar";


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d1e5cf;
  height: 550px;
`;
const NavContainer = styled.div`
  background-color: #107c41;
  width: calc(100% - 220px);
  height: 79px;
  margin: 20px 100px;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

const ServContainer = styled.div`
  background-color: #f9f8f8;
  height: 80px;
  text-align: center;
`;

const Content = styled.div`
  //width: calc(100% - 200px);
  width: 80%;//백분율로 조장해야 화면 크기에 따라 조절됨
  height: 400px;
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top:0px;
`;
const LogoImg = styled.img`
  width: 250px;
  height: 300px;
  margin: auto;
  background-size: cover;
  position: absolute;
  top: 50px;
`;

export default function Home() {
  return (
    <MainContainer>
      <ServContainer>서비스 상세 내용 </ServContainer>
      <Navbar />
      <Content>
        <LogoImg src={Logo} />
      </Content>
    </MainContainer>
  );
}
