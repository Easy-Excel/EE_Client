import React, { useState } from 'react';
import styled from "styled-components";

const SearchAllWrapper= styled.div`
  background-color: White;
  position:absolute;
  top:0;
  width:100%;
  height:77px;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: opacity 0.3s ease;
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
`; 
const SearchImg =styled.img`
  width:25px;
  height:25px;
  margin :8px;
  position:relative;
  left: 14px;
  top: 18px;
`;
const SearchButton = styled.img`
  width:25px;
  height:25px;
  margin :10px;
  cursor: pointer;
  position : absolute;
  right: 20px;
`;
const CloseButton = styled.img`
  width:25px;
  height:25px;
  margin :10px;
  position : absolute;
  right: 20px;
  top:17px;
`;
const SearchContainer = styled.div`
  position: absolute;
  top:14px;
  left: 55px;
  width: 68%;
  background-color: white;
  z-index: 1000;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  margin: 5px;
  border: none;
  outline: none;
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  
  //placeholder 속성
  &::-webkit-input-placeholder {
    color: var(--Gray-500, #908F8F);
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  }

`;

const FinderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <SearchButton src={require("../assets/images/search.png")} alt="Search" onClick={toggleSearch} />
    <SearchAllWrapper isOpen={isOpen}>
      <SearchImg src={require("../assets/images/search.png")} alt="Search"/>
      <SearchContainer>
        <SearchInput type="text" placeholder="찾고 싶은 함수를 검색해주세요" />
      </SearchContainer>
      <CloseButton src={require("../assets/images/closebutton.png")} alt="closebutton" onClick={toggleSearch}/>
    </SearchAllWrapper>
      
    </>
  );
};

export default FinderMobile;