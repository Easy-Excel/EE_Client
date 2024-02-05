import React, { useState ,useRef, useEffect} from "react";
import styled from "styled-components";
import refresh from "../assets/images/chatbot/refresh.png";
import ChatBot from "./ChatBot";

const Wrapper = styled.div`
  position: relative;
  left:100%;
  bottom:-11%;
`;

const Btn=styled.button`
    position: fixed;
    /* bottom:10%;
    right: 50%; */
    width:5%;
    height:8%;
    //margin-left: auto;
    background-color: transparent;
    border:none;
    cursor: pointer;
`
const Image_=styled.img`
    width: 100%;
    height: 100%;
`;

//만약에 챗봇에서 x버튼이 눌렸으면 해당 컴포넌트 show, or not 챗봇
export default function RefreshChat(){
    const [onButton,setOnButton]=useState(false);
    if(onButton) return <ChatBot/>;
    return (
        <>
        <Wrapper>
            <Btn onClick={()=>{setOnButton(true)}}>
            <Image_ src={refresh} alt="활성화이미지"/>
            </Btn>
            </Wrapper>
        </>
    );
}