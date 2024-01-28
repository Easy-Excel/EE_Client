import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as LogoSvg } from "../assets/images/logo/Logo.svg";
import { motion } from "framer-motion";
//---animation & transition---//
//fade out
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
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
  width: 90px;
  height: 110px;
  position: absolute;
  bottom: 28px;
  right: 38px;
  animation: ${fadeOut} 1s cubic-bezier(0.99, 0, 0.93, 0.02) forwards;
`;

//background green box 공통 스타일 (BGBox first child를 기본으로 설정)
const commonBGBoxStyle = css`
  width: 150%;
  height: 36.07px;
  left: -79.61px;
  top: 900px;
  position: absolute;
  transform: rotate(-30deg);
  transform-origin: 0 0;
  background-color: #ceebde;
`;

const BgMainBox = styled.div`
  ${commonBGBoxStyle}
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

const BGBox = styled.div`
  ${commonBGBoxStyle}
  &:nth-child(2) {
    left: -7.61px;
    top: 790px;
  }
`;
function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("useEffect 실행");
    const timer = setTimeout(() => {
      navigate("/home");
    }, 1500); //1.5초

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Wrapper>
      <BgMainBox>
        <MainTitle
          initial={{ x: 0 }}
          animate={{ x: 2000 }}
          transition={{ duration: 1, ease: [0.99, 0, 0.93, 0.02] }}
          // transition={{ duration: 1, ease: [0.79, 0, 0.85, 0.23] }}
        >
          EASY EXCEL
        </MainTitle>
      </BgMainBox>
      <BGBox />
      <BGBox />
      <Logo />
    </Wrapper>
  );
}

export default Splash;
