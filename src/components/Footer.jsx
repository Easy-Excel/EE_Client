import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  height: 165px;
  width: 100px;
`;

export default function Footer() {
  return (
    <Foot>
      <div>This is footer</div>
    </Foot>
  );
}
