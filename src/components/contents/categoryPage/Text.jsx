import React from "react";
import Container from "../functionPage/FuncListContainer";

const funcList = [
  {
    functionId: 1,
    name: "TEST",
  },
  {
    functionId: 2,
    name: "TEST",
  },
  {
    functionId: 3,
    name: "TEST",
  },
  {
    functionId: 4,
    name: "TEST",
  },
  {
    functionId: 5,
    name: "TEST",
  },
];

const listSize = funcList.length;
const sortingType = "텍스트";

export default function Text() {
  return (
    <Container
      funcList={funcList}
      listSize={listSize}
      sortingType={sortingType}
      category={2}
    />
  );
}
