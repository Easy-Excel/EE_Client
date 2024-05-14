import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  left :32px;
  top: 40px;
  margin : 5px; 
  color : orange;
`;

const SidebarImage = styled.img`
  width: 22px;
  height: 13px;
  margin : 10px;
  cursor: pointer; /* 마우스 커서를 포인터로 변경하여 클릭 가능하도록 합니다. */
`;

const SidebarContent = styled.div`
  /* 사이드바 내용의 스타일을 정의합니다. */
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* isOpen 상태에 따라 표시 여부를 조정합니다. */
`;

function SidebarMobile({ img }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarWrapper>
      <SidebarImage src={require("../assets/images/sidebar.png")} alt="Sidebar Image" onClick={toggleSidebar} />
      <SidebarContent isOpen={isOpen}>
        {/* 사이드바 내용을 추가합니다. */}
      </SidebarContent>
    </SidebarWrapper>
  );
}

export default SidebarMobile;
