import React from "react";
import profillimage from "../assets/images/main/profillimage.png";
import styled from "styled-components";

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
    left: 232px;
    top: 50px;

`
const Plan = styled.div`
    position: absolute;
    width: 60px;
    height: 37px;
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
const Design = styled.div`
    position: absolute;
    width: 94px;
    height: 37px;
    left: 785px;
    top: 272px;
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #000000;`
const Memberprofil2 = styled.div`
    position: absolute;
    width: 173px;
    height: 218px;
    left: 749px;
    top: 334px;`

const Memberimage2 = styled.div`
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
const Membername2 = styled.div`
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
    color: #000000;`

const Teamposition2 = styled.div`
    font-family: 'SUIT';
    /* Group 70 */

    position: absolute;
    width: 959px;
    height: 960px;
    left: 232px;
    top: 100px;

`
const Frontend = styled.div`
        position: absolute;
        width: 141px;
        height: 37px;
        left: 650px;
        top: 590px;
        font-family: 'SUIT';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 37px;
        text-align: center;
        color: #000000;
   `
const Memberprofil3 = styled.div`
    /* 멤버 설명 카드 */

    position: absolute;
    width: 173px;
    height: 218px;
    left: 232px;
    top: 669px;`

const Memberimage3 = styled.div`
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


const Membername3 = styled.div`
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

    color: #000000;`

const Memberprofil4 = styled.div`
    position: absolute;
    width: 173px;
    height: 218px;
    left: 499px;
    top: 669px;`

const Memberimage4 = styled.div`
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

    background: #E7E6E6;
`
const Membername4 = styled.div`
    /* 이름/학교 */

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

    color: #000000;`
const Memberprofil5 = styled.div`

    position: absolute;
    width: 173px;
    height: 218px;
    left: 749px;
    top: 669px;
`
const Memberimage5 = styled.div`
    
    /* Frame 2 */
    
    /* Auto layout */
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
const Membername5 = styled.div`
   /* 이름/학교 */
    
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
const Memberprofil6 = styled.div`
   /* 멤버 설명 카드 */

    position: absolute;
    width: 173px;
    height: 218px;
    left: 1016px;
    top: 669px;
`
const Memberimage6 = styled.div`
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

    background: #E7E6E6;
`
const Membername6 = styled.div`
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
const Teamposition3 = styled.div`
   font-family: 'SUIT';
    /* Group 70 */

    position: absolute;
    width: 959px;
    height: 960px;
    left: 232px;
    top: 150px;
`
const Backend = styled.div`
    position: absolute;
    width: 136px;
    height: 37px;
    top: 935px;
    left: 650px;
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #000000;`


const Memberprofil7 = styled.div`
    position: absolute;
    width: 173px;
    height: 218px;
    left: 233px;
    top: 1014px;`
const Memberimage7 = styled.div`
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
const Membername7 = styled.div`
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
const Memberprofil8 = styled.div`
    position: absolute;
    width: 173px;
    height: 218px;
    left: 499px;
    top: 1014px;`
const Memberimage8 = styled.div`   
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
    background: #E7E6E6;
`
  
 
const Membername8 = styled.div`
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
const Memberprofil9 = styled.div`
    position: absolute;
    width: 173px;
    height: 218px;
    left: 749px;
    top: 1014px;`
const Memberimage9 = styled.div`
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

    background: #E7E6E6;

`
const Membername9 = styled.div`
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

    color: #000000;`
const Memberprofil10 = styled.div`
    position: absolute;
    width: 173px;
    height: 218px;
    left: 1018px;
    top: 1014px;
`
const Memberimage10 = styled.div`
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

    background: #E7E6E6;
`
const Membername10 = styled.div`
  position: absolute;
    left: 0%;
    right: 0.54%;
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
            <Memberimage1>
              <img src={profillimage} alt="이미지1" />
            </Memberimage1>
            <Membername1>이름/학교1</Membername1>
          </Memberprofil1>
          <Design>Design</Design>
          <Memberprofil2>
            <Memberimage2>
              <img src={profillimage} alt="이미지2" />
            </Memberimage2>
            <Membername2>이름/학교2</Membername2>
          </Memberprofil2>
        </Teamposition1>
        <Teamposition2>
          <Frontend>Front-end</Frontend>
          <Memberprofil3>
            <Memberimage3>
              <img src={profillimage} alt="이미지3" />
            </Memberimage3>
            <Membername3>이름/학교3</Membername3>
          </Memberprofil3>
          <Memberprofil4>
            <Memberimage4>
              <img src={profillimage} alt="이미지4" />
            </Memberimage4>
            <Membername4>이름/학교4</Membername4>
          </Memberprofil4>
          <Memberprofil5>
            <Memberimage5>
              <img src={profillimage} alt="이미지5" />
            </Memberimage5>
            <Membername5>이름/학교5</Membername5>
          </Memberprofil5>
          <Memberprofil6>
            <Memberimage6>
              <img src={profillimage} alt="이미지6" />
            </Memberimage6>
            <Membername6>이름/학교6</Membername6>
          </Memberprofil6>
        </Teamposition2>
        <Teamposition3>
          <Backend>Back-end</Backend>
          <Memberprofil7>
            <Memberimage7>
              <img src={profillimage} alt="이미지7" />
            </Memberimage7>
            <Membername7>이름/학교7</Membername7>
          </Memberprofil7>
          <Memberprofil8>
            <Memberimage8>
              <img src={profillimage} alt="이미지8" />
            </Memberimage8>
            <Membername8>이름/학교8</Membername8>
          </Memberprofil8>
          <Memberprofil9>
            <Memberimage9>
              <img src={profillimage} alt="이미지9" />
            </Memberimage9>
            <Membername9>이름/학교9</Membername9>
          </Memberprofil9>
          <Memberprofil10>
            <Memberimage10>
              <img src={profillimage} alt="이미지10" />
            </Memberimage10>
            <Membername9>이름/학교10</Membername9>
          </Memberprofil10>
        </Teamposition3>
      </Teammain>
    </Teamcontainer>
  );
}
