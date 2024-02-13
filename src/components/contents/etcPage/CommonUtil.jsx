import React from "react";
import { useState, useEffect } from "react";
import Container from "./ComlistContainer";

//test용(실제 함수리스트)
const CommonList = [
  {
    id: 1,
    name: "직원별 근속일자",
  },
  {
    id: 2,
    name: "하반기 매출액 예상",
  },
  {
    id: 3,
    name: "내신등급 자동계산",
  },
  {
    id: 4,
    name: "인명구조원 시험 합격/불합격 판별",
  },
  {
    id: 5,
    name: "시험성적 석차계산",
  },
  {
    id: 6,
    name: "서울지역 최대 판매실적",
  },
  {
    id: 7,
    name: "상반기 동아리회비 납부자 확인",
  },
  {
    id: 8,
    name: "OTT 이용금액 미납부자 확인",
  },
  {
    id: 9,
    name: "의류 전체 판매액 계산",
  },
  {
    id: 10,
    name: "강좌별 개강월 비교",
  },
  {
    id: 11,
    name: "남성이고 수원 주거지역인 직원수 측정",
  },
  {
    id: 12,
    name: "휴대전화번호 마지막 4자리 추출",
  },
  {
    id: 13,
    name: "주민등록번호 앞번호 6자리 추출",
  },
];

const listSize = CommonList.length;

export default function Common() {
  const [commonList, setCommonList]=useState([]);

  useEffect(()=>{
    fetch("http://43.203.37.62:8080/etc/frequent-functions")
    .then((response)=>response.json())
    .then((data)=>{
      setCommonList(data.result.frequentFeatures)}
      )

    .catch((error)=>console.log("fetching error : ",error));

  },[])


  return <Container commonList={commonList}/>;
}
