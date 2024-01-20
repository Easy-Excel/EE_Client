import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as LogoSvg } from "../assets/images/Logo.svg";
import { motion } from "framer-motion";
//---animation & transition---//
//fade out
const fadeOut = keyframes`
  from {
    opacity: 1;
    filter: blur(0);
  }
  to {
    opacity: 0;
    filter: blur(10px);
  }
`;
//---component---//
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f8f8;
  position: relative;
  overflow: hidden;
`;

const Logo = styled(LogoSvg)`
  width: 285px;
  height: 329px;
  position: absolute;
  bottom: 37px;
  right: 36px;
  animation: ${fadeOut} 1s ease-in-out;
`;

//background green box 공통 스타일 (BGBox first child를 기본으로 설정)
const commonBGBox = css`
  width: 200%;
  height: 36.07px;
  left: -79.61px;
  top: 900px;
  position: absolute;
  transform: rotate(-30deg);
  transform-origin: 0 0;
  background: #ceebde;
`;

const BgMainBox = styled.div`
  ${commonBGBox}
  height: 197.6px;
  left: -160px;
  top: 600px;
  padding-left: 300px;
  padding-top: 10px; //글자 세로 방향 중앙 정렬을 위해 조정(font 특성상 align-item center 효과 없음)
`;
const MainTitle = styled(motion.div)`
  font-size: 180px;
  font-family: "Knewave", "SUIT-Regular";
  font-weight: 400;
  color: rgba(16, 124, 65, 0.79);
`;

const BGBox = styled(motion.div)`
  ${commonBGBox}
  &:nth-child(2) {
    left: -7.61px;
    top: 790px;
  }
`;

function Splash() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log("useEffect 실행");
  //   const timer = setTimeout(() => {
  //     navigate("/home");
  //   }, 2000); //2초

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <Wrapper>
      <BgMainBox>
        <MainTitle
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 0, x: -1000 }}
          transition={{ duration: 1 }}
        >
          EASY EXCEL
        </MainTitle>
      </BgMainBox>
      <BGBox
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <BGBox
      // initial={{ opacity: 1, x: 0 }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ duration: 1 }}
      />
      <Logo
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </Wrapper>
  );
}

export default Splash;
