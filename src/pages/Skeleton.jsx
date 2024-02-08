import React,{useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Finder from "../components/Finder";
import ShortcutFinder from "../components/ShortcutFinder";
import { Outlet } from "react-router-dom";
import ChatBot from "../components/ChatBot";
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
`;

const ServText = styled.div`
  margin-bottom: 37px;
  & > span {
    margin: 0px;
    margin-left: 5px;
    font-weight: 700;
    //align-items: center;
  }

  /* @media screen and (max-height: 530px) {
    margin-bottom: 0px;
  } */
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
`;

export default function Skeleton() {
  //*********************추가된 부분입니다 ********************** */
  const [showFinder, setShowFinder] = useState(true);
  //단축키 nav가 눌렸을 때는 Finder가 사라지고 shortcutFinder가 보이게 하기 위함
  //디폴트로 finder가 보이는 상태.

  const handleMenuItemClick = (menuName) => {
    if (menuName === "shortcut") {
      setShowFinder(false);
    } else {
      setShowFinder(true);
    }
  };

  return (
    <MainContainer>
      <ServContainer>
        <ServText>
          슬기로운 엑셀 사용을 위한 통합정리 서비스,
          <span>Easy Excel</span>
        </ServText>
        {showFinder ? <Finder /> : <ShortcutFinder />}
        {/* finder가 있던 부분입니다. */}
      </ServContainer>
      {/* <Finder/> */}
      <Navbar handleMenuItemClick={handleMenuItemClick}/>
      {/* Navbar 컴포넌트에서 단축키를 클릭할 시 그 이벤트를 처리하고 skeleton에 전달하기 위해 props로 전달 */}
      <ChatBot/>
      <Content>        
        <Outlet />
      </Content>
    </MainContainer>
  );
}
