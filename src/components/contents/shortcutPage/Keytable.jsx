import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../../config";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// Styled components
const TopContainer = styled.div`
  height: ${(props) => props.height}px;
  padding: 20px 0px;
`;

const Modal = styled.div`
  font-size: 12px;
  width: 160px;
  display: none;
  flex-direction: column;
  position: absolute;
  bottom: 50px;
  left: 20%;
  background-color: #ffff;
  border: 2px solid rgba(217, 217, 217, 0.7);
  box-shadow: 2px 2px rgb(178 178 178 / 0.3);
  border-radius: 15px;
  padding: 5px;

  //모달이 table을 벗어나면 가려짐.해결 필요. z-index로 안된다...

  .triangle {
    width: 10px;
    background-color: #ffff;
    height: 20px;
    border-radius: 4px;
    box-shadow: -2px 2px rgb(178 178 178 / 0.3);
    transform: rotate(-45deg);
    position: absolute;
    bottom: -6px;
    left: 5px;
  }
`;
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
  position: relative;

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
function Keytable({ height, contentType }) {
  const [type, setType] = useState(contentType); //버튼 클릭마다 바뀌어야 하는 부분. 디폴트는 '파일실행'
  const [shortcutKeyData, setDatas] = useState(null); //데이터 받아와서 저장
  // const [searchResults, setSearchResults] = useState(
  //   useSelector((state) => state.searchResults)
  // );

  const { searchResults } = useSelector((state) => state.keyTable);

  useEffect(() => {
    setType(contentType);
  }, [contentType]);

  useEffect(() => {
    fetch(`${API.SHORTCUT}/category?type=${type}`)
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        setDatas(data.result.shortcutKeyList);
        console.log(data.result.shortcutKeyList);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, [type]); // type 값이 변경될 때마다 호출

  useEffect(() => {
    console.log("2" + searchResults);
    if (searchResults && searchResults.length > 0) {
      console.log("3" + searchResults);
      // searchResults가 존재하고 비어 있지 않을 때에만 데이터를 업데이트합니다.
      setDatas(searchResults);
      console.log("4" + searchResults);
    }
  }, [searchResults]); // searchResults 값이 변경될 때마다 호출

  return (
    <TopContainer height={height.mainBox}>
      <KeytableContainer>
        <Table>
          <HeaderRow>
            <Cell>설명</Cell>
            <Cell>Window</Cell>
            <Cell>Mac</Cell>
          </HeaderRow>
          {shortcutKeyData ? (
            <Rows>
              {shortcutKeyData.map((item) => (
                <Row key={item?.id}>
                  <DesCell>
                    {item?.explanation}
                    <Modal>
                      <div className="triangle"></div>
                      {item?.detailExplanation}
                    </Modal>
                  </DesCell>
                  <Cell>
                    {item?.windowKey.map((word, index) => (
                      <WordBox key={index}>{word}</WordBox>
                    ))}
                  </Cell>
                  <Cell>
                    {item?.macKey.map((word, index) => (
                      <WordBox key={index}>{word}</WordBox>
                    ))}
                  </Cell>
                </Row>
              ))}
            </Rows>
          ) : (
            <p>{searchResults ? "No results found" : "Loading..."}</p>
          )}
        </Table>
      </KeytableContainer>
    </TopContainer>
  );
}

export default Keytable;
