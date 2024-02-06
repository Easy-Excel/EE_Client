import React from "react";
import styled from "styled-components";

const Feedbackmain = styled.div`
`
    
const Feedbackh = styled.div`
`

const Email = styled.div`
 `
      
const Emailbox = styled.div`
    position: absolute;
    //position: fixed;
    right:14%;
    bottom: 78%;
    width:300px;
    height:38px;

`;
const Opinion = styled.div`
`     
const Opinionbox = styled.div`
` 
export default function Feedback() {
  return (
    <Feedbackmain>
      <Feedbackh>Easy Excel에 대한 피드백을 남겨주세요!</Feedbackh>
      <Email>Email</Email>
      <Emailbox></Emailbox>
      <Opinion>하고 싶은 말</Opinion>
      <Opinionbox></Opinionbox>
    </Feedbackmain>
  );
}