import React from "react";
import Container from "./FuncListContainer";

//test용 임시배열 (개수가 많은경우)
const cellList = Array.from({ length: 20 }, (_, index) => `cell${index + 1}`);

export default function ItoP() {
  return <Container funcList={cellList} />;
}
