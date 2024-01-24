import React from "react";
import profillimage from "../assets/images/main/profillimage.png";

export default function OurTeam() {
  return (
    <div className="team-container">
      <div className="team-header">Our Team</div>
      <div className="team-main">
        <div className="team-position1">
          <div className="plan">Plan</div>
          <div className="memberprofil1">
            <div className="memberimage1">
              <img src={profillimage} alt="이미지1" />
            </div>
            <div className="membername1">이름/학교1</div>
          </div>
          <div className="design">Design</div>
          <div className="memberprofil2">
            <div className="memberimage2">
              <img src={profillimage} alt="이미지2" />
            </div>
            <div className="membername2">이름/학교2</div>
          </div>
        </div>
        <div className="team-position3">
          <div className="front-end">Front-end</div>
          <div className="memberprofil3">
            <div className="memberimage3">
              <img src={profillimage} alt="이미지3" />
            </div>
            <div className="membername3">이름/학교3</div>
          </div>
          <div className="memberprofil4">
            <div className="memberimage4">
              <img src={profillimage} alt="이미지4" />
            </div>
            <div className="membername4">이름/학교4</div>
          </div>
          <div className="memberprofil5">
            <div className="memberimage5">
              <img src={profillimage} alt="이미지5" />
            </div>
            <div className="membername5">이름/학교5</div>
          </div>
          <div className="memberprofil6">
            <div className="memberimage6">
              <img src={profillimage} alt="이미지6" />
            </div>
            <div className="membername6">이름/학교6</div>
          </div>
        </div>
        <div className="team-position3">
          <div className="back-end">Back-end</div>
          <div className="memberprofil7">
            <div className="memberimage7">
              <img src={profillimage} alt="이미지7" />
            </div>
            <div className="membername7">이름/학교7</div>
          </div>
          <div className="memberprofil8">
            <div className="memberimage8">
              <img src={profillimage} alt="이미지8" />
            </div>
            <div className="membername8">이름/학교8</div>
          </div>
          <div className="memberprofil9">
            <div className="memberimage9">
              <img src={profillimage} alt="이미지9" />
            </div>
            <div className="membername9">이름/학교9</div>
          </div>
          <div className="memberprofil10">
            <div className="memberimage10">
              <img src={profillimage} alt="이미지10" />
            </div>
            <div className="membername9">이름/학교10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
