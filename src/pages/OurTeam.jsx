import React from "react";
import profillimage from "../assets/images/main/profillimage.png";
import styled from "styled-components";
import dummy from "./teamdata.json";

const Teamcontainer = styled.div`
  background-color: #f9f8f8;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: black;
  height: 93vh;
  text-align: center;
  @media screen and (max-height: 680px) {
    height: 660.4px;
  }
`;

const Teamheader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 32px;
  left: 59px;

  background: #107c41;
  border-radius: 16px;
  width: 400px;
  height: 62px;

  font-family: "SUIT";
  font-weight: 800;
  font-size: 47px;
  line-height: 62px;
  text-align: center;
  color: #ffffff;
`;
const Teammain = styled.div`
  background-color: #ceebde;
  display: flex; //Teammain기준으로 가운데 정렬(진주)
  align-items: center;
  justify-content: center;
  width: 100%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 100%; //푸터부분이 너무 커서 main부분을 늘렸습니다(진주)
  text-align: center;

  //padding: 58px ;
  // margin-bottom: auto;
`;
const TotalMember = styled.div`
  //한번에 조정하려고 컴포넌트로 한번 감쌌습니다(진주)
`;
const Teamposition = styled.div`
  justify-content: center;
  text-align: center;
`;
const Plan = styled.div`
  font-family: "SUIT";
  font-weight: bold;
  font-size: 20px;
  line-height: 37px;
  text-align: center;
  margin-bottom: 10px;

  color: #000000;
`;

const Memberprofil = styled.div`
  /* 멤버 설명 카드 */
  display: flex;
  /* left: 499px; */ //필요없는 부분
  justify-content: center;
  text-align: center;
  margin: 15px 0px;
  gap: 60px;
  /* background-color: pink; */
`;

const Memberimage = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  padding-top: 40px;
  margin: 0px 10px;
  background: #e7e6e6;
`;

const Membername = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  color: #000000;
`;

export default function OurTeam() {
  return (
    <Teamcontainer className="teamcontainer">
      <Teamheader>Our Team</Teamheader>
      <Teammain className="teammain">
        <TotalMember>
          <Teamposition>
            <Memberprofil>
              {dummy.members1.map((member1) => (
                <div>
                  <Plan>{member1.position}</Plan>
                  <Memberimage>{member1.image}</Memberimage>
                  <Membername>{member1.name}</Membername>
                </div>
              ))}
            </Memberprofil>
          </Teamposition>
          <Teamposition>
            <Plan>Front-end</Plan>
            <Memberprofil>
              {dummy.members2.map((member2) => (
                <div>
                  <Memberimage>{member2.image}</Memberimage>
                  <Membername>{member2.name}</Membername>
                </div>
              ))}
            </Memberprofil>
          </Teamposition>
          <Teamposition>
            <Plan>Back-end</Plan>
            <Memberprofil>
              {dummy.members3.map((member3) => (
                <div>
                  <Memberimage>{member3.image}</Memberimage>
                  <Membername>{member3.name}</Membername>
                </div>
              ))}
            </Memberprofil>
          </Teamposition>
        </TotalMember>
      </Teammain>
    </Teamcontainer>
  );
}
