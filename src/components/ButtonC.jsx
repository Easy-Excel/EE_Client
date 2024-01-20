import React from "react";
import styled from "styled-components";

const Btn=styled.button`//버튼 크기 조정
    display: flex;
    //width: 217px;
    width: 17%;//창 조절할 때마다 버튼 크기도 조정
    padding: 10px;
    height: 53px;
    justify-content: center;
    align-items: center;

    border-radius: 16px;
    border: 1px solid #000;
    background-color:white ;

    color: #000;
    font-family: SUIT;
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
 `

const BtnWrapper=styled.div`
    flex-grow: 1; /* 각 항목이 동일한 너비를 가지도록 설정합니다. */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; /* 수평 가운데 정렬 */
    width:90%;
    top:-804px;
    gap:90px;
    flex-shrink: 0;
    margin: 0 auto; /* 좌우 가운데 정렬을 위한 margin 설정 */
    `
function ButtonC(){
    
    return(
        <BtnWrapper>
            <Btn>날짜/시간</Btn>
            <Btn>통계</Btn>
            <Btn>찾기/참조 영역</Btn>
            <Btn>데이터베이스</Btn>
            <Btn>텍스트</Btn>
        </BtnWrapper>
    )
}

export default ButtonC;