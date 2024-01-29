import React from "react";
import Container from "./FuncListContainer";

//test용(실제 함수리스트)
const funcList = [
  {
    functionId: 1,
    name: "Function1",
  },
  {
    functionId: 2,
    name: "Function2",
  },
  {
    functionId: 3,
    name: "Function3",
  },
  {
    functionId: 4,
    name: "Function4",
  },
  {
    functionId: 5,
    name: "DATA",
  },
  {
    functionId: 6,
    name: "DATA",
  },
  {
    functionId: 7,
    name: "DATA",
  },
  {
    functionId: 8,
    name: "DATA",
  },
  {
    functionId: 9,
    name: "DATA",
  },
  {
    functionId: 10,
    name: "DATA",
  },
  {
    functionId: 11,
    name: "DATA",
  },
  {
    functionId: 12,
    name: "DATA",
  },
  {
    functionId: 13,
    name: "DATA",
  },
  {
    functionId: 14,
    name: "DATA",
  },
  {
    functionId: 15,
    name: "DATA",
  },
  {
    functionId: 15,
    name: "DATA",
  },
  {
    functionId: 16,
    name: "DATA",
  },
  {
    functionId: 17,
    name: "DATA",
  },
  {
    functionId: 18,
    name: "DATA",
  },
  {
    functionId: 19,
    name: "DATA",
  },
];

const listSize = funcList.length;
const sortingType = "I~P";

export default function ItoP() {
  return (
    <Container
      funcList={funcList}
      listSize={listSize}
      sortingType={sortingType}
    />
  );
}
