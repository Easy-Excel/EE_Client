import React from "react";
import profillimage from "../assets/images/main/profillimage.png";
import styled from "styled-components";
import dummy from "./teamdata.json";

const Teamcontainer = styled.div`
    background-color: #CEEBDE;
    justify-content: center;
    margin: 40px 0px 0px 0px;
    color: black;
    text-align: center;
    @media screen and (max-height: 690px) {
    height: 690.4px;
    };`

const Teamheader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 59px;
    top: 75px;
    background: #107C41;
    border-radius: 16px;
    width: 400px;
    height: 62px;

    font-family: 'SUIT';
    font-weight: 800;
    font-size: 47px;
    line-height: 62px;
    text-align: center;
    color: #FFFFFF;
`

const Teammain = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%; //백분율로 조장해야 화면 크기에 따라 조절됨
    height: 63vh;
    text-align: center;
    padding: 20px ;

        
`
const Teamposition = styled.div`
  justify-content: center;
  text-align: center;
   `

const Plan = styled.div`
    font-family: 'SUIT';
    font-weight: bold;
    font-size: 20px;
    line-height: 37px;
    text-align: center;
    margin-top: 10px;

    color: #000000;`

const Memberprofil = styled.div`
  /* 멤버 설명 카드 */
    display: flex;
    left: 499px;
    justify-content: center;
    text-align: center;
    margin: 10px 10px 10px 10px;`
    
    

const Memberimage = styled.div`
   width: 100px;
   height: 100px;
   text-align: center;
   vertical-align: middle;
   font-size: 20px;
   padding-top: 40px;
   margin: 0px 10px;
   background: #E7E6E6;`

const Membername = styled.div`
    font-family: 'SUIT';
    font-style: normal;
    font-size: 15px;
    line-height: 40px;
    text-align: center;
    color: #000000;
`  

export default function OurTeam() {

  return (
    <Teamcontainer>
    <Teamheader>Our Team</Teamheader>
    <Teammain>
      <Teamposition>
        <Memberprofil>
          {dummy.members1.map(member1=> (
            <div>
              <Plan>{member1.position}</Plan>
              <Memberimage>
                {member1.image}
              </Memberimage>
              <Membername>
                {member1.name}
              </Membername>
            </div>
          ))}
        </Memberprofil>
      </Teamposition>
      <Teamposition>
        <Plan>Front-end</Plan>
        <Memberprofil>
          {dummy.members2.map(member2=> (
            <div>
              <Memberimage>
                {member2.image}
              </Memberimage>
              <Membername>
                {member2.name}
              </Membername>
            </div>
          ))}
        </Memberprofil>
      </Teamposition>
      <Teamposition>
        <Plan>Back-end</Plan>
        <Memberprofil>
          {dummy.members3.map(member3=> (
            <div>
              <Memberimage>
                {member3.image}
              </Memberimage>
              <Membername>
                {member3.name}
              </Membername>
            </div>
          ))}
        </Memberprofil>
      </Teamposition>
    </Teammain>
  </Teamcontainer>
    
  );
};


