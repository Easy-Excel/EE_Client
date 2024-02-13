import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import magfinder from "../assets/images/search.png";
//import FuncListContainerFromUser from "./contents/functionPage/FuncListContainerFromUser";
//import Container from "./contents/functionPage/FuncListContainer"
import { useNavigate } from "react-router-dom";
import { UseDispatch } from "react-redux";
import { API } from "../config";
import { setInput } from "../redux/functionSearch";

const Wrapper = styled.div`
  //right: 14%;
  /* bottom: 78%; */
  width: 240px;
  height: 38px;
  z-index: 100;
  /* margin: 2px; */

  //--검색창 navBar 자식으로 넣고 navBar 기준으로 position 설정--//
  position: absolute;
  top: -48px;
  right: 14%;
  @media screen and (max-width: 1400px) and (max-height: 750px) {
    width: 210px;
  }
  @media screen and (max-width: 950px) {
    width: 210px;
  }
  @media screen and (max-width: 550px) {
    width: 180px;
  }
`;

const Container_ = styled.div`
  position: relative;
  border: none;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid gray;
  margin-left: 2%;
  bottom: 4px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;
  @media screen and (max-width: 950px) {
    gap: 8px;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 1400px) and (max-height: 750px) {
    gap: 8px;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 550px) {
    padding-bottom: 3px;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  /* height: 23px; */
  @media screen and (max-width: 950px) {
    width: 18px;
  }
  @media screen and (max-width: 1400px) and (max-height: 750px) {
    width: 18px;
  }
  @media screen and (max-width: 550px) {
    width: 16px;
  }
`;

const MagImage = styled.img`
  /* width: 24px;
  height: 22px; */
  object-fit: contain;
  width: 100%;
  //width: 15px;

  /* @media screen and (max-width: 950px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 70%;
  } */

  /*
  @media screen and (max-width: 1400px) and (max-height: 750px) {
    width: 18px;
    margin-right: 5px; // 조정
  }
  @media screen and (max-width: 550px) {
    width: 16px;
    margin-right: 1px; // 더 조정

  }*/
`;

const InputBox = styled.input`
  border: none;
  background-color: transparent;
  width: 85%;
  font-size: 15px;
  /* margin-top: 11px; */
  outline: none;
  @media screen and (max-width: 950px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1400px) and (max-height: 750px) {
    font-size: 13px;
  }
  @media screen and (max-width: 550px) {
    font-size: 11px;
  }
`;

const AutoCompleteList = styled.div`
  z-index: 2;
  background-color: white;
  max-height: 300px;
  overflow-y: auto;
  //margin-bottom: 5px;
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  /* background-color: red; */
  height: 45px;
  padding: 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  /* margin-bottom: 5px;
  margin-left: -9%; */
  @media screen and (max-width: 550px) {
    //justify-content: right; /* 화면이 600px 이하로 축소될 때 가운데 정렬 */
    /* margin-left: 10%; */
  }
`;

const MagImageForList = styled.img`
  display: flex;
  width: 22px;
  margin-left: 2px;
  @media screen and (max-width: 950px) {
    width: 18px;
  }
  @media screen and (max-width: 1400px) and (max-height: 750px) {
    width: 18px;
  }
  @media screen and (max-width: 550px) {
    width: 16px;
  }
`;

const AutoCompleteItem = styled.div`
  width: 100%;
  color: gray;
  cursor: pointer; // 마우스 커서를 포인터로 변경하여 클릭 가능한 항목임을 나타냅니다.
  background-color: ${(props) => (props.isSelected ? "lightgray" : "white")};
  /* margin-left: -30%; //돋보기랑 글자 사이의 간격 조정하려고 */
  //gap:5%;
  @media screen and (max-width: 950px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1400px) and (max-height: 750px) {
    font-size: 13px;
  }
  @media screen and (max-width: 550px) {
    /* justify-content: right; 화면이 600px 이하로 축소될 때 가운데 정렬 */
    /* margin-left: 10%; */
    //margin-right: 10%;
    font-size: 11px;
  }
`;

const Finder = () => {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [clickedOne, setClickedOne] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const navigate = useNavigate();
  const onChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API.FUNCTION}/search?keyword=${userInput}`,
          { method: "GET" }
        );
        const data = await response.json();
        setSuggestions(data.result.functionsSearchList);
        //console.log(suggestions);
      } catch (error) {
        console.error("error fetching data: ");
      }
    };
    fetchData();
    setSelectedItemIndex(-1);
  }, [userInput]);

  const handleClickItem = (selectedItem) => {
    //클릭을 했으면,
    setUserInput(selectedItem);
    setClickedOne(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      //한글 keydown 이벤트 중복 문제 해결
      e.preventDefault();
      if (e.nativeEvent.isComposing) {
        return;
      }

      if (selectedItemIndex !== -1) {
        setUserInput(suggestions[selectedItemIndex].name);
        setSelectedItemIndex(-1);
      } else {
        navigate("/home/find", {
          state: { suggestions: suggestions, userInput: userInput },
        });
        setUserInput(""); // 검색했으면 기존 검색 리셋
      }
    } else if (e.key === "ArrowDown") {
      setSelectedItemIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
      //setUserInput(""); // 검색했으면 기존 검색 리셋
    } else if (e.key === "ArrowUp") {
      setSelectedItemIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
    //setSelectedItemIndex(0);
  };

  //const inputRef = useRef(null);
  //자동완성 리스트 중 하나를 선택하고 바로 엔터를 누르면

  return (
    <Wrapper>
      <Container_>
        <ImgBox>
          <MagImage src={magfinder} alt="돋보기 이미지" />
        </ImgBox>
        <InputBox
          placeholder="찾고 싶은 함수를 검색해주세요"
          value={userInput}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          ref={(input) => {
            if (input && clickedOne) {
              input.focus();
            }
          }}
        />
      </Container_>
      {userInput && (
        <AutoCompleteList>
          {suggestions.map((suggestion, index) => (
            // <ItemContainer>
            <ItemWrapper key={index}>
              <MagImageForList src={magfinder} alt="돋보기 이미지" />
              <AutoCompleteItem
                isSelected={index === selectedItemIndex}
                onClick={() => {
                  handleClickItem(suggestion.name);
                }}
              >
                {suggestion.name}
              </AutoCompleteItem>
            </ItemWrapper>
            // </ItemContainer>
          ))}
        </AutoCompleteList>
      )}
    </Wrapper>
  );
};

export default Finder;
