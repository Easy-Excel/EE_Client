import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/images/logo/Logo.svg";
import styled from "styled-components";

const Visionwrap = styled.div``

const Visioncontainer = styled.div`
    background-color: #e2e0e0ea;
`

const Visionmain = styled.div`
    box-sizing: border-box;
    min-width: 600px;
    max-width: 100%;
    height: 700px;
    background-color: #CEEBDE;
    padding: 20px 10px;
    margin: 150px 0px;
    color: black;
    text-align: center;
    border-radius: 10px;
    min-height: 149.6px;
`;

const Visionheader = styled.div`
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



    /* Our Vision */

    width: 400px;
    height: 62px;

    font-family: 'SUIT';
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 62px;
    text-align: center;

    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;


const Visionlogo = styled.div`
    /* Logo */
    
    position: absolute;
    width: 200px;
    height: 435px;
    left: 10%;
    top: 309px;

`;


const Visionlogo2 = styled.div`
   /* EASY EXCEL */

    position: absolute;
    left: 10%;
    top: 741px;

    font-family: 'Knewave';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 124px;

    color: #107C41;

;`

const Visioncontext = styled.div`
    position: absolute;
    width: 809px;
    height: 450px;
    left: 40%;
    top: 330px;
    margin: 0px 60px;
    font-family: 'SUIT';
    font-style: bold;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    color: #000000;
`;

const Visioncontext1 = styled.div`
    position: absolute;
    width: 650px;
    height: 450px;
    left: 40%;
    top: 400px;
    margin: 0px 60px;
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: justify;
    white-space: pre-wrap;
    color: #000000;
`;


export default function OurVision() {
  return (
    <Visioncontainer>
      <Visionwrap>
        <Visionheader>Our Vision</Visionheader>
        <Visionmain>
          <Visionlogo>
            <img src={logo} alt="로고" />
          </Visionlogo>
          <Visionlogo2>EASY EXCEL</Visionlogo2>
          <Visioncontext>
            슬기로운 엑셀 사용을 위한 통합정리 서비스, Easy Excel 
          </Visioncontext>
          <Visioncontext1>
            엑셀을 어렵게 생각하고 사용에 있어 막막함이 많은 사람들에게 슬기로운 엑셀 사용법을 알려주기 위해 나타난 웹서비스로, 말그대로 엑셀을 쉽고 간편하게 사용할 수 있게 해준다는 의미를 담고 있습니다.
            {"\n"}
            {"\n"}
            추천대상 
            {"\n"}1) 모르는 함수가 나왔을 때 어떻게 사용해야 할지 막막한 사람
            {"\n"}2) 원하는 결과를 위해 어떤함수, 기능을 써야할 지 헷갈리는 사람
            {"\n"}3) 모르는 함수가 나올 때마다 일일이 검색해야 하는 번거로움을 겪는 사람
            {"\n"}4) 단축키를 매번 까먹어 업무 효율성이 낮아져 고민이 많아진 사람
          </Visioncontext1>


        </Visionmain>
      </Visionwrap>
    </Visioncontainer>
  );
}
