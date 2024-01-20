import React, { useState } from "react";
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
    //background-color: white ;
    background-color:${({ color }) => color};

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
function ButtonA(){
    const [buttonColors,setButtonColors]=useState(["white","white","white"]);
    const handleButtonClick=(index)=>{
        const newColor=buttonColors.map((color,i)=>
        i===index? "#107c41":"white");
        setButtonColors(newColor);
    }

    return(
        <BtnWrapper>
            <Btn color={buttonColors[0]} onClick={()=>handleButtonClick(0)}>A~H</Btn>
            <Btn color={buttonColors[1]} onClick={()=>handleButtonClick(1)}>I~P</Btn>
            <Btn color={buttonColors[2]} onClick={()=>handleButtonClick(2)}>Q~Z</Btn>
        </BtnWrapper>
    )
}

export default ButtonA;