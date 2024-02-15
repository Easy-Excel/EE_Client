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

const TextWrapper = styled.div`
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
  @media screen and (max-width: 480px) {
    padding: 0px 15px;
    padding-bottom: 10px;
  }
`;

const Text = styled.div`
  cursor: pointer;
  font-family: SUIT;
  font-size: 26px; //글씨크기 줄임(1/25)
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  padding: 12px; /* 글자와 테두리 간의 여백 조절 */
  text-align: center;
  color: ${(props) => props.fontColor};

  //2/15 반응형 설정
  @media screen and (max-width: 1160px) {
    font-size: 24px;
    padding: 10px;
  }
  @media screen and (max-width: 765px) {
    font-size: 19px;
    padding: 5px;
  }
  @media screen and (max-width: 450px) {
    font-size: 16px;
    padding: 5px;
  }
  @media screen and (max-width: 407px) {
    font-size: 13px;
  }
`;
const NotFound = styled.div`
  margin-top: 26px;
  font-family: SUIT;
  font-size: 25px; //글씨크기 줄임(1/25)
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 12px; /* 글자와 테두리 간의 여백 조절 */
  //text-align: center;
  margin-left: 40px;
`;
const FuncWrapper = styled.div;
function Find() {
  const location = useLocation();
  const suggestions = location.state ? location.state.suggestions : [];
  const userInput = location.state ? location.state.userInput : "";
  console.log(suggestions);

  return (
    <Container>
      <TextWrapper>
        {userInput.length === 0 ? (
          <Text fontColor="gray">검색어를 입력해주세요</Text>
        ) : (
          <Text>'{userInput}'의 검색한 결과</Text>
        )}
        {/* <Text>'{userInput}'의 검색한 결과</Text> */}
      </TextWrapper>
      {suggestions.length === 0 ? (
        <NotFound>
          '{userInput}'와 일치하는 단어를 찾을 수 없습니다.
          <br />
          <br />
          모든 단어의 철자가 맞는지 다시 확인해 주시기 바랍니다.
        </NotFound>
      ) : (
        <FuncListContainerFromUser suggestions={suggestions} />
      )}
    </Container>
  );
}

export default Find;
