import React from 'react';
import { FixedSizeList } from 'react-window';
import styled from 'styled-components';

// Styled components
const KeytableContainer = styled.div`
  // 화면 정가운데 배치
  height: 250px;
  width: 65%;
  position: absolute;

  // 수정 필요
  transform: translate(-50%, -50%);
  left:45%;
  bottom:20%;
`;

const Table = styled.div`
  width: 120%;
  border : 2px solid #D9D9D9;
`;

const HeaderRow = styled.div`
  background-color: #D9D9D9;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-weight: 800; 
  width: 100%;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Cell = styled.div`
  flex: 1;
`;

// 스크롤 바 css
const StyledFixedSizeList = styled(FixedSizeList)`
  /* 스크롤바 스타일 */
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 100%;

  &::-webkit-scrollbar {
    width: 18px;
    flex-shrink: 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #D9D9D9;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  /* 단축키 css */
  & > div > div {
    display: flex;
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
        background: #B6B6B6;
        color: black;
        font-weight:800;
        padding: 10px;
        margin: 5px;
        display: inline-block;
        width:60px;
        text-align: center;
      }
    }

    /* 첫 번째 열의 값에 대한 스타일 */
    & > div:first-child {
      border: none;
      padding: 0;
      margin: 0;
      background: none;
      font-weight:800;
      justify-content: center;
    }
  }
`;

function Keytable() {
  const data = [
    { description: '다른 이름으로 저장', windows: 'F12', mac: 'Cmd ↑ S' },
    { description: '새 통합문서 만들기', windows: 'Ctrl N', mac: 'Cmd N' },
    { description: '인쇄하기', windows: 'Ctrl P', mac: 'Cmd P' },
    { description: '통합 문서 열기', windows: 'Ctrl O', mac: 'Cmd O' },
    { description: '통합 문서 저장', windows: 'Ctrl S', mac: 'Cmd S' },
    { description: '통합 문서 종료', windows: 'Alt F4', mac: 'Cmd Q' },
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
          height={50 * visibleRows}
          width={'100%'}
          itemCount={data.length}
          itemSize={50}
        >
          {({ index, style }) => (
            <Row style={style}>
              <Cell>
                {data[index].description}
              </Cell>
              <Cell>
                <div>
                  {data[index].windows.split(' ').map((word, i) => (
                    <span key={i}>{word}</span>
                  ))}
                </div>
              </Cell>
              <Cell>
                <div>
                  {data[index].mac.split(' ').map((word, i) => (
                    <span key={i}>{word}</span>
                  ))}
                </div>
              </Cell>
            </Row>
          )}
        </StyledFixedSizeList>
      </Table>
    </KeytableContainer>
  );
}

export default Keytable;
