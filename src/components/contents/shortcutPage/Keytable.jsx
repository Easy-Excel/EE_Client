import React from "react";
import styled from "styled-components";

// Styled components
const KeytableContainer = styled.div`
  height: 300px;
  width: 100%;
  margin-top:30px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    position: relative;
    left:30px;
    flex-shrink: 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #d9d9d9;
  }
  //호버시 색상 변경
  &::-webkit-scrollbar-thumb:hover {
    background-color: #908f8f;
  }

`;

const Table = styled.div`
  width: 90%;
  position: relative;
  bottom: -20px;
  border: 2px solid #d9d9d9;
  margin: 0 auto;
  box-sizing: border-box; /* Ensure that borders don't affect the width */
`;

const HeaderRow = styled.div`
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: 800;
  font-size: 20px;
  width: 100%;
  text-align: center;
`;
const Rows = styled.div`
  text-align: center;
`;
const Row = styled.div`
  border :1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 18px;
  box-sizing: border-box;
`;

const Cell = styled.div`
  flex: 1;
  font-weight:700;
`;

const WordBox = styled.span`
  border-radius: 14px;
  background-color: #b6b6b6;
  color: black;
  font-weight: 800;
  padding: 9px 17px;
  margin: 3px;
  font-family: Arial, Helvetica, sans-serif;// 여기만 글씨체 바꾸기
`;
function Keytable() {
  const data = [
    { description: "다른 이름으로 저장", windows: "F12", mac: "Cmd ↑ S" },
    { description: "새 통합문서 만들기", windows: "Ctrl N", mac: "Cmd N" },
    { description: "인쇄하기", windows: "Ctrl P", mac: "Cmd P" },
    { description: "통합 문서 열기", windows: "Ctrl O", mac: "Cmd O" },
    { description: "통합 문서 저장", windows: "Ctrl S", mac: "Cmd S" },
    { description: "통합 문서 종료", windows: "Alt F4", mac: "Cmd Q" },
  ];

  return (
    <KeytableContainer>
      <Table>
        <HeaderRow>
          <Cell>설명</Cell>
          <Cell>Window</Cell>
          <Cell>Mac</Cell>
        </HeaderRow>
        <Rows>
        {data.map((item, index) => (
          <Row key={index}>
            <Cell>{item.description}</Cell>
            <Cell>
              {item.windows.split(" ").map((word, i) => (
                <WordBox key={i}>{word}</WordBox>
              ))}
            </Cell>
            <Cell>
              {item.mac.split(" ").map((word, i) => (
                <WordBox key={i}>{word}</WordBox>
              ))}
            </Cell>
          </Row>
        ))}
        </Rows>
      </Table>
    </KeytableContainer>
  );
}

export default Keytable;
