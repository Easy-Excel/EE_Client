import React, { useState ,useRef, useEffect} from "react";
import styled from "styled-components";
import ellipse3 from "../assets/images/chatbot/ellipse3.png";
import x from "../assets/images/chatbot/x.png";
import RefreshChat from "./RefreshChat";
//import refresh from "../assets/images/chatbot/refresh.png";

const Wrapper=styled.div`
    width: 17%; /* Set the initial width to 50% */
    //height: 40vh; 
    height: 30%;
    position: absolute;
    //position:fixed;
    //margin-right:40%
    left: 80%;
    bottom:9.6%;
    transform-origin: right bottom;

    @media (max-width: 768px) {
        width: 80%;
        height: 80%;
        left: 10%;
    }
`;

const TitleContainer=styled.div`
    width: 100%; 
    display: flex;
    padding: 13px 14px;
    flex-direction: row;//동그라미랑 제목이랑 나란히 배치하려고
    //align-items: flex-start;
    align-items: center;
    gap: 10px;
    border-radius: 20px 20px 0px 0px;
    background: var(--Primary-200, #409667);
`
const Title=styled.div`
    color: var(--Gray-50, #F9F8F8);
    font-family: SUIT;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    `;

const ImgContainer=styled.div`
    width:9%;
    height:9%;

    
`
const SubImage=styled.img`
    /* width:1.5vw;
    height:1.5vw; */
    width:100%;
    height:100%;
`

const Btn =styled.button`
    width:9%;
    height:9%;
    margin-left: auto;
    background-color: transparent;
    border:none;
    cursor: pointer;
`

const DialogContainer=styled.div`
    width: 100%;
    height: 324px;
    background: var(--Gray-100, #F6F5F5);
    //background: #e7e7a9;
    position: relative;
    min-height: 200px;
    overflow-y: scroll;

`;

const Userbox=styled.div`
    display: flex;
    padding: 10px;
    width:100%;
    align-items: center;
    gap: 7px;
    position: absolute;
    right: 14px;
    bottom: 65px;
    border-radius: 20px;
    background: var(--Primary-200, #409667);
`

const UserQuestion = styled.div`
  background-color: #c2f0fc;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
`;

const Responsebox=styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 7px;
    position: absolute;
    left: 12px;
    bottom: 140px;
    border-radius: 20px;
    background: var(--Gray-25, #FCFCFC);
    //position: relative;
`
const ChatBotResponse = styled.div`
  background-color: #ffd3b6;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
`;
const Input=styled.input`
    display: flex;
    width: 100%;
    height: 46px;
    padding: 10px 10px 10px 26px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    bottom: 0px;
    //background: blue;
 `;

export default function ChatBot({xButton}){
    const [userInput,setUserInput]=useState("");
    const [dialog,setDialog]=useState([]);
    const [onXButton,setOnXButton]=useState(false);//x버튼을 누르면 챗봇을 안보이게 할거임.
    const dialContainerRef=useRef(null);

    useEffect(()=>{
        console.log("useEffect is running");
        if(dialContainerRef.current) {
            console.log(dialContainerRef.current.scrollHeight);
            dialContainerRef.current.scrollTop=0;
        }
    },[dialog]);

    const handleUserQuestionSubmit=()=>{
        if(userInput.trim() !== ""){
            setDialog((prevDialog)=>[...dialog,
                {type:"user",content:userInput},
                {type:"chatbot",content:"//response//"},]);
            setUserInput("");
        }
    };
    
    if(onXButton) return <RefreshChat/>;

    return(
        <>
        {xButton? <RefreshChat/>:(
            <Wrapper>
                <TitleContainer>
                    <ImgContainer>
                    <SubImage src={ellipse3} alt="의미없는동그라미"/>
                    </ImgContainer>
                    <Title>Chatbot</Title>
                    <Btn onClick={()=>{setOnXButton(true)}}>
                        <SubImage src={x} alt="x버튼"/>
                    </Btn>
                </TitleContainer>
                <DialogContainer ref={dialContainerRef}>
                    {dialog.map((entry,index)=>(
                        <div key={index}>
                            {entry.type==="user"? (
                            <Userbox>
                                <UserQuestion>{entry.content}</UserQuestion>
                            </Userbox>
                            ):(<Responsebox>
                                <ChatBotResponse>{entry.content}</ChatBotResponse>
                                </Responsebox>
                                )}
                        </div>
                    ))}
                <Input  text="text"
                        placeholder="궁금한 내용을 입력하세요."
                        value={userInput}
                        onChange={e=>setUserInput(e.target.value)}
                        onBlur={handleUserQuestionSubmit}
                        onKeyDown={(e)=>e.key==="Enter"&& handleUserQuestionSubmit()}/>
                </DialogContainer>
            </Wrapper>
        )}
        </>

    );
}