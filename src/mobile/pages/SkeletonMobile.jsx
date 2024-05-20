import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Navbar from "../../components/Navbar";
import Finder from "../../components/Finder";
import ShortcutFinder from "../../components/ShortcutFinder";
import { Outlet } from "react-router-dom";


/** styled components */
const MobilePageWrapper = styled.div`
  background-color: #ceebde;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ceebde;
  height: calc(100vh - 65px);
  position: relative;
`;

const ServContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #f9f8f8;
  height: 15vh;
  padding-bottom: 2vh;
  min-height: 100px;
  word-wrap: break-word;
`;

const ServText = styled.div`
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  word-break: keep-all;
`;

const Content = styled.div`
  width: 90vw; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 100vh;
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0px 21px;
  border-radius: 0 0 10px 10px;
`;

const Copyright = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 5px;
  width: 100%;
  color: var(--Gray-600, #605F5F);
  font-family: SUIT;
  font-size: 9px;
  font-weight: 400;
`
const SkeletonMobile = () => {
  const [showFinder, setShowFinder] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("home");

  useEffect(() => {
    const storedMenu = localStorage.getItem("selectedMenu"); //로컬스토리지에서 정보 가져옴
    if (storedMenu) setSelectedMenu(storedMenu);
    setShowFinder(storedMenu !== "shortcut" && storedMenu !== "home/shortcut");
  }, []);

  const handleMenuItemClick = (menuName) => {
    setSelectedMenu(menuName);
    localStorage.setItem("selectedMenu", menuName);
    setShowFinder(menuName !== "shortcut" && menuName !== "home/shortcut");
  };
  return (
    <MobilePageWrapper>
      <MainContainer className="MainContainer메인메인">
        <ServContainer>
          <ServText>
            슬기로운 엑셀 사용을 위한 통합정리 서비스<br/>
            <span>Easy Excel</span>
          </ServText>
        </ServContainer>

        <Navbar handleMenuItemClick={handleMenuItemClick}>
          {/*showFinder ? <Finder /> : <ShortcutFinder />*/}
        </Navbar>
        {/* 검색창 ServContainer 에서 Navbar 안으로 이동. 검색창 기준으로 위치 선정을 위함*/}
        {/* <Finder/> */}
        {/* Navbar 컴포넌트에서 단축키를 클릭할 시 그 이벤트를 처리하고 skeleton에 전달하기 위해 props로 전달 */}
        {/* <ChatBot/> */}
        <Content>
          <Outlet />
        </Content>
        <Copyright>Copyright © Easy Excel</Copyright>
      </MainContainer>   
    </MobilePageWrapper>
  );
};

export default SkeletonMobile;