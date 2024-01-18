import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StHeader = styled.nav`
  //네비게이션 바 가운데 정렬하려고
  display: flex;
  align-items: center;
  justify-content: center; /* 화면 가운데 정렬을 위한 스타일 */
  margin-top: 235px; /* 원하는 위치로 조정 */
`;

const NavMenu = styled.div`
  width: 1220px;
  height: 79.211px;
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
  width: 110px;
  height: 59px;
  flex-shrink: 0;
  left: 50%;

  transform: translateX(-50%);

  margin-top: -16px;
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

const Navbar = ({ toggle, setToggle }) => {
  const navigate = useNavigate();
  const onClickToggleHandler = () => {
    setToggle(!toggle);
  };
  const [activeMenu, setActiveMenu] = useState(null);
  const [arrowState, setArrowState] = useState(false);

  return (
    <StHeader>
      <NavMenu>
        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("function");
              setArrowState(true);
              setActiveMenu("./function");
            }}
          >
            엑셀 함수
          </MenuItem>
          <ArrowImage
            showArrow={activeMenu === "./function"}
            src={require("../assets/images/polygon.svg").default}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/category");
              setArrowState(true);
              setActiveMenu("./category");
            }}
          >
            범주
          </MenuItem>
          <ArrowImage
            showArrow={activeMenu === "./category"}
            src={require("../assets/images/polygon.svg").default}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/shortcut");
              setArrowState(true);
              setActiveMenu("./shortcut");
            }}
          >
            단축키
          </MenuItem>
          <ArrowImage
            showArrow={activeMenu === "./shortcut"}
            src={require("../assets/images/polygon.svg").default}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/extra");
              setArrowState(true);
              setActiveMenu("./extra");
            }}
          >
            추가 기능
          </MenuItem>
          <ArrowImage
            showArrow={activeMenu === "./extra"}
            src={require("../assets/images/polygon.svg").default}
            alt="화살표"
          />
        </Wrapper>

        <Wrapper>
          <MenuItem
            onClick={() => {
              navigate("/etc");
              setArrowState(true);
              setActiveMenu("./etc");
            }}
          >
            기타
          </MenuItem>
          <ArrowImage
            showArrow={activeMenu === "./etc"}
            src={require("../assets/images/polygon.svg").default}
            alt="화살표"
          />
        </Wrapper>
      </NavMenu>
    </StHeader>
  );
};
export default Navbar;
