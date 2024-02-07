import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Foot = styled.footer`
  height: 103px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 211px;
  /* background-color: white; */
`;



const Items = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 20px;
`;

const Item = styled.li`
  justify-content: center;
  flex-direction: column;
  color: black;
  font-size: 12px;
  font-family: SUIT;
  font-weight: 400;
  word-wrap: break-word;
`;

const CopyRight = styled.div`
  // Copyright © Easy Excel
  color: #b8b8b8;
  font-size: 9px;
  font-family: SUIT;
  font-weight: 400;
  word-wrap: break-word;
`;

export default function Footer() {
  return (
    <Foot>
      <Items>
        <Item>
          <Link to="/ourVision">Our Vision</Link>
        </Item>
        <Item>
          <Link to="/ourTeam">Our Team</Link>
        </Item>
        <Item>
          <Link to="/contact">Contact</Link>
        </Item>
      </Items>
      <CopyRight>Copyright © Easy Excel</CopyRight>
    </Foot>
  );
}
