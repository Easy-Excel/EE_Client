import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../assets/images/logo/Logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideChatBot } from "../redux/chatBotReducer";
import FinderMobile from "./FinderMobile";
import SidebarMobile from "./SidebarMobile";
//Header
const Head = styled.header`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  height: 65px;
  color: #3a3a3a;
  box-sizing: border-box;
  z-index: 500; //우선 순위 가장 높게
`;

//Column (Layout)
const Col = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: auto;
    margin-left: 10px;
  }
  &:nth-child(2) {
    margin-right: 200px;
    margin-left: auto;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 765px) {
    &:first-child {
      margin-right: auto;
      margin-left: 15vw;
    }
    &:nth-child(2) {
      margin-right: 15vw;
      margin-left: auto;
    }
  }
  @media screen and (max-width: 630px) {
    &:first-child {
      margin-right: auto;
      margin-left: 10vw;
    }
    &:nth-child(2) {
      margin-right: 10vw;
      margin-left: auto;
    }
  }
`;

//Logo+Title
const Title = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 18px;
  font-weight: 800;
  flex-direction: row;
  @media screen and (max-width: 630px) {
    font-size: 16px;
  }
  @media screen and (max-width: 450px) {
    justify-content: center;
    font-size: 14px;
  }
`;

//Logo
const Logo = styled(LogoSvg)`
  margin-right: 17px;
  width: 32px;
  height: 37px;
  @media screen and (max-width: 630px) {
    width: 28px;
    height: auto;
  }
`;
const SideWrap = styled.div`
  margin:10px; 
`

function HeaderMobile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let nextPage = "home";

  return (
    <Head>
      <SideWrap>
        <SidebarMobile/>
      </SideWrap>
      <Col>
        <Link to="/home">
          <Title>
            <Logo />
            Easy Excel
          </Title>
        </Link>
      </Col>
      <FinderMobile/>
    </Head>
  );
}

export default HeaderMobile;
