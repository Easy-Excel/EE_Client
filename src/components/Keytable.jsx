import React from 'react';
import { FixedSizeList } from 'react-window';
import styled from 'styled-components';

// Styled components
const KeytableContainer = styled.div`
  height: 250px;
  width: 100%;
  overflow-y: auto; /* 스크롤 바 추가 */
`;

const Table = styled.div`
  width: 100%;
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

function Keytable() {
  const data = [
    { description: '다른 이름으로 저장', windows: 'F12', mac: 'Cmd + ↑ + S' },
    { description: '새 통합문서 만들기', windows: 'Ctrl + N', mac: 'Cmd + N' },
    { description: '인쇄하기', windows: 'Ctrl + P', mac: 'Cmd + P' },
    { description: '통합 문서 열기', windows: 'Ctrl + O', mac: 'Cmd + O' },
    { description: '통합 문서 저장', windows: 'Ctrl + S', mac: 'Cmd + S' },
    { description: '통합 문서 종료', windows: 'Alt + F4', mac: 'Cmd + Q' },
  ];

  const visibleRows = 5;

  return (
    <KeytableContainer>
      <Table>
        <FixedSizeList
          height={50 * visibleRows}
          width={'100%'}
          itemCount={data.length}
          itemSize={50}
        >
          {({ index, style }) => (
            <Row style={style}>
              <Cell>{data[index].description}</Cell>
              <Cell>{data[index].windows}</Cell>
              <Cell>{data[index].mac}</Cell>
            </Row>
          )}
        </FixedSizeList>
      </Table>
    </KeytableContainer>
  );
}

export default Keytable;
