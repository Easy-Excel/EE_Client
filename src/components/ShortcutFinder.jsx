import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import magfinder from "../assets/images/magfinder.png";

const Wrapper = styled.div`
  position: absolute;
  right: 14%;
  bottom: 78%;
  width: 300px;
  height: 38px;
  z-index: 100;
  margin:2px;
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



const ShortcutFinder = () => {
  const [userInput, setUserInput] = useState("");
  
  useEffect(() => {
    
  }, [userInput]);

  return (
    <Wrapper>
      <Container_>
        <MagImage src={magfinder} alt="돋보기 이미지" />
        <InputBox
          placeholder="찾고 싶은 단축키의 키워드를 검색해주세요"
          value={userInput}
        />
      </Container_>   
    </Wrapper>
  );
};


export default ShortcutFinder;
