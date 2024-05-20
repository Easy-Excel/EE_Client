import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/Logo.svg";

import instar from "../../assets/images/main/instar.png";
import git from "../../assets/images/main/git.png";
import styled from "styled-components";

const Contactcontainer = styled.div`
  background-color: #f9f8f8;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: black;
  height: 93vh;
  text-align: center;

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
  font-size: 40px;
  line-height: 62px;
  text-align: center;
  color: #ffffff;

`;
const Contactmain = styled.div`
  //background-color: #ceebde;
  background-color: pink;
  display: flex;
  flex-direction: column;
  width: 100%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 100%;
  text-align: center;
  padding: 14vh 90px;
  padding-top: 14vh;
  gap: 40px;
  align-items: center;
`;


const ContactUs=styled.div`
    color: #107C41;
    font-family: SUIT;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

const LogoBox=styled.div`
    width: 308px;
    height: 157px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #F9F8F8;
    display:row;
`;

const SubBox=styled.div`
    padding: 18px;
    width: 100%;
    height:50%;
    display: flex;
    margin-left:-50px
`;

const TextWrapperBox=styled.div`
    width: 100%;
    height: 100%;
    display: row;

`;
const TextBox=styled.div`
    //color: var(--Primary-50, #9FCBB3);
    color: ${(props) =>props.color};
    font-family: SUIT;
    //font-size: 14px;//
    font-size: ${(props) => props.fontSize};
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    //margin-left: 8px;
    margin-right: ${(props)=>props.marginLeft};
    margin-left: ${(props)=>props.marginRight};
    margin-top: 2px;
`;

const Line=styled.div`
    width: 283px;
    height: 1px;
    background: #107C41;
    margin-left: 13px;
`;

const Contactlogo = styled.img`
  margin-left: 50px;
  height: 41px;
  width: 39px;
  &:hover {
    cursor: pointer;
  }
`;

// const LogoImg = styled.img`
//   position: absolute;
//   width: 41px;
//   height: 39px;
//   flex-shrink: 0;
//   /* right: 110px;
//   bottom: 140px; */
// `;

export default function ContactM() {
  const handleInstarClick = () => {
    //인스타 링크로 이동
    window.open(
      "https://www.instagram.com/easy._.excel/?igsh=MWZldWxtZjAyMG5mbg%3D%3D&utm_source=qr",
      "_blank"
    ); //아직 url이 없어서 이동을 안하게 하고 싶음
  };
  const handleGitClick = () => {
    // 깃허브 링크로 이동
    window.open("https://github.com/Easy-Excel", "_blank");
  };
  return (
    <Contactcontainer>
      <Contactwrap>
        {/* <Contactheader>Contact Us</Contactheader> */}
        <Contactmain>
          {/* <EasyExcel>EASY EXCEL</EasyExcel> */}
          <ContactUs>Contact Us</ContactUs>
          <LogoBox>
        <SubBox>
          <Contactlogo
            src={instar}
            alt="인스타 로고"
            onClick={handleInstarClick}
          />
          <TextWrapperBox>
          <TextBox fontSize="14px" color="var(--Primary-50, #9FCBB3)" marginLeft="96px">Instagram</TextBox>
          <TextBox fontSize="16px" color="var(--Neutral-1000, #000)" marginLeft="60px">@easy._.excel</TextBox>
          </TextWrapperBox>
        </SubBox>
        <Line/>

          <SubBox>
          <Contactlogo src={git} alt="깃허브 로고" onClick={handleGitClick} />
          <TextBox fontSize="14px" color="var(--Primary-50, #9FCBB3)" marginRight="10px">GitHub</TextBox>
          </SubBox>
          {/* <LogoImg src={logo} alt="로고" /> */}
          </LogoBox>
        </Contactmain>
      </Contactwrap>
    </Contactcontainer>
  );
}
