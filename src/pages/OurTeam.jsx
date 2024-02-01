import React from "react";
import profillimage from "../assets/images/main/profillimage.png";
import styled from "styled-components";
import dummy from "./teamdata.json";

const Teamcontainer = styled.div`
    box-sizing: border-box;
    min-width: 600px;
    max-width: 100%;
    height: 1200px;
    background-color: #CEEBDE;
    padding: 20px 10px;
    margin: 150px 0px;
    color: black;
    text-align: center;
    border-radius: 10px;`

const Teamheader = styled.div`
           /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    position: absolute;
    width: 488px;
    height: 82px;
    left: 59px;
    top: 137px;

    background: #107C41;
    border-radius: 16px;



    /* title */

    width: 400px;
    height: 62px;

    font-family: 'SUIT';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 62px;
    text-align: center;

    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;`

const Teammain = styled.div`
    position: absolute;
    width: 959px;
    height: 960px;
    left: 7%;
    right: 5%;
    top: 0px;
`
const Teamposition1 = styled.div`
    font-family: 'SUIT';
    /* Group 70 */

    position: absolute;
    width: 959px;
    height: 960px;
    justify-content: center;
    align-items: center;
    top: 10px;

`
const Teamposition2 = styled.div`
    font-family: 'SUIT';
    /* Group 70 */

    position: absolute;
    width: 959px;
    height: 960px;
    justify-content: center;
    align-items: center;
    top: 300px;

`
const Teamposition3 = styled.div`
    font-family: 'SUIT';
    /* Group 70 */

    position: absolute;
    width: 959px;
    height: 960px;
    justify-content: center;
    align-items: center;
    top: 600px;

`
const Plan = styled.div`
    position: absolute;
    
    left: 556px;
    top: 272px;
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #000000;`
const Memberprofil1 = styled.div`
  /* 멤버 설명 카드 */
    position: absolute;
    width: 173px;
    height: 218px;
    left: 499px;
    top: 334px;`

const Memberimage1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9.08094px;
    gap: 9.08px;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 19.72%;
    background: #E7E6E6;`

const Membername1 = styled.div`
    position: absolute;
    left: 8.5%;
    right: 12.54%;
    top: 86.24%;
    bottom: -0.92%;

    font-family: 'SUIT';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    text-align: center;

    color: #000000;
`  

export default function OurTeam() {

  return (
    <Teamcontainer>
    <Teamheader>Our Team</Teamheader>
    <Teammain>
      <Teamposition1>
        <Plan>Plan</Plan>
        <Memberprofil1>
          {dummy.members1.map(member1=> (
            <div>
              <Memberimage1>
                {member1.image}
              </Memberimage1>
              <Membername1>
                {member1.name}
              </Membername1>
            </div>
          ))}
        </Memberprofil1>
      </Teamposition1>
      <Teamposition2>
        <Plan>Front-end</Plan>
        <Memberprofil1>
          {dummy.members2.map(member2=> (
            <div>
              <Memberimage1>
                {member2.image}
              </Memberimage1>
              <Membername1>
                {member2.name}
              </Membername1>
            </div>
          ))}
        </Memberprofil1>
      </Teamposition2>
      <Teamposition3>
        <Plan>Back-end</Plan>
        <Memberprofil1>
          {dummy.members3.map(member3=> (
            <div>
              <Memberimage1>
                {member3.image}
              </Memberimage1>
              <Membername1>
                {member3.name}
              </Membername1>
            </div>
          ))}
        </Memberprofil1>
      </Teamposition3>
    </Teammain>
  </Teamcontainer>
    
  );
};


