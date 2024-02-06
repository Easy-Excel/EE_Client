import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import magfinder from "../assets/images/magfinder.png";
//import FuncListContainerFromUser from "./contents/functionPage/FuncListContainerFromUser";
//import Container from "./contents/functionPage/FuncListContainer"
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  right: 14%;
  bottom: 78%;
  width: 300px;
  height: 38px;
  z-index: 100;
`;

const Container_ = styled.div`
  position: relative;
  border: none;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid gray;
  margin-left: 2%;
  bottom: 4px;
`;

const MagImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: -9px;
`;

const InputBox = styled.input`
  border: none;
  background-color: transparent;
  width: 70%;
  font-size: 15px;
  margin-top: 5.5px;
`;

const AutoCompleteList = styled.div`
  z-index: 2;
  background-color: white;
`;

const ItemWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
`;

const AutoCompleteItem = styled.div`
  width: 100%;
  height: 100%;
  color: gray;
  cursor: pointer; // 마우스 커서를 포인터로 변경하여 클릭 가능한 항목임을 나타냅니다.
`;

const Finder = () => {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [clickedOne, setClickedOne] = useState(false);
  const  navigate  = useNavigate();
  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://3.39.29.173:8080/functions/search?keyword=${userInput}`
        );
        const data = await response.json();
        setSuggestions(data.result.functionsSearchList);
      } catch (error) {
        console.error("error fetching data: ");
      }
    };
    fetchData();
  }, [userInput]);

  const handleClickItem = (selectedItem) => {
    setUserInput(selectedItem);
    setClickedOne(true);
  };

const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      //setClickedOne(true);
      navigate("/home/find", { state: { suggestions: suggestions, userInput:userInput } });
    }
  };

  return (
    <Wrapper>
      <Container_>
        <MagImage src={magfinder} alt="돋보기 이미지" />
        <InputBox
          placeholder="찾고 싶은 함수를 검색해주세요"
          value={userInput}
          onChange={onChange}
          onKeyDown={handleEnterKey}
        />
      </Container_>
      {userInput && (
        <AutoCompleteList>
          {suggestions.map((suggestion, index) => (
            <ItemWrapper key={index}>
              <MagImage src={magfinder} alt="돋보기 이미지" />
              <AutoCompleteItem
                onClick={() => handleClickItem(suggestion.name)}
              >
                {suggestion.name}
              </AutoCompleteItem>
            </ItemWrapper>
          ))}
        </AutoCompleteList>
      )}
    
    </Wrapper>
  );
};


export default Finder;
