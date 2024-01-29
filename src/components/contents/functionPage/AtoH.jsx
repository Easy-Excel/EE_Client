import React from "react";
import Container from "./FuncListContainer";

//test용(실제 함수리스트)
const funcList = [
  {
    functionId: 1,
    name: "AVERAGE",
  },
  {
    functionId: 2,
    name: "CHOOSE",
  },
  {
    functionId: 3,
    name: "COLUMN",
  },
  {
    functionId: 4,
    name: "CONCAT",
  },
  {
    functionId: 5,
    name: "COUNT",
  },
  {
    functionId: 6,
    name: "COUNTA",
  },
  {
    functionId: 7,
    name: "COUNTBLANK",
  },
  {
    functionId: 8,
    name: "COUNTIF",
  },
  {
    functionId: 9,
    name: "DAVERAGE",
  },
  {
    functionId: 10,
    name: "DAY",
  },
  {
    functionId: 11,
    name: "DCOUNTA",
  },
  {
    functionId: 12,
    name: "EVEN",
  },
  {
    functionId: 13,
    name: "FIND",
  },
  {
    functionId: 14,
    name: "FREQUENCY",
  },
  {
    functionId: 15,
    name: "HLOOKUP",
  },
];

const listSize = funcList.length;

export default function AtoH() {
  // console.log(dividedArrays);
  return <Container funcList={funcList} />;
}
