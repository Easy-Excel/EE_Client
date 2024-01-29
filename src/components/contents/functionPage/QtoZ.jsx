import React from "react";
import Container from "./FuncListContainer";

const funcList = [
  {
    functionId: 1,
    name: "QUOTIENT",
  },
  {
    functionId: 2,
    name: "RANK.EQ",
  },
  {
    functionId: 3,
    name: "REPT",
  },
  {
    functionId: 4,
    name: "REPLACE",
  },
  {
    functionId: 5,
    name: "등...",
  },
];
const listSize = funcList.length;
const sortingType = "Q~Z";

export default function QtoZ() {
  return (
    <Container
      funcList={funcList}
      listSize={listSize}
      sortingType={sortingType}
      category={1}
    />
  );
}
