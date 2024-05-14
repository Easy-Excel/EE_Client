import React, { useState,useRef, useEffect } from 'react';
import styled from 'styled-components';
import magfinder from "../assets/images/search.png";
import { useNavigate } from "react-router-dom";
import { UseDispatch } from "react-redux";
import { API } from "../config";

const FinderWrapper = styled.div`
  position: fixed;
  right: 22px;
  top: 15px;
`;

const FinderImage = styled.img`
  width:25px;
  height:25px;
  margin :10px;
  cursor: pointer;

`;


//웹과 거의 동일한 부분. 웹의 Container_ = FinderContent
const FinderContent = styled.div`
`


function FinderMobile() {
  return (
    <FinderWrapper>
      <FinderImage src={require("../assets/images/search.png")} alt="Search Image" />
      <FinderContent>
      </FinderContent>
    </FinderWrapper>
  );
}

export default FinderMobile;
