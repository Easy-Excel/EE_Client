import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/images/logo/Logo.svg";
import styled from "styled-components";

const Visionwrap = styled.div``

const Visioncontainer = styled.div``

const Visionmain = styled.div`
    box-sizing: border-box;
    min-width: 600px;
    max-width: 100%;
    height: 900px;
    background-color: #CEEBDE;
    padding: 20px 10px;
    margin: 150px 0px;
    color: black;
    text-align: center;
    border-radius: 10px;
`;

const Visionheader = styled.div`
           /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    position: absolute;
    width: 488px;
    height: 82px;
    left: 59px;
    top: 137px;

    background: #107C41;
    border-radius: 16px;



    /* Our Vision */

    width: 400px;
    height: 62px;

    font-family: 'SUIT';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 62px;
    text-align: center;

    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;


const Visionlogo = styled.div`
    /* Logo */
    
    position: absolute;
    width: 377px;
    height: 435px;
    left: 10%;
    top: 309px;

`;


const Visionlogo2 = styled.div`
   /* EASY EXCEL */

    position: absolute;
    left: 10%;
    top: 741px;

    font-family: 'Knewave';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 124px;

    color: #107C41;

;`

const Visioncontext = styled.div`
    position: absolute;
    width: 809px;
    height: 450px;
    left: 40%;
    top: 309px;

    font-family: 'SUIT';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;

    color: #000000;


`;


export default function OurVision() {
  return (
    <Visioncontainer>
      <Visionwrap>
        <Visionheader>Our Vision</Visionheader>
        <Visionmain>
          <Visionlogo>
            <img src={logo} alt="로고" />
          </Visionlogo>
          <Visionlogo2>EASY EXCEL</Visionlogo2>
          <Visioncontext>
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
          </Visioncontext>
        </Visionmain>
      </Visionwrap>
    </Visioncontainer>
  );
}
