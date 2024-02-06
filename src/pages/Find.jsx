import React from "react";
import styled from "styled-components";
import FuncListContainerFromUser from "../components/contents/functionPage/FuncListContainerFromUser";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 20px;
  align-items: center;
`;

const TextWrapper=styled.div`
    /* margin-top: 10px;
    width:90%;
    height:60px;
    border-bottom: 2px solid black;
    margin-left: auto; /* 왼쪽 여백을 자동으로 조절하여 가운데 정렬 */
    margin-right: auto; /* 오른쪽 여백을 자동으로 조절하여 가운데 정렬 */
    text-align: center; //텍스트를 수평 가운데 정렬 */
    box-sizing: border-box;
    flex-grow: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2.4vw;
    flex-shrink: 0;
    margin: 0px;
    margin-top: 26px;
    padding: 0px 20px;
    padding-bottom: 14px;
    border-bottom: 2px solid black;
`;

const Text=styled.div`
  cursor: pointer;
  font-family: SUIT;
  font-size: 25px; //글씨크기 줄임(1/25)
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  padding: 12px; /* 글자와 테두리 간의 여백 조절 */
  text-align: center;
`
const FuncWrapper=styled.div
function Find(){
    const location=useLocation();
    const suggestions=location.state? location.state.suggestions:[];
    const userInput=location.state? location.state.userInput:"";

    return(
        <>
        <Container>
        <TextWrapper>
        <Text>'{userInput}'의 검색한 결과</Text>
        </TextWrapper>
        <FuncListContainerFromUser suggestions={suggestions}/>
        
        </Container>
        </>
    );
}

export default Find;