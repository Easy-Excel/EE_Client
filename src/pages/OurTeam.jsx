import React from "react";
export default function OurTeam() {
  return (
    <div className="team-container">
      <div className="team-wrap">
        <div className="team-header">Our Team</div>
        <div className="team-main">
          <div className="team-position1">
            plan Design
            <div className="photo">
              <img src="logo.svg" alt="로고" />
              <img src="logo.svg" alt="로고" />
            </div>
            이름/학교 이름/학교
          </div>
          <div className="team-position2">
            Front-end
            <div className="photo">
              <img src="logo.svg" alt="로고" />
              <img src="logo.svg" alt="로고" />
              <img src="logo.svg" alt="로고" />
              <img src="logo.svg" alt="로고" />
            </div>
            이름/학교 이름/학교 이름/학교 이름/학교
          </div>
          <div className="team-position2">
            Back-end
            <div className="photo">
              <img src="../assets/logo.svg" alt="로고" />
              <img src="logo.svg" alt="로고" />
              <img src="logo.svg" alt="로고" />
              <img src="logo.svg" alt="로고" />
            </div>
            이름/학교 이름/학교 이름/학교 이름/학교
          </div>
        </div>
      </div>
    </div>
  );
}
