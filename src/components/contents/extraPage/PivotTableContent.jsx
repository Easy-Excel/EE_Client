import React from "react";
import styled from "styled-components";
import pivotTableImage from "./pivotTable.png";

const Container = styled.div`
  /* position: absolute; */
  //margin: 0 auto;
  /* top: 40%;
  left: 50%;
  transform: translateX(-50%); */
  /* width: 80%; */
  //text-align: center; /* Center the text horizontally */
  //width: 100%; /* Ensure full width of the container */
`;

const Title = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 20px;
  /* position: absolute;
  top: 32%;
  left: 17%;
  transform: translateX(-50%); */
`;
const Paragraph = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  left: 10%;
  //position: absolute;
  //margin-top: 15px;
  //margin-bottom: 17px;
  width: 90%;
  margin: 0 auto; /* Center the paragraph horizontally */
  max-width: 1200px; /* Set a maximum width if needed */
  margin: -7px auto;

  margin-top: 5px;
  margin-bottom: 40px;
`;

const SubTitle = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.44px;

  margin-top: 60px;
  margin-bottom: 10px;
  /* position: absolute;
  top: 1%; //위치 조정
  left: 15%;
  transform: translateX(-90%); */
`;
const HelpImage = styled.img`
  margin-top: 100px;
  width: 268px;
  height: 146px;
  flex-shrink: 0;
  transform: translateX(40%);
  margin-top: -4px;
  margin-left: 50px;
`;
const How = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
  //margin-top: 30px;
  transform: translateX(10%);

  padding: 30px;
`;

const Btn = styled.button`
  //버튼 크기 조정
  display: flex;
  width: 14%; //창 조절할 때마다 버튼 크기도 조정
  padding: 10px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  background-color: #107c41;
  color: #fff;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  /* margin-top: 20px;
  margin-left: 60px; */

  :hover {
    cursor: pointer;
  }
`;

const PivotTableContent = () => {
  return (
    <div>
      <Title>피벗테이블</Title>
      <Container>
        <Paragraph>
          피벗테이블은 데이터를 계산, 요약 및 분석하는 강력한 도구로서 데이터의
          비교, 패턴 및 추세를 보는데 사용할 수 있습니다.
        </Paragraph>
        <SubTitle>사용하는 방법</SubTitle>

        <How>
          1. 피벗테이블로 확인하고 싶은 데이터 영역을 추가해준 뒤,[삽입]
          피벗테이블을 선택합니다.
        </How>
        <HelpImage src={pivotTableImage} />

        {/* src={require("../assets/images/polygon.svg").default */}
        <How>
          2. 피벗테이블로 확인하고 싶은 데이터 영역을 추가해준 뒤,[삽입]
          피벗테이블을 선택합니다.
        </How>
        <Btn>예제</Btn>
      </Container>
    </div>
  );
};

export default PivotTableContent;
