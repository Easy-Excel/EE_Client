import React from "react";
import Container from "./FuncListContainer";

const funcList = ["QUOTIENT", "RANK.EQ", "REPLACE", "REPT", "등..."];

export default function QtoZ() {
  return <Container funcList={funcList} />;
}
