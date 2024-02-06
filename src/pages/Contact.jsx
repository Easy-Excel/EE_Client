import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/Logo.svg";
import instar from "../assets/images/main/instar.png";
import git from "../assets/images/main/git.png";
import styled from "styled-components";

const Contactcontainer = styled.div`
    background-color: #CEEBDE;
    justify-content: center;
    margin: 40px 0px 0px 0px;
    color: black;
    text-align: center;
    @media screen and (max-height: 680px) {
    height: 660.4px;};
`
const Contactwrap = styled.div`
`
const Contactheader = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 59px;
    top: 75px;
    background: #107C41;
    border-radius: 16px;
    width: 400px;
    height: 62px;

    font-family: 'SUIT';
    font-weight: 800;
    font-size: 47px;
    line-height: 62px;
    text-align: center;
    color: #FFFFFF;
`
const Contactmain = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%; //백분율로 조장해야 화면 크기에 따라 조절됨
    height: 63vh;
    text-align: center;
    padding: 20px ;
        
`
const Logo = styled.div`
    display: flex;
`
const Logo2 = styled.div`
    margin-left: 70px;
    flex-flow : row wrap;

  `
  

const Contactlogo = styled.div`
    display: flex;
    flex-direction : row;
    margin-left: auto;
    width: 300px;
    height: 300px;
    margin-right: 50px;
    margin-top: 50px;
`

const Contactlogo2 = styled.div`
    /* EASY EXCEL */
    display: flex;
    margin-top: 30px;
    margin-left: 50px;
    font-family: 'Knewave';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 124px;
    
    color: #107C41;
`
const Contactinstar = styled.div`
    display: flex;
    margin-top: 30px;
    margin-left: 50px;
    height: 100px;

`
const Contactgit = styled.div`
    display: flex;
    margin-top: 30px;
    margin-left: 50px;
    width: 100px;
    height: 100px;
`


export default function Contact() {
  return (
    <Contactcontainer>
      <Contactwrap>
        <Contactheader>Contact Us</Contactheader>
        <Contactmain>
            <Contactlogo2>EASY EXCEL</Contactlogo2>
            <Logo>
              <Logo2>
              <Contactinstar>
                <img src={instar} alt="로고" />
              </Contactinstar>
              <Contactgit>
                <img src={git} alt="로고" />
              </Contactgit>
            </Logo2>
            <Contactlogo>
            <img src={logo} alt="로고" />
          </Contactlogo>
          </Logo>
          
          
        </Contactmain>
      </Contactwrap>
    </Contactcontainer>
  );
}
