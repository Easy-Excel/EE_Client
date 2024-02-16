import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import polygon from "../assets/images/navBar/polygon.svg";

const StHeader = styled.nav`
  //네비게이션 바 가운데 정렬하려고
  display: flex;
  align-items: center;
  justify-content: center; /* 화면 가운데 정렬을 위한 스타일 */
  margin-top: -38px; /* 원하는 위치로 조정 */
  position: relative;
  /* width: 100%;

  top: -38px; */
`;

const NavMenu = styled.div`
  //width: 1220px;
  height: 71px;
  //width:1350px;
  width: 75%; //화면 비율 조정하느라 네비 바 줄임(1/25)
  flex-shrink: 0; //figma에서 네비게이터 사이즈
  border-radius: 19.248px;
  background: #107c41;
  list-style: none;
  display: flex;
  justify-content: space-between; //헤더에 맞춰 간격 동일하게 조젏
  align-items: center;
  justify-content: space-evenly; /* 항목 간격을 균등하게 배치합니다. */
`;

const MenuItem = styled.div`
  flex-grow: 1; /* 각 항목이 동일한 너비를 가지도록 설정합니다. */
  position: relative;
  cursor: pointer;
  color: #fff;
  font-family: SUIT;
  font-size: 19px; //글씨크기 줄임(1/25)
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  padding: 10px; /* 글자와 테두리 간의 여백 조절 */
  text-align: center;
  flex-direction: column; /* 추가: 수직으로 정렬하기 위해 */
  align-items: center; /* 추가: 수직으로 정렬하기 위해 */
  
  @media (max-width: 600px) {
    font-size: 14px; /*화면이 작을 때 글꼴 크기를 줄임*/
  }
`;

const ArrowImage = styled.img`
  width: 40px;
  height: 33px;
  flex-shrink: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -5px;
  position: absolute;
  display: ${({ $showArrow }) => ($showArrow ? "block" : "none")};
  z-index: 1;
`;

const Wrapper = styled.div`
  flex-grow: 1; /* 각 항목이 동일한 너비를 가지도록 설정합니다. */
  position: relative;

  &:not(:last-child):after {
    //마지막 자식 빼고 모든 자식 선택//::after부분은 선을 오른쪽에 붙이기 위함
    content: "";
    position: absolute;
    top: 50%; /* 선을 가운데 정렬 */
    right: 0;
    transform: translateY(-50%);
    width: 2.221px;
    height: 34.054px;
    background: #fff;
  }
`;

const Navbar = ({ toggle, setToggle, handleMenuItemClick, children }) => {
  //검색창 렌더링 위해 props 추가
  //수정 ! : handleMenuItemClick 을 Navbar에서 props로 받아올 수 있게 추가
  const handleItemClick = (menuName) => {
    handleMenuItemClick(menuName);
  };

  const navigate = useNavigate();
  const location = useLocation(); //useLocation 훅을 사용하여 현재 URL 파악하고 URL에 따라 polygon 이미지 활성화

  const [activeMenu, setActiveMenu] = useState(""); //뭐가 활성화 상태인지 쳌
  // const [arrowState, setArrowState] = useState(false);
  // 코드에서 실 사용되지 않는 부분이라 주석처리했습니다.

  //useEffect Hook 수정1 - 새로고침할 때 화살표 사라지는 오류 수정을 위함
  /* useEffect Hook 수정2 (2/8) - 메뉴를 클릭할 때 이벤트로 ActiveMenu state를 변경하도록 하지 않고,
   * useEffect를 사용하여 localpath.name에 종속성을 두어 localpath.name이 바뀔 때마다 ActiveMenu의 state도 변경해줌
   * -> state 변경에 따라 관련된 컴포넌트 재렌더링됨. 따라서 <ArrowImage> 알맞게 렌더링됨. */
  useEffect(() => {
    setActiveMenu(location.pathname);
    // console.log(location.pathname);
  }, [location.pathname]);

  const [isFindPage, setIsFindPage] = useState(false);

  useEffect(()=>{
    setIsFindPage(location.pathname==="/home/find");
  },[location.pathname]);

  console.log("엔터 눌렀을 때 home/find로 가서 플래그 떴는지 확인");
  console.log(isFindPage);

  return (
    <StHeader>
      <NavMenu>
        <Wrapper>
          <MenuItem
            onClick={() => {
              let content = "AtoH";
              // setArrowState(true); //큰 의미가 없는 부분이라 주석처리 (아래 모두)
              // setActiveMenu("/home/function"); //useEffect에서 state 변경하는 것으로 수정(아래 모두)
              navigate(`/home/function/${content}`, {
                state: { content },
              });
              handleItemClick("function");
            }}
          >
            엑셀 함수
          </MenuItem>
          <ArrowImage
            $showArrow={isFindPage||activeMenu.startsWith("/home/function")}
            src={polygon}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              let content = "DateTime";
              // setArrowState(true);
              // setActiveMenu("/home/category");
              navigate(`/home/category/${content}`, { state: { content } });
              handleItemClick("category");
            }}
          >
            범주
          </MenuItem>
          <ArrowImage
            $showArrow={activeMenu.startsWith("/home/category")}
            src={polygon}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/home/shortcut");
              // setArrowState(true);
              // setActiveMenu("/home/shortcut");
              handleItemClick("shortcut"); // 수정! : shortcut 이면 usestate를 통해 값이 변경될 수 있도록 함.
            }}
          >
            단축키
          </MenuItem>
          <ArrowImage
            $showArrow={activeMenu === "/home/shortcut"}
            src={polygon}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/home/extra");
              // setArrowState(true);
              // setActiveMenu("/home/extra");
              handleItemClick("extra");
            }}
          >
            추가 기능
          </MenuItem>
          <ArrowImage
            $showArrow={activeMenu === "/home/extra"}
            src={polygon}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/home/etc");
              // setArrowState(true);
              // setActiveMenu("/home/etc");
              handleItemClick("etc");
            }}
          >
            기타
          </MenuItem>
          <ArrowImage
            $showArrow={activeMenu.startsWith("/home/etc")}
            src={polygon}
            alt="화살표"
          />
        </Wrapper>
      </NavMenu>
      {/* 검색창 렌더링 위해 추가 */}
      {children}
    </StHeader>
  );
};
export default Navbar;
