import React, { useState ,useRef, useEffect} from "react";
import styled from "styled-components";


const Wrapper=styled.div`
    //position: absolute;
    margin-left: 90%;
    margin-top:-23%;
`;
const TitleContainer=styled.div`
    width: 324px;
    display: flex;
    padding: 13px 14px;
    flex-direction: column;
    align-items: flex-start;
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

const DialogContainer=styled.div`

    width: 324px;
    height: 324px;
    //max-height: 324px; /* Added max-height */
    background: var(--Gray-100, #F6F5F5);
    //background: #e7e7a9;
    position: relative;
    min-height: 200px;
    overflow-y: scroll
`;

const Userbox=styled.div`
    display: flex;
    padding: 10px;
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
    width: 324px;
    height: 46px;
    padding: 10px 10px 10px 26px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    bottom: 0px;
    //background: blue;
 `;

export default function ChatBot(){
    const [userInput,setUserInput]=useState("");
    const [dialog,setDialog]=useState([]);
    const dialContainerRef=useRef(null);
    useEffect(()=>{
        console.log("useEffect is running");
        if(dialContainerRef.current) {
            console.log(dialContainerRef.current.scrollHeight);
            //dialContainerRef.current.scrollTop=dialContainerRef.current.scrollHeight;
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

    return(
        <Wrapper>
            <TitleContainer>
                <Title>Chatbot</Title>
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
    );
}