import React,{useEffect, useState} from "react";
import styled from "styled-components";
import axios from 'axios';

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
    left:20%;
    background-color: #FFFF;
    border: 2px solid rgba(217, 217, 217, 0.7);
    box-shadow:2px 2px rgb(178 178 178 / 0.3);
    border-radius:15px;
    padding:5px;
    //모달이 table을 벗어나면 가려짐.해결 필요. z-index로 안된다...

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
  const [datas,setDatas]=useState([]);

  //1번
  // useEffect(() => {
  //   // useEffect 안에서 비동기 함수를 정의
  //   const fetchData = async () => {
  //     try {
  //       // API 호출
  //       const response = await axios.get('./shortcutData.json');
  //       //json파일이 잘 불러와졌는지 확인용
  //       console.log('Response:', response.data);
  //       // 성공적으로 데이터를 가져왔을 때 상태 업데이트
  //       setDatas(response.data);//??
  //     } catch (error) {
  //       // 오류 처리
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   // 비동기 함수 호출
  //   fetchData();
  // }, []); 


  //2번
  // useEffect(()=>{
  //   fetch("./shortcutData.json")
    
  //  .then((res) => {
  //     return res.json();
  //  })

  //  .then((data) =>{
  //     setDatas(data);
  //     console.log(data);
  //   });
  
  // },[]);


  const data = [
    {id:"1", explanation: "다른 이름으로 저장", windowKey: "F12", macKey: "Cmd + ↑ + S", detailExplanation:"1" },
    {id:"2", explanation: "새 통합문서 만들기", windowKey: "Ctrl + N", macKey: "Cmd + N",detailExplanation:"2" },
    {id:"3", explanation: "인쇄하기", windowKey: "Ctrl + P", macKey: "Cmd + P" ,detailExplanation:"3"},
    {id:"4", explanation: "통합 문서 열기", windowKey: "Ctrl + O", macKey: "Cmd + O",detailExplanation:"4" },
    {id:"5", explanation: "통합 문서 저장", windowKey: "Ctrl + S", macKey: "Cmd + S" ,detailExplanation:"5"},
    {id:"6", explanation: "통합 문서 종료", windowKey: "Alt + F4", macKey: "Cmd + Q" ,detailExplanation:"6"},
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
          {data ? (
            <Rows>
            {data.map((item) => (
              <Row key={item.id}>
                <DesCell>{item.explanation}
                  <Modal>
                    <div className="triangle"></div>
                    {item.detailExplanation}
                  </Modal>
                </DesCell>
                <Cell>
                  {item.windowKey.split(/[\s+]+/).map((word) => (
                    <WordBox key={item.id}>{word}</WordBox>
                  ))}
                </Cell>
                <Cell>
                  {item.macKey.split(/[\s+]+/).map((word) => (
                    <WordBox key={item.id}>{word}</WordBox>
                  ))}
                </Cell>
              </Row>
            ))}
          </Rows>
          ) :(<p>loading</p>)}
          
        </Table>
      </KeytableContainer>
    </TopContainer>
  );
}

export default Keytable;
