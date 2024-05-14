import React, { useState } from 'react';
import styled from 'styled-components';

const FinderWrapper = styled.div`
`;

const FinderImage = styled.img`
  width:25px;
  height:25px;
  cursor: pointer; /* 마우스 커서를 포인터로 변경하여 클릭 가능하도록 합니다. */

`;

const FinderContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* isOpen 상태에 따라 표시 여부를 조정합니다. */
`;

function FinderMobile({ img }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFinder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FinderWrapper>
      <FinderImage src={require("../assets/images/search.png")} alt="Search Image" onClick={toggleFinder} />
      <FinderContent isOpen={isOpen}>
        {/* 검색창 내용을 추가합니다. */}
      </FinderContent>
    </FinderWrapper>
  );
}

export default FinderMobile;
