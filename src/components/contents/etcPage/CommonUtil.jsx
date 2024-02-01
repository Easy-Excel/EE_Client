import React from "react";
import Container from "./CommonListContainer";

//test용(실제 함수리스트)
const funcList = [
  "직원별 근속일자",
  "하반기 매출액 예상",
  "내신등급 자동계산",
  "인명구조원 시험 합격/불합격 판별",
  "시험성적 석차계산",
  "서울지역 최대 판매 실적",
  "상반기 동아리회비 납부자 확인",
  "OTT 이용금액 미납부자 확인",
  "의류 전체 판매액 계산",
  "강좌별 개강월 비교",
  "남성이고 수원 주거지역인 직원수 측정",
  "휴대전화번호 마지막 4자리 추출",
  "주민등록번호 앞번호 6자리 추출",
];


export default function CommonUtil() {
  return <Container funcList={funcList} />;
}
