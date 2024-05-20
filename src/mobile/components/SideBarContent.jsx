import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as LogoSvg } from "../../assets/images/logo/Logo.svg";
import XIcon from "../../assets/images/closebutton.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideSideBar } from "../../redux/sideBarReducer";

const SideBarContainer = styled.div`
  width: ${({ width }) => width}px;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0px;
  background: #f9f8f8;
  z-index: 1000;
  transform: ${({ xPosition }) => `translatex(${-xPosition}px)`};
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* 반투명한 배경 */
  z-index: 999; /* 사이드바보다 아래에 위치 */
`;

const SideBarHeader = styled.div`
  display: flex;
  width: 195px;
  height: 99px;
  justify-content: space-between;
  flex-shrink: 0;
  background: #ceebde;
  padding: 25px 22px;
`;

const Logo = styled(LogoSvg)`
  width: 38px;
  height: 44px;
  flex-shrink: 0;
`;

const XButton = styled.img`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  fill: #107c41;
`;

//SideBar Link
const Items = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 25px;
`;

const Item = styled.li`
  display: flex;
  width: 156px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  &:hover {
    color: #107c41;
    cursor: pointer;
  }
`;

export default function SideBarContent({ width = 195 }) {
  const dispatch = useDispatch();
  const { showSideBar } = useSelector((state) => state.sideBar);

  // const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const side = useRef();

  useEffect(() => {
    if (showSideBar) {
      setX(0);
    } else {
      setX(width);
    }
  }, [showSideBar, width]);

  // X button 클릭 시 닫힘
  const closeSideBar = () => {
    dispatch(hideSideBar());
    setOverlayVisible(false); // 배경 클릭 시 오버레이 숨기기
  };

  // // 사이드바 외부 클릭시 닫히는 함수
  // const handleCloseSideBar = async (e) => {
  //   let sideArea = side.current;
  //   let sideCildren = side.current.contains(e.target);
  //   if (showSideBar && (!sideArea || !sideCildren)) {
  //     dispatch(hideSideBar());
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleCloseSideBar);
  //   return () => {
  //     window.removeEventListener("click", handleCloseSideBar);
  //   };
  // }, [dispatch, showSideBar]);

  const handleOverlayClick = () => {
    setOverlayVisible(false); // 배경 클릭 시 오버레이 숨기기
    dispatch(hideSideBar()); // 사이드바 닫기
  };
  useEffect(() => {
    if (showSideBar) {
      setOverlayVisible(true); // 사이드바 열릴 때 오버레이 표시
    }
  }, [showSideBar]);

  return (
    <>
      {isOverlayVisible && <Overlay onClick={handleOverlayClick} />}
      <SideBarContainer isOpen={showSideBar} ref={side} width={width}>
        <SideBarHeader>
          <Logo />
          <XButton src={XIcon} onClick={closeSideBar} />
        </SideBarHeader>
        <Items>
          <Item>
            <Link to="/ourVision" onClick={closeSideBar}>
              Our Vision
            </Link>
          </Item>
          <Item>
            <Link to="/ourTeam" onClick={closeSideBar}>
              Our Team
            </Link>
          </Item>
          <Item>
            <Link to="/contact" onClick={closeSideBar}>
              Contact
            </Link>
          </Item>
        </Items>
      </SideBarContainer>
    </>
  );
}
