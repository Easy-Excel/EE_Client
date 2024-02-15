import React, { useState, useEffect } from "react";
import { UseDispatch } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Finder from "../components/Finder";
import ShortcutFinder from "../components/ShortcutFinder";
import { Outlet } from "react-router-dom";
// import ChatBot from "../components/ChatBot";
//import RefreshChat from "../components/RefreshChat";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ceebde;
  height: 93vh;
  /* min-height: 720px; */
  @media screen and (max-height: 680px) {
    height: 632.4px;
  }

  @media screen and (max-width: 450px) {
    height: auto;
  }
`;

const ServContainer = styled.div`
  display: flex;
  /* padding-top: 50px; //글자 위치 조절시 조정 */
  justify-content: center;
  align-items: center;
  background-color: #f9f8f8;
  height: 22%;
  min-height: 149.6px; //화면 높이가 680px이하인 경우 고정
  font-size: 18px; //1/25
  font-family: SUIT;
  font-weight: 500;
  word-wrap: break-word;
  gap: 6px;
  align-items: center; // Center vertically
  @media screen and (max-width: 950px) {
    font-size: 16px;
  }
  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;

const ServText = styled.div`
  margin-bottom: 40px;
  & > span {
    margin: 0px;
    margin-left: 5px;
    font-weight: 700;
    //align-items: center;
  }
  /* 
  @media screen and (max-height: 530px) {
    margin-bottom: 0px;
  } */
  @media screen and (max-width: 1400px) {
    margin-bottom: 50px;
  }
`;

const Content = styled.div`
  width: 73%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 63vh; //viewport height로 수정
  /* min-height: 400px; */
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 0px;
  padding: 0px 58px; //Content 좌우 여백 전체 적용
  @media screen and (max-height: 680px) {
    height: 428.4px;
  }
  @media screen and (max-width: 450px) {
    height: 70vh;
    margin-bottom: 20px;
  }
`;

export default function Skeleton() {
  //*********************추가된 부분입니다 ********************** */
  const [showFinder, setShowFinder] = useState(true);
  //단축키 nav가 눌렸을 때는 Finder가 사라지고 shortcutFinder가 보이게 하기 위함
  //디폴트로 finder가 보이는 상태.

  // const handleMenuItemClick = (menuName) => {
  //   console.log(menuName);
  //   // shortcut이면 finder가 사라지도록. shortcutfinder가 보이도록 함.
  //   if (menuName === "shortcut") {
  //     setShowFinder(false);
  //   } else {
  //     setShowFinder(true);
  //   }
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
    <MainContainer>
      <ServContainer>
        <ServText>
          슬기로운 엑셀 사용을 위한 통합정리 서비스,
          <span>Easy Excel</span>
        </ServText>

        {/* finder가 있던 부분입니다. */}
      </ServContainer>
      <Navbar handleMenuItemClick={handleMenuItemClick}>
        {/* 검색창 ServContainer 에서 Navbar 안으로 이동. 검색창 기준으로 위치 선정을 위함*/}
        {showFinder ? <Finder /> : <ShortcutFinder />}
      </Navbar>
      {/* <Finder/> */}
      {/* Navbar 컴포넌트에서 단축키를 클릭할 시 그 이벤트를 처리하고 skeleton에 전달하기 위해 props로 전달 */}
      {/* <ChatBot/> */}
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  );
}
