import React from "react";
import profillimage from "../assets/images/main/profillimage.png";
import git from "../assets/images/git.png";
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
  @media screen and (max-height: 815px) {
    height: auto;
  }
  @media screen and (max-width: 737px) {
    height: auto;
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
  font-size: 40px;
  line-height: 62px;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 605px) {
    left: 0px;
    font-size: 35px;
    margin: 0px auto;
    width: 70%;
    min-width: 300px;
  }
`;
const Teammain = styled.div`
  background-color: #ceebde;
  width: 100%; //백분율로 조장해야 화면 크기에 따라 조절됨
  height: 100%; //푸터부분이 너무 커서 main부분을 늘렸습니다(진주)
  text-align: center;
  padding-bottom: 10px;

  /* padding: 89px 20px 20px 48px; */

  //padding: 58px ;
  // margin-bottom: auto;
  @media screen and (max-width: 605px) {
    padding-bottom: 10px;
  }
`;
const TotalMember = styled.div`
  display: flex; //Teammain기준으로 가운데 정렬(진주)
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8vh 20px 20px 5vh;
  gap: 10px;
  height: 100%;
  @media screen and (max-width: 605px) {
    gap: 20px;
  }

  //한번에 조정하려고 컴포넌트로 한번 감쌌습니다(진주)
`;
const Teamposition = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  gap: 60px;
  flex-wrap: wrap;
  @media screen and (max-width: 737px) {
    gap: 20px;
  }
  @media screen and (max-width: 605px) {
    width: 300px;
  }
`;

const Memberimage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0px 10px;
  background: #e7e6e6;
  @media screen and (max-width: 605px) {
    width: 90px;
    height: 90px;
  }
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
                  <Memberimage
                    // src={require(member1.imagePath).default}
                    src={git}
                    alt="이미지"
                  />
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
                  <Memberimage
                    // src={require(member2.imagePath).default}
                    src={git}
                    alt="이미지"
                  />
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
                  <Memberimage
                    // src={require(member3.imagePath).default}
                    src={git}
                    alt="이미지"
                  />
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
