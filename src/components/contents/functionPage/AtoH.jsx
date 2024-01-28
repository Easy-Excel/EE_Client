import React from "react";
import Container from "./FuncListContainer";

//test용(실제 함수리스트)
const funcList = [
  "ABS",
  "AVERAGE",
  "CHOOSE",
  "COLUM",
  "CONCAT",
  "CONCATENATE",
  "COUNT",
  "COUNTA",
  "COUNTBLANK",
  "COUNTIF",
  "DCOUNTA",
  "FIND",
  "HLOOKUP",
];

export default function AtoH() {
  // console.log(dividedArrays);
  return <Container funcList={funcList} />;
}
