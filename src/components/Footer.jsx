import React from "react";
import styled from "styled-components";

const Foot =styled.footer`
  position: absolute;
  color: #107c41;
  font-weight: 400;
  font-size: 10px;
  bottom: 3px;
`
export default function Footer() {
  return (
    <Foot>Copyright © Easy Excel</Foot>
  );
}
