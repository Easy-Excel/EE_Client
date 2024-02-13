import React, { useState, useEffect } from "react";
import styled from "styled-components";
import magfinder from "../assets/images/magfinder.png";
import { API } from "../config";
import { useDispatch } from 'react-redux';
import { setSearchResults } from "../redux/actions";

const Wrapper = styled.div`
  /* position: absolute;
  right: 14%;
  bottom: 78%;
  width: 300px;
  height: 38px;
  z-index: 100;
  margin:2px; */
  position: absolute;
  top: -48px;
  right: 14%;
  width: 310px; //width만 더 길게 설정(2/10)
  height: 38px;
  z-index: 100;

  //Finder.jsx와 스타일 일치(2/10)
  @media screen and (max-width: 1400px) and (max-height: 750px) {
    width: 270px;
  }
  @media screen and (max-width: 950px) {
    width: 270px;
  }
  @media screen and (max-width: 550px) {
    width: 230px;
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
  //Finder.jsx와 스타일 일치(2/10)
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
//Finder.jsx와 스타일 일치(2/10)
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
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

//Finder.jsx와 스타일 일치(2/10)
const MagImage = styled.img`
  /* width: 24px;
  height: 22px; */
  object-fit: contain;
  width: 100%;
  /* margin-right: 5px;*/
  /* margin-bottom: -6.5px; */
  /* @media screen and (max-width: 950px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 70%;
  } */
`;

//Finder.jsx와 스타일 일치(2/10)
const InputBox = styled.input`
  border: none;
  background-color: transparent;
  width: 90%; //width만 더 길게 설정(2/10)
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

const ShortcutFinder = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    if (userInput !== "") {
      fetch(`${API.SHORTCUT}/search?keyword=${userInput}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setSearchResults(data.result.searchResults));
          console.log("dispatch 이후 "+ setSearchResults(data.result.searchResults));
        })
        .catch((err) => {
          console.log("Error fetching data:", err);
        });
    }
  }, [userInput, dispatch]);

  return (
    <Wrapper>
      <Container_>
        <ImgBox>
          <MagImage src={magfinder} alt="돋보기 이미지" />
        </ImgBox>
        <InputBox
          placeholder="찾고 싶은 단축키의 키워드를 검색해주세요"
          value={userInput}
          onChange={handleInputChange}
        />
      </Container_>
    </Wrapper>
  );
};

export default ShortcutFinder;
