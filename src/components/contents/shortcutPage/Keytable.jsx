import React from "react";
import styled from "styled-components";

// Styled components
const TopContainer = styled.div`
  height: ${(props) => props.height}px;
  padding: 20px 0px;
`;

const Modal = styled.div`
    font-size: 12px;
    width: 160px;
    height: 60px;
    display: none;
    flex-direction: column;
    position: absolute;
    top: -60px;
    left:170px;
    background-color: #FFFF;
    border: 2px solid rgba(217, 217, 217, 0.7);
    box-shadow:2px 2px rgb(178 178 178 / 0.3);
    border-radius:15px;
    padding:5px;
    //모달 위치 수정 필요.
    //detail explanation의 크기에 따라 모달의 크기도 달라짐.그걸 고려해야함.
    //모달이 table을 벗어나면 가려짐.해결 필요

    .triangle {
        width: 10px;
        background-color: #FFFF;
        height: 20px;
        border-radius: 4px;
        box-shadow:-2px 2px rgb(178 178 178 / 0.3);
        transform: rotate(-45deg);
        position: absolute;
        bottom: -6px;
        left:5px;
    }
`
const KeytableContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
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
  box-sizing: border-box;
  margin-top: -20px;
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
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 18px;
  box-sizing: border-box;
  position:relative;

  &:hover ${Modal} {
    display: block;
  }
`;

const DesCell = styled.div`
  flex: 1;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    font-size: 103%; 
  }

`;
const Cell = styled.div`
  flex: 1;
  font-weight: 700;
`;

const WordBox = styled.span`
  border-radius: 14px;
  background-color: #b6b6b6;
  color: black;
  font-weight: 800;
  padding: 8px 17px;
  margin: 5px 3px;
  font-family: Arial, Helvetica, sans-serif; // 여기만 글씨체 바꾸기
`;
function Keytable({ height }) {
  const data = [
    { description: "다른 이름으로 저장", windows: "F12", mac: "Cmd ↑ S" },
    { description: "새 통합문서 만들기", windows: "Ctrl N", mac: "Cmd N" },
    { description: "인쇄하기", windows: "Ctrl P", mac: "Cmd P" },
    { description: "통합 문서 열기", windows: "Ctrl O", mac: "Cmd O" },
    { description: "통합 문서 저장", windows: "Ctrl S", mac: "Cmd S" },
    { description: "통합 문서 종료", windows: "Alt F4", mac: "Cmd Q" },
  ];

  return (
    <TopContainer height={height.mainBox}>
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
                <DesCell>{item.description}
                  <Modal>
                    <div className="triangle"></div>
                    설명내용입니다........................
                  </Modal>
                </DesCell>
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
    </TopContainer>
  );
}

export default Keytable;
