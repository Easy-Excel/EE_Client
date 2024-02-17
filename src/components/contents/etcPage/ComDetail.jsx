import React, { useEffect, useState } from "react";
import CDetailContainer from "./ComDetailComponents";
import styled from "styled-components";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import useComponentSize from "../../../hooks/UseComponentSzie";
import Button from "../../Button";
import BtnWrapper from "../../BtnWrapper";

import { API } from "../../../config";

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default function ComDetail() {
  const navigate = useNavigate();

  //네비게이트 훅을 통해 넘겨받은 정보 (api 연동시 사용)
  //함수 id를 받음 -> id를 가지고 서버에서 해당 함수에 대한 데이터 가져오기
  const { state } = useLocation();
  const commonId = state.commonId;

  //서버에서 함수 데이터를 가져와 저장 / 현재는 임시로 테스트 데이터 저장
  const [funcData, setFuncData] = useState(null);

  //데이터 가져오기
  useEffect(() => {
    console.log(`${commonId}로 데이터 가져오기`);
    fetch(`${API.FREQUENT}/${commonId}`)
      .then((response) => response.json())
      .then((data) => {
        // 가져온 데이터를 상태에 설정
        setFuncData(data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [commonId]);

  const [activeContent, setActiveContent] = useState("CommonUtil");

  const [buttons, setButtons] = useState([
    {
      id: "CommonUtil",
      width: "22%",
      height: "45px",
      backgroundColor: "#107c41",
      fontColor: "white",
      border: "none",
      text: "자주 쓰이는 기능",
      content: "CommonUtil",
    },
    {
      id: "Feedback",
      width: "22%",
      height: "45px",
      backgroundColor: "white",
      fontColor: "black",
      border: "1px solid black",
      text: "피드백",
      content: "Feedback",
    },
  ]); //버튼들을 담을 배열

  const handleButtonClick = (content) => {
    navigate("/home/etc", { state: { content } });
  };

  //Container 높이 계산해서 자식에게 props로 전달
  const [componentRef, size] = useComponentSize();
  const renderHeight = {
    mainBox: size.height - (45 + 26 + 17),
    container: size.height - (45 + 26 + 17) - 32,
  };

  return (
    <StyledBox
      ref={componentRef} // ref 속성 추가 (컨텐츠 크기를 가져오기 위함)
    >
      <BtnWrapper gap={"2.8vw"}>
        {buttons.map((button) => (
          <Button
            key={button.id}
            width={button.width}
            height={button.height}
            backgroundColor={button.id === activeContent ? "#107c41" : "white"}
            fontColor={button.id === activeContent ? "white" : "black"}
            border={button.id === activeContent ? "none" : "1px solid black"}
            text={button.text}
            onButtonClick={() => handleButtonClick(button.content)}
          ></Button>
        ))}
      </BtnWrapper>
      <CDetailContainer height={renderHeight.container} funData={funcData} />
    </StyledBox>
  );
}
