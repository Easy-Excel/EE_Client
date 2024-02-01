import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/Logo.svg";
import instar from "../assets/images/main/instar.png";
import git from "../assets/images/main/git.png";
import styled from "styled-components";

const Contactcontainer = styled.div`
`
const Contactwrap = styled.div`
`
const Contactheader = styled.div`
           /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    position: absolute;
    width: 488px;
    height: 82px;
    left: 59px;
    top: 180px;

    background: #107C41;
    border-radius: 16px;



    /* title */

    width: 400px;
    height: 62px;

    font-family: 'SUIT';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 62px;
    text-align: center;

    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`
const Contactmain = styled.div`
    box-sizing: border-box;
    min-width: 600px;
    max-width: 100%;
    height: 900px;
    background-color: #CEEBDE;
    padding: 20px 10px;
    margin: 150px 0px;
    color: black;
    text-align: center;
    border-radius: 10px;
`
const Contactlogo = styled.div`

    position: absolute;
    right: 150px;
    top: 420px;
    bottom: 43.68%;
`

const Contactlogo2 = styled.div`
    /* EASY EXCEL */

    position: absolute;
    left: 95px;
    top: 291px;

    font-family: 'Knewave';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 124px;

    color: #107C41;
`
const Contactgit = styled.div`
    position: absolute;
    left: 150px;
    top: 620px;
    bottom: 33.58%;

    width: 100px;
    height: 100px;
`
const Contactinstar = styled.div`
    position: absolute;
    left: 150px;
    top: 470px;
    bottom: 47.06%;
`

export default function Contact() {
  return (
    <Contactcontainer>
      <Contactwrap>
        <Contactheader>Contact Us</Contactheader>
        <Contactmain>
          <Contactlogo>
            <img src={logo} alt="로고" />
          </Contactlogo>
          <Contactlogo2>EASY EXCEL</Contactlogo2>
          <Contactgit>
            <img src={git} alt="로고" />
          </Contactgit>
          <Contactinstar>
            <img src={instar} alt="로고" />
          </Contactinstar>
        </Contactmain>
      </Contactwrap>
    </Contactcontainer>
  );
}
