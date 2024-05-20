import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { showSideBar, hideSideBar } from "../redux/sideBarReducer";

const SidebarWrapper = styled.div`
  position: fixed;
  left: 14px;
  top: 16px;
  margin: 5px;
  color: orange;
`;

const SidebarImage = styled.img`
  width: 22px;
  height: 13px;
  margin: 10px;
  cursor: pointer; /* 마우스 커서를 포인터로 변경하여 클릭 가능하도록 합니다. */
`;

function SidebarMobile({ img }) {
  const dispatch = useDispatch();

  // const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    dispatch(showSideBar());
  };

  return (
    <SidebarWrapper>
      <SidebarImage
        src={require("../assets/images/sidebar.png")}
        alt="Sidebar Image"
        onClick={toggleSidebar}
      />
    </SidebarWrapper>
  );
}

export default SidebarMobile;
