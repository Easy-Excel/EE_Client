import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../assets/images/logo/Logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideChatBot } from "../redux/chatBotReducer";
//import Finder from "./Finder";

//Header
const Head = styled.header`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  height: 65px;
  color: #3a3a3a;
  box-sizing: border-box;
  z-index: 500; //우선 순위 가장 높게
`;

//Column (Layout)
const Col = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: auto;
    margin-left: 120px;
  }
  &:nth-child(2) {
    margin-right: 110px;
    margin-left: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

//Logo+Title
const Title = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 18px;
  font-weight: 800;
  flex-direction: row;
`;

//Logo
const Logo = styled(LogoSvg)`
  margin-right: 17px;
  width: 32px;
  height: 37px;
`;

//Header Navigation
const Items = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const Item = styled.li`
  margin-left: 40px;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  &:hover {
    color: #107c41;
  }
  &:hover {
    cursor: pointer;
  }
`;

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let nextPage = "home";

  return (
    <Head>
      <Col>
        <Link to="/home">
          <Title>
            <Logo />
            Easy Excel
          </Title>
        </Link>
      </Col>
      <Col>
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
      </Col>
    </Head>
  );
}

export default Header;
