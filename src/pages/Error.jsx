import logo from "../assets/images/logo/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.div`
  background-color: #ceebde;
  align-items: center;
  //justify-content: center;
  width: 100%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 100%;
  text-align: center;
  flex-direction: column;
  display: flex;
`;
const ErrorContainer=styled.div`
    margin-top: 50px;
    font-size: 88px;
    font-weight: 750;
    margin-bottom: 30px;
    color: #313131;
    
    @media screen and (max-width: 1120px) {
    font-size:80px;
  }

  @media screen and (max-width: 1025px) {
    font-size: 76px;
  }

    @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`;

const LogoContainer=styled.div`
    width: 30vh;
    display: flex;
    margin-top: 80px;
`;

const Logo=styled.img`

  //width: 25vh;
  width: 100%;
  object-fit: contain;
  @media screen and (max-height: 680px) {
    width:70%
  }
    @media screen and (max-width: 800px) {
    width: 56%;
  }
  @media screen and (max-width: 1120px) {
    width: 70%;
  }
`
const ForLink=styled(Link)`
    color:blue;
`
const StylePgh=styled.p`
    margin-top: 10px; //상단 여백 조정
    margin-bottom: 10px; //하단 여백 조정
    font-size:20px;

    @media screen and (max-width: 1120px) {
    font-size:18px;
  }

  @media screen and (max-width: 1025px) {
    font-size: 15px;
  }

    @media screen and (max-width: 800px) {
    font-size: 11px;
  }
`
export default function Error({errorCode}){
    return(
        <Background>
        <ErrorContainer>Error({errorCode})</ErrorContainer>
        <StylePgh>죄송합니다. 찾으시는 페이지가 존재하지 않습니다.</StylePgh>
        <ForLink to="/home">
        <StylePgh>홈으로 이동하려면 이곳을 클릭해주세요</StylePgh>
        </ForLink>
        <LogoContainer>
        <Logo src={logo} alt="로고사진"/>
        </LogoContainer>

        </Background>
    );
}