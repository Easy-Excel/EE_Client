import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/images/logo/Logo.svg";
import styled from "styled-components";

const Visioncontainer = styled.div`
  background-color: #f9f8f8;
  padding-top: 10px;
  color: black;
  height: 93vh;
  text-align: center;
  @media screen and (max-height: 680px) {
    height: 660.4px;
  }

  @media screen and (max-width: 1120px) {
    height: auto;
  }
`;

const Visionwrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Visionmain = styled.div`
  background-color: #ceebde;
  align-items: center;
  justify-content: space-between;
  width: 100%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 100%;
  text-align: center;
  padding: 20px 60px;
  /* padding-top: 10.5vh; */
  display: flex;
  @media screen and (max-width: 1120px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 0px;
    padding-top: 90px;
  }
`;

const Visionheader = styled.div`
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
  @media screen and (max-width: 605px) {
    left: 0px;
    font-size: 35px;
    margin: 0px auto;
    width: 70%;
    min-width: 300px;
  }
`;

const VisionLogoFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  min-width: 350px;
  gap: 27px;
`;

const VisionContentFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 411px;
  background-color: white;
  border-radius: 20px;
  padding: 60px;
  margin: 0px 40px;

  @media screen and (max-width: 1300px) {
    padding: 40px 60px;
  }
  @media screen and (max-width: 1120px) {
    padding: 60px;

    max-width: 710px;
    width: auto;
    margin: 0px 10%;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 630px) {
    padding: 40px 40px;
    min-width: auto;
    max-width: 90%;
    margin: 0px auto;
    margin-bottom: 40px;
  }
`;

const Visionlogo = styled.img`
  /* Logo */
  display: flex;
  /* width: 377px;
  height: 350px; */
  width: 39vh;
  width: 75%;
  object-fit: contain;

  @media screen and (max-height: 680px) {
  }
  @media screen and (max-width: 1120px) {
    width: 60%;
  }
  @media screen and (max-width: 475px) {
    width: 50%;
  }
`;

const Visionlogo2 = styled.div`
  /* EASY EXCEL */
  display: flex;
  justify-content: center;
  width: 80%;
  /* height: 105px; */

  font-family: "Knewave";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  /* line-height: 124px; */
  /* margin-bottom: auto; */
  color: #107c41;
  @media screen and (max-width: 1120px) {
    font-size: 50px;
  }
`;

const Visioncontext = styled.div`
  margin-bottom: 40px;
  font-family: "SUIT";
  font-style: bold;
  font-weight: bold;
  font-size: 21px;
  line-height: 30px;
  text-align: left;
  color: #000000;
  word-break: keep-all;
  @media screen and (max-width: 1120px) {
    margin: 0px;
    margin-bottom: 50px;
    text-align: center;
  }
  @media screen and (max-width: 1300px) {
    margin-bottom: 20px;
    font-size: 19px;
  }

  @media screen and (max-width: 630px) {
    font-size: 17px;
  }
`;

const Visioncontext1 = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  white-space: pre-wrap;
  word-break: keep-all;
  color: #000000;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0px;
  }

  @media screen and (max-width: 1120px) {
    margin: 0px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1300px) {
    margin-bottom: 20px;
    font-size: 16px;
  }
  @media screen and (max-width: 630px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

export default function OurVision() {
  return (
    <Visioncontainer className="visioncontainer">
      <Visionwrap className="visionWrap">
        <Visionheader>Our Vision</Visionheader>
        <Visionmain>
          <VisionLogoFlexBox className="logoBox">
            <Visionlogo src={logo} alt="로고" />
            <Visionlogo2>EASY EXCEL</Visionlogo2>
          </VisionLogoFlexBox>
          <VisionContentFlexBox>
            <Visioncontext>
              슬기로운 엑셀 사용을 위한 통합정리 서비스, Easy Excel
            </Visioncontext>
            <Visioncontext1>
              엑셀을 어렵게 생각하고 사용에 있어 막막함이 많은 사람들에게
              슬기로운 엑셀 사용법을 알려주기 위해 나타난 웹서비스로, 말그대로
              엑셀을 쉽고 간편하게 사용할 수 있게 해준다는 의미를 담고 있습니다.
            </Visioncontext1>
            <Visioncontext1>
              추천대상
              {"\n"}1) 모르는 함수가 나왔을 때 어떻게 사용해야 할지 막막한 사람
              {"\n"}2) 원하는 결과를 위해 어떤함수, 기능을 써야할 지 헷갈리는
              사람
              {"\n"}3) 모르는 함수가 나올 때마다 일일이 검색해야 하는 번거로움을
              겪는 사람
              {"\n"}4) 단축키를 매번 까먹어 업무 효율성이 낮아져 고민이 많아진
              사람
            </Visioncontext1>
          </VisionContentFlexBox>
        </Visionmain>
      </Visionwrap>
    </Visioncontainer>
  );
}
