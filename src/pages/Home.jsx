import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo/Logo.svg";

const LogoImg = styled.img`
  width: 33vh;
  /* width: 33vh; */
  margin: auto;
  background-size: cover;
  /* position: absolute;
  top: 76px; */

  @media screen and (max-height: 680px) {
    width: 224px;
  }
  @media screen and (max-width: 1100px) {
    width: 220px;
  }
  @media screen and (max-width: 700px) {
    width: 180px;
  }

  @media screen and (max-width: 450px) {
    height: 63vh;
    width: 33vmin;
  }
`;

export default function Home() {
  return <LogoImg src={Logo} />;
}
