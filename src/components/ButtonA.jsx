import React, { useState } from "react";
import styled from "styled-components";

const Btn = styled.button`
  //버튼 크기 조정
  display: flex;
  //width: 217px;
  width:20%; //창 조절할 때마다 버튼 크기도 조정
  padding: 10px;
  height: 53px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: ${({ border }) => border}; //선택/미선택 테두리 스타일 달리 적용
  background-color: ${({ color }) => color};
  color: ${({ fontColor }) => fontColor};

  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const BtnWrapper = styled.div`
  box-sizing: border-box;
  flex-grow: 1; /* 각 항목이 동일한 너비를 가지도록 설정합니다. */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 가운데 정렬 */
  width: 100%;
  height: 100px;
  gap: 90px;
  flex-shrink: 0;
  margin: 12px auto; /* 좌우 가운데 정렬을 위한 margin 설정 */
  padding: 27px 20px;
  border-bottom: 3.11px solid black;
`;
function ButtonA({ onButtonClick }) {
  const [buttonColors, setButtonColors] = useState([
    "#107c41",
    "white",
    "white",
  ]);
  const handleButtonClick = (index) => {
    const newColor = buttonColors.map((color, i) =>
      i === index ? "#107c41" : "white"
    );
    setButtonColors(newColor);

    //처음에는 제일 왼쪽 버튼이 칠해진 게 디폴트
    const contentMapping = ["AtoH", "ItoP", "QtoZ"];
    onButtonClick(contentMapping[index]); //클릭된 내용을 부모 컴포넌트에 전달
    
  };

  return (
    <BtnWrapper>
      <Btn
        color={buttonColors[0]}
        fontColor={buttonColors[0] === "#107c41" ? "white" : "black"}
        border={buttonColors[0] === "#107c41" ? "none" : "1px solid black"}
        onClick={() => handleButtonClick(0)}
      >
        A~H
      </Btn>
      <Btn
        color={buttonColors[1]}
        fontColor={buttonColors[1] === "#107c41" ? "white" : "black"}
        border={buttonColors[1] === "#107c41" ? "none" : "1px solid black"}
        onClick={() => handleButtonClick(1)}
      >
        I~P
      </Btn>
      <Btn
        color={buttonColors[2]}
        fontColor={buttonColors[2] === "#107c41" ? "white" : "black"}
        border={buttonColors[2] === "#107c41" ? "none" : "1px solid black"}
        onClick={() => handleButtonClick(2)}
      >
        Q~Z
      </Btn>
    </BtnWrapper>
  );
}

export default ButtonA;
