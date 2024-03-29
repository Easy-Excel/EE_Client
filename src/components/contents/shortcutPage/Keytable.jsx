import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../../config";
import { useSelector } from "react-redux";

// Styled components
const TopContainer = styled.div`
  height: ${(props) => props.height}px;
  padding: 20px 0px;
  @media screen and (max-width: 450px) {
    height: auto;
    padding-bottom: 0px;
  }
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

  @media screen and (max-width: 450px) {
    min-height: fit-content;
    width: 100%;
    position: relative;

    &::-webkit-scrollbar {
      display: none; /* 스마트폰 : 스크롤바 숨기기 */
    }
  }

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
  width: ${(props) => props.width}px;
  position: relative;
  bottom: -20px;
  border: 2px solid #d9d9d9;
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: -20px;
  min-width: 600px;
  word-break: keep-all;
  @media screen and (max-width: 450px) {
    height: auto;
    min-width: auto;
    width: 100%;
  }
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 450px) {
    font-size: 15px;
  }
`;

const Rows = styled.div`
  text-align: center;
`;

const Row = styled.div`
  border: 1px solid #d9d9d9;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  &:hover ${Modal} {
    display: block;
  }

  @media screen and (max-width: 450px) {
    padding: 10px;
    display: felx;
    align-items: center;
  }
`;

const DesCell = styled.div`
  font-weight: 700;
  font-size: ${(props) =>
    props.smallScreen ? "16px" : "18px"}; /* 1100px 이하일 때 글자 크기 조정 */
  &:hover {
    text-decoration: underline;
    cursor: default;
    font-size: ${(props) =>
      props.smallScreen
        ? "102%"
        : "115%"}; /* 1100px 이하일 때 hover시 글자 크기 조정 */
  }
  @media screen and (max-width: 450px) {
    min-width: 40px;
    max-width: 60px;
    font-size: 12px;
    &:hover {
      text-decoration: underline;
      font-size: 80%;
    }
  }
`;
const Cell = styled.div`
  font-size: ${(props) =>
    props.smallScreen ? "14px" : "18px"}; /* 1100px 이하일 때 글자 크기 조정 */
  font-weight: 700;
  &:hover {
    text-decoration: underline; /* Add underline on hover */
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const WordBox = styled.span`
  border-radius: 14px;
  background-color: #b6b6b6;
  color: black;
  font-weight: 800;
  padding: ${(props) =>
    props.smallScreen
      ? "4px 12px"
      : "7px 17px"}; /* 1100px 이하일 때 padding 조정 */
  margin: ${(props) =>
    props.smallScreen
      ? "3px 2px"
      : "5px 3px"}; /* 1100px 이하일 때 margin 조정 */
  font-family: Arial, Helvetica, sans-serif; // 여기만 글씨체 바꾸기(화살표때문)
  @media screen and (max-width: 450px) {
    font-size: 13px;
    padding: 5px 5px;
    margin: 0 1px;
    border-radius: 10px;
  }
`;

const NoResult = styled.div`
  color: #384c36;
  font-size: 30px;
  font-weight: 800;
  padding: 10px;
  text-align: center;
  margin: 10.5% auto;
`;

const LoadingSpinner = styled.div`
  color: #384c36;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin: 12.5% auto;
`;

function Keytable({ height, contentType }) {
  const [type, setType] = useState(contentType); //버튼 클릭마다 바뀌어야 하는 부분. 디폴트는 '파일실행'
  const [shortcutKeyData, setDatas] = useState(null); //데이터 받아와서 저장
  const { searchResults } = useSelector((state) => state.keyTable);
  const [smallScreen, setSmallScreen] = useState(false); //화면 크기 받아옴.=> 단축키 표의 박스 크기 수정시 필요
  const [loading, setLoading] = useState(false); // 추가: 데이터 로딩 상태

  useEffect(() => {
    //화면크기설정
    function handleResize() {
      if (window.innerWidth <= 1100) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setType(contentType);
  }, [contentType]);

  useEffect(() => {
    setLoading(true);
    fetch(`${API.SHORTCUT}/category?type=${type}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //이걸로 로딩 화면 확인 가능
        setTimeout(() => {
          setDatas(data.result.shortcutKeyList);
          setLoading(false);
        }, 150);
        // setDatas(data.result.shortcutKeyList);
        // setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
        setLoading(false);
      });
  }, [type]); // type 값이 변경될 때마다 호출

  useEffect(() => {
    if (searchResults) {
      setDatas(searchResults);
    }
    //질문!! 검색시 type의 값을 변경하여 버튼 클릭시 다시 api를 호출하도록 하고 싶은데 바뀌지 않아요..
    //console.log("settype"+contentType); 이걸로 확인해봤는데 안바뀜..
  }, [searchResults]); // searchResults 값이 변경될 때마다 호출

  return (
    <TopContainer height={height.mainBox}>
      <KeytableContainer>
        {loading ? ( // 로딩 중일 때 로딩 표시
          <LoadingSpinner>Loading...</LoadingSpinner>
        ) : shortcutKeyData !== null && shortcutKeyData.length > 0 ? (
          <Table>
            <HeaderRow>
              <Cell>설명</Cell>
              <Cell>Window</Cell>
              <Cell>Mac</Cell>
            </HeaderRow>
            <Rows>
              {shortcutKeyData.map((item) => (
                <Row key={item?.id}>
                  <DesCell smallScreen={smallScreen}>
                    {item?.explanation}
                    <Modal>
                      <div className="triangle"></div>
                      {item?.detailExplanation}
                    </Modal>
                  </DesCell>
                  <Cell smallScreen={smallScreen}>
                    {item?.windowKey.map((word, index) => (
                      <WordBox key={index}>{word}</WordBox>
                    ))}
                  </Cell>
                  <Cell smallScreen={smallScreen}>
                    {item?.macKey.map((word, index) => (
                      <WordBox key={index}>{word}</WordBox>
                    ))}
                  </Cell>
                </Row>
              ))}
            </Rows>
          </Table>
        ) : (
          <NoResult>
            <p>
              No results found
              <br />
            </p>
            <p style={{ fontSize: "15px", fontWeight: "500" }}>
              검색 결과와 연관된 키워드가 없습니다. <br />
            </p>
          </NoResult>
        )}
      </KeytableContainer>
    </TopContainer>
  );
}

export default Keytable;
