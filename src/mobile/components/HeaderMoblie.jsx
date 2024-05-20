import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/images/logo/Logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideChatBot } from "../../redux/chatBotReducer";
import FinderMobile from "./FinderMobile";
import SidebarMobile from "./SidebarMobile";
import SideBarContent from "./SideBarContent";
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
  height: 77px;
  color: #3a3a3a;
  box-sizing: border-box;
  z-index: 500; //우선 순위 가장 높게
`;

//Column (Layout)
const Col = styled.div`
  display: flex;
  align-items: center;
`;

//Logo+Title
const Title = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 10px;
  position: fixed;
  top: 14px;
  left: 60px;
`;

//Logo
const Logo = styled(LogoSvg)`
  width: 27.73px;
  height: 32px;
  flex-shrink: 0;
  margin-right: 10px;
`;
const SideWrap = styled.div`
  margin: 10px;
`;

const Container = styled.div`
  /* width: 100%;
  height: 100vh; */
  /* background-color: none; */
`;

function HeaderMobile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let nextPage = "home";

  return (
    <Container className="Here">
      <Head>
        <SideWrap>
          <SidebarMobile />
        </SideWrap>
        <Col>
          <Link to="/home">
            {" "}
            {/*나중에 변경 필요 */}
            <Title>
              <Logo />
              Easy Excel
            </Title>
          </Link>
        </Col>
        <FinderMobile />
      </Head>
      <SideBarContent />
    </Container>
  );
}

export default HeaderMobile;
