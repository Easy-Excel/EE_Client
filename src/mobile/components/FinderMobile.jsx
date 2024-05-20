import React, { useState } from 'react';
import styled from "styled-components";

const SearchAllWrapper= styled.div`
  background-color: White;
  position:absolute;
  top:0;
  width:100%;
  height:77px;
  opacity: ${props => props.isOpen ? '1' : '0'};
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
  height:62px;
  z-index: 1000;
  margin: 2px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  margin: 3px;
  border: none;
  outline: none;
  color: var(--Gray-500, #908F8F);
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
const ResultBox =styled.div`
  position: relative;
  top: 0%;
  left: -60px;
  width: 101vw;
  max-height: 20vh;
  display : flex;
  flex-direction: column;
  z-index: 500;
  overflow-y: auto;
  background-color:white;
`;

const ResultItem = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;

`;

const SearchImgInResult =styled.img`
  width:15px;
  height:15px;
  margin :5px;
  margin-right: 20px;
  position:relative;
  left: 0.5vw;
`;
const Result =styled.div`
  width: 100%;
  padding: 3px;
  color: var(--Gray-500, #908F8F);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FinderMobile = () => {
  //열고 닫는 버튼
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };
  //검색 결과
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const onChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 0) {
      // 임의의 검색 결과. 나중에 api 받아오면 수정하기
      const fakeResults = ['ABS', 'AVERAGE', 'CHOOSE', 'COLUMN', 'CONCAT', 'CONCATENATE', 'COUNT','COUNTA']
        .filter(item => item.replace(" ","").toLowerCase().includes(value.toLowerCase().replace(" ","")));
      setResults(fakeResults);
    } else {
      setResults([]);
    }
  };


  return (
    <>
    <SearchButton src={require("../../assets/images/search.png")} alt="Search" onClick={toggleSearch} />
    <SearchAllWrapper isOpen={isOpen}>
      <SearchImg src={require("../../assets/images/search.png")} alt="Search"/>
      <SearchContainer>
        <SearchInput type="text"  value={search} onChange={onChange} placeholder="찾고 싶은 함수를 검색해주세요" />
        {results.length > 0 && (
          <ResultBox>
            {results.map((result, index) => (
              <ResultItem key={index}>
                <SearchImgInResult src={require("../../assets/images/search.png")} alt="Search"/>
                <Result>
                  {result}
                </Result>
              </ResultItem>
            ))}
          </ResultBox>
        )}
      </SearchContainer>
      <CloseButton src={require("../../assets/images/closebutton.png")} alt="closebutton" onClick={toggleSearch}/>
    </SearchAllWrapper>
      
    </>
  );
};

export default FinderMobile;