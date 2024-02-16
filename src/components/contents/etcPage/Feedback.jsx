import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../../config";

const FBContainer = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  padding-top: 20px;
  overflow-y: auto;
  padding-right: 10px;

  /* position: relative; */

  //-----스크롤바 스타일링------//
  &::-webkit-scrollbar {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #d9d9d9;
  }
  //호버시 색상 변경
  &::-webkit-scrollbar-thumb:hover {
    background-color: #908f8f;
  }

  @media screen and (max-width: 765px) {
    padding-right: 0px;
    &::-webkit-scrollbar {
      flex-shrink: 0;
      width: 13px;
    }
  }
  @media screen and (max-width: 450px) {
    height: auto;
    &::-webkit-scrollbar {
      flex-shrink: 0;
      width: 10px;
    }
  }
`;

const Title = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 23px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 12px;
  word-break: keep-all;

  //2/15 반응형 설정
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0px 10px;

    text-align: center;
    font-size: 19px;
  }
  @media screen and (max-width: 765px) {
    font-size: 17px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const FBForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  /* height: 100%; */
  padding-top: 12px;
  padding-left: 40px;
  font-family: SUIT;
  position: relative;
  //2/15 반응형 설정
  @media screen and (max-width: 900px) {
    gap: 20px;
    padding: 0px 15px;
    padding-top: 12px;
    /* background-color: pink; */
  }

  @media screen and (max-width: 500px) {
    gap: 20px;
  }
`;

const FBLabel = styled.label`
  font-size: 20px;
  color: black;
  font-weight: 400;
  font-family: SUIT;

  //2/15 반응형 설정
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0px 10px;
    /* background-color: pink; */
    font-size: 17px;
  }
  @media screen and (max-width: 765px) {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 13px;
  }
`;

const FBInput = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px 15px;
  font-family: SUIT;

  @media screen and (max-width: 900px) {
    font-size: 14px;
    padding: 10px 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

const FBFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: SUIT;
  @media screen and (max-width: 900px) {
    gap: 10px;
  }
`;

const FBTextArea = styled.textarea`
  width: 100%;
  height: 115px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px 15px;
  font-family: SUIT;

  resize: none;

  @media screen and (max-width: 900px) {
    font-size: 14px;
    padding: 10px 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 11px;
    height: 160px;
  }
`;

const FBButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 16px;

  width: 120px;
  height: 47px;
  background-color: #107c41;
  color: white;
  border: none;

  overflow: hidden;
  cursor: pointer;

  font-family: SUIT;
  font-size: 18px; //버튼 글자를 조금 줄였습니다.(1/28)
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
  margin-left: auto;
  //특정 페이지에서 버튼위치를 절대 좌표로 쓰기 위한 스타일 추가
  /* position: absolute;
  right: 0px;
  bottom: 37px; */

  @media screen and (max-width: 900px) {
    /* height: 47px;
    font-size: 15px; */
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 12px;
    height: 35px;
    border-radius: 12px;
  }
`;

export default function Feedback({ height }) {
  //전달할 데이터 저장할 변수
  const [formData, setFormData] = useState({
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API.FEEDBACK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert(
          "정상적으로 피드백이 제출되었습니다. Easy Excel을 이용해주셔서 감사합니다"
        );
        window.location.reload();
      } else {
        alert("실패! response status : ", response.status);
      }
    } catch (error) {
      console.error("에러 : ", error);
    }
  };

  return (
    <FBContainer height={height.container}>
      <Title>Easy Excel에 대한 피드백을 남겨주세요!</Title>
      <FBForm onSubmit={handleSubmit}>
        <FBFormItem>
          <FBLabel htmlFor="email">Email</FBLabel>
          <FBInput
            id="email"
            type="email"
            name="email"
            placeholder="이메일 입력"
            required
            onChange={handleChange}
          />
        </FBFormItem>
        <FBFormItem>
          <FBLabel htmlFor="content">하고 싶은 말</FBLabel>
          <FBTextArea
            id="content"
            name="content"
            placeholder="추가 함수, 좋은점, 개선점 등"
            required
            onChange={handleChange}
          ></FBTextArea>
        </FBFormItem>
        <FBButton type="submit">보내기</FBButton>
      </FBForm>
    </FBContainer>
  );
}
