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
  margin-top: -45px; /* 원하는 위치로 조정 */
`;

const NavMenu = styled.div`
  //width: 1220px;
  height: 71px;
  //width:1350px;
  width: 84%;
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
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  padding: 10px; /* 글자와 테두리 간의 여백 조절 */
  text-align: center;
  flex-direction: column; /* 추가: 수직으로 정렬하기 위해 */
  align-items: center; /* 추가: 수직으로 정렬하기 위해 */
`;

const ArrowImage = styled.img`
  width: 55px;
  height: 45px;
  flex-shrink: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -11px;
  position: absolute;
  display: ${({ showArrow }) => (showArrow ? "block" : "none")};
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

//URL에 따라 활성화 여부 결정
const isArrowActive = (path) => {
  if (path === "/home/function") return true;
  if (path === "/home/category") return true;
  if (path === "/home/shortcut") return true;
  if (path === "/home/extra") return true;
  if (path === "/home/etc") return true;
  return false;
};

const Navbar = ({ toggle, setToggle }) => {
  const navigate = useNavigate();
  const location = useLocation(); //useLocation 훅을 사용하여 현재 URL 파악하고 URL에 따라 polygon 이미지 활성화
  // const onClickToggleHandler = () => {
  //   setToggle(!toggle);
  // };
  const [activeMenu, setActiveMenu] = useState(null); //뭐가 활성화 상태인지 쳌
  // const [arrowState, setArrowState] = useState(false);
  // 코드에서 실 사용되지 않는 부분이라 주석처리했습니다.

  //useEffect Hook 수정 - 새로고침할 때 화살표 사라지는 오류 수정을 위함
  useEffect(() => {
    console.log("useEffect 호출");
    setActiveMenu(location.pathname);
  }, []);
  console.log(activeMenu);

  return (
    <StHeader>
      <NavMenu>
        <Wrapper>
          <MenuItem
            onClick={() => {
              // setArrowState(true); //큰 의미가 없는 부분이라 주석처리 (아래 모두)
              setActiveMenu("/home/function");
              navigate("/home/function");
              //클릭을 하자마자 화살표 모양이 나타나야 함//
            }}
          >
            엑셀 함수
          </MenuItem>
          <ArrowImage
            showArrow={activeMenu === "/home/function"}
            src={polygon}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              // setArrowState(true);
              setActiveMenu("/home/category");
              navigate("/home/category");
            }}
            // isActive={activeMenu==="./home/category"}
          >
            범주
          </MenuItem>
          {/* {activeMenu === "/home/category" && ( */}
          <ArrowImage
            showArrow={activeMenu === "/home/category"}
            src={polygon}
            alt="화살표"
          />
          {/* )} */}
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/home/shortcut");
              // setArrowState(true);
              setActiveMenu("/home/shortcut");
            }}
          >
            단축키
          </MenuItem>
          <ArrowImage
            showArrow={activeMenu === "/home/shortcut"}
            src={polygon}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/home/extra");
              // setArrowState(true);
              setActiveMenu("/home/extra");
            }}
          >
            추가 기능
          </MenuItem>
          <ArrowImage
            showArrow={activeMenu === "/home/extra"}
            src={polygon}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/home/etc");
              // setArrowState(true);
              setActiveMenu("/home/etc");
            }}
          >
            기타
          </MenuItem>
          <ArrowImage
            showArrow={activeMenu === "/home/etc"}
            src={polygon}
            alt="화살표"
          />
        </Wrapper>
      </NavMenu>
    </StHeader>
  );
};
export default Navbar;
