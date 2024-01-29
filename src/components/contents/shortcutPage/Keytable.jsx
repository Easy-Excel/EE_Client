import React from "react";
import { FixedSizeList } from "react-window";
import styled from "styled-components";

// Styled components
const KeytableContainer = styled.div`
  height: 250px;
  width: 140%;
`;

const Table = styled.div`
  width: 70%; //테이블 사이즈 조금 줄였습니다.(진주)
  position: relative;
  left: -13%;
  bottom: -60px;
  border: 2px solid #d9d9d9;
  overflow: hidden;
  margin: 0 auto;
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

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 18px;
`;

const Cell = styled.div`
  flex: 1;
`;

// 스크롤 바 css
const StyledFixedSizeList = styled(FixedSizeList)`
  /* 스크롤바 스타일 */
  width: 100%;
  height: calc(100%-40px);
  //overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 18px;
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

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  & > div {
    font-family: Arial, Helvetica, sans-serif;
  }

  /* 단축키 css */
  & > div > div {
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    & > div {
      /* border-radius: 16px;
      background: #B6B6B6;
      color: #000;
      padding: 5px;
      margin: 5px; */
      display: flex;
      align-items: center;
      justify-content: center;

      /* 단축키 스타일 */
      span {
        border-radius: 16px;
        background: #b6b6b6;
        color: black;
        font-weight: 800;
        padding: 10px;
        margin: 5px;
        display: inline-block;
        width: 60px;
        text-align: center;
      }
    }

    /* 첫 번째 열의 값에 대한 스타일 */
    & > div:first-child {
      border: none;
      padding: 0;
      margin: 0;
      background: none;
      font-weight: 800;
      justify-content: center;
    }
  }
`;
const ScrollbarContainer = styled.div`
  //position: absolute;
  //top: 40px;
  //right: 10px;
  height: calc(100% - 40px);
  width: 18px;
  overflow-y: auto;
`;
function Keytable() {
  const data = [
    //dB에서 받아올 부분 만약 받아온다면 keytable함수의 파라미터로 {data}
    { description: "다른 이름으로 저장", windows: "F12", mac: "Cmd ↑ S" },
    { description: "새 통합문서 만들기", windows: "Ctrl N", mac: "Cmd N" },
    { description: "인쇄하기", windows: "Ctrl P", mac: "Cmd P" },
    { description: "통합 문서 열기", windows: "Ctrl O", mac: "Cmd O" },
    { description: "통합 문서 저장", windows: "Ctrl S", mac: "Cmd S" },
    { description: "통합 문서 종료", windows: "Alt F4", mac: "Cmd Q" },
  ];

  const visibleRows = 5;

  return (
    <KeytableContainer>
      <Table>
        <HeaderRow>
          <Cell>설명</Cell>
          <Cell>Window</Cell>
          <Cell>Mac</Cell>
        </HeaderRow>
        <StyledFixedSizeList
          height={55 * visibleRows}
          width={"100%"}
          itemCount={data.length}
          itemSize={55}
        >
          {({ index, style }) => (
            <Row style={style}>
              <Cell>{data[index].description}</Cell>
              <Cell>
                <div>
                  {data[index].windows.split(" ").map((word, i) => (
                    <span key={i}>{word}</span>
                  ))}
                </div>
              </Cell>
              <Cell>
                <div>
                  {data[index].mac.split(" ").map((word, i) => (
                    <span key={i}>{word}</span>
                  ))}
                </div>
              </Cell>
            </Row>
          )}
        </StyledFixedSizeList>
        <ScrollbarContainer />
      </Table>
    </KeytableContainer>
  );
}

export default Keytable;
