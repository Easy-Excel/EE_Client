import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as LogoSvg } from "../assets/images/Logo.svg";

const Wrapper = styled.div`
  width: 100%;
  background-color: #f9f8f8;
  height: 90vh;
  position: relative;
  overflow: hidden;
`;

const Logo = styled(LogoSvg)`
  width: 285px;
  height: 329px;
  position: absolute;
  bottom: 37px;
  right: 36px;
`;

//background green box 공통 스타일 (BGBox first child를 기본으로 설정)
const commonBGBox = css`
  width: 200%;
  height: 36.07px;
  left: -79.61px;
  top: 1006.91px;
  position: absolute;
  transform: rotate(-30deg);
  transform-origin: 0 0;
  background: #ceebde;
`;

const BgMainBox = styled.div`
  ${commonBGBox}
  height: 197.6px;
  left: -160px;
  top: 774.78px;
  font-size: 180px;
  font-family: "Knewave", "SUIT-Regular";
  font-weight: 400;
  display: flex;
  align-items: center;
  padding-left: 300px;
`;

const BGBox = styled.div`
  ${commonBGBox}
  &:nth-child(2) {
    left: -7.61px;
    top: 1037.91px;
  }
`;
function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("useEffect 실행");
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000); //2초

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Wrapper>
      <BgMainBox>Easy Excel</BgMainBox>
      <BGBox />
      <BGBox />
      <Logo />
    </Wrapper>
  );
}

export default Splash;
