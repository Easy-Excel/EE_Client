import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/Logo.svg";
import instar from "../assets/images/main/instar.png";
import git from "../assets/images/main/git.png";
import styled from "styled-components";

const Contactcontainer = styled.div`
  background-color: #f9f8f8;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: black;
  height: 93vh;
  text-align: center;
  @media screen and (max-height: 680px) {
    height: 660.4px;
  }
`;
const Contactwrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Contactheader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 32px;
  left: 59px;

  background: #107c41;
  border-radius: 16px;
  width: 400px;
  height: 62px;

  font-family: "SUIT";
  font-weight: 800;
  font-size: 47px;
  line-height: 62px;
  text-align: center;
  color: #ffffff;
`;
const Contactmain = styled.div`
  background-color: #ceebde;
  display: flex;
  flex-direction: column;
  width: 100%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 100%;
  text-align: center;
  padding: 20px 90px;
  padding-top: 14vh;
  gap: 40px;
`;

const EasyExcel = styled.div`
  /* EASY EXCEL */
  display: flex;
  align-items: center;
  font-family: "Knewave";
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  color: #107c41;
  margin-bottom: 20px;
`;

const Contactlogo = styled.img`
  margin-left: 50px;
  height: 100px;
  width: 100px;

  &:hover {
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  position: absolute;
  width: 260px;
  right: 110px;
  bottom: 140px;
`;

export default function Contact() {
  const handleInstarClick = () => {
    //인스타 링크로 이동
    window.open("", "_blank"); //아직 url이 없어서 이동을 안하게 하고 싶음
  };
  const handleGitClick = () => {
    // 깃허브 링크로 이동
    window.open("https://github.com/Easy-Excel", "_blank");
  };
  return (
    <Contactcontainer>
      <Contactwrap>
        <Contactheader>Contact Us</Contactheader>
        <Contactmain>
          <EasyExcel>EASY EXCEL</EasyExcel>
          <Contactlogo
            src={instar}
            alt="인스타 로고"
            onClick={handleInstarClick}
          />
          <Contactlogo src={git} alt="깃허브 로고" onClick={handleGitClick} />

          <LogoImg src={logo} alt="로고" />
        </Contactmain>
      </Contactwrap>
    </Contactcontainer>
  );
}
