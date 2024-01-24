import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  background-color: tomato;
  position: absolute;
  color: #107c41;
  font-weight: 400;
  font-size: 10px;
  left: 50%;
`;

export default function Footer() {
  return <Foot>Copyright © Easy Excel</Foot>;
}
