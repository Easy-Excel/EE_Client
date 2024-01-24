import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/images/logo/Logo.svg";

export default function OurVision() {
  return (
    <div className="vision-container">
      <div className="vision-wrap">
        <div className="vision-header">Our Vision</div>
        <div className="vision-main">
          <div className="vision-logo">
            <img src={logo} alt="로고" />
          </div>
          <div className="vision-logo2">EASY EXCEL</div>
          <div className="vision-context">
            Lorem ipsum dolor sit amet consectetur. Luctus nunc porttitor
            interdum vulputate tellus at. Felis nibh nibh id ultricies
            adipiscing sed pretium pulvinar. Aliquam neque aliquet netus
            suscipit. Scelerisque a magnis semper scelerisque condimentum.
            Phasellus et vitae accumsan feugiat facilisi posuere consectetur.
            Sit viverra augue ullamcorper viverra varius vestibulum eu dictum
            dictum. Urna tincidunt posuere neque purus tristique egestas auctor
            id. Mauris orci dui quisque dictumst diam venenatis ultricies.
            Luctus nunc porttitor interdum vulputate tellus at. Felis nibh nibh
            id ultricies adipiscing sed pretium pulvinar. Aliquam neque aliquet
            netus suscipit. Scelerisque a magnis semper scelerisque condimentum.
            Phasellus et vitae accumsan feugiat facilisi posuere consectetur.
            Sit viverra augue ullamcorper viverra varius vestibulum eu dictum
            dictum. Urna tincidunt posuere neque purus tristique egestas auctor
            id. Mauris orci dui quisque dictumst diam venenatis ultricies.
          </div>
        </div>
      </div>
    </div>
  );
}
