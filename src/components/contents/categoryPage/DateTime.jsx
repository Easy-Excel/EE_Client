import React from "react";
import Container from "../functionPage/FuncListContainer";

const funcList = [
  {
    functionId: 1,
    name: "DATE",
  },
  {
    functionId: 2,
    name: "TIME",
  },
  {
    functionId: 3,
    name: "FUNCTION",
  },
  {
    functionId: 4,
    name: "CATEGORY",
  },
  {
    functionId: 5,
    name: "CATEGORY",
  },
  {
    functionId: 6,
    name: "CATEGORY",
  },
  {
    functionId: 7,
    name: "CATEGORY",
  },
  {
    functionId: 8,
    name: "CATEGORY",
  },
  {
    functionId: 9,
    name: "CATEGORY",
  },
  {
    functionId: 10,
    name: "CATEGORY",
  },
  {
    functionId: 11,
    name: "CATEGORY",
  },
  {
    functionId: 12,
    name: "CATEGORY",
  },
  {
    functionId: 13,
    name: "CATEGORY",
  },
  {
    functionId: 14,
    name: "CATEGORY",
  },
  {
    functionId: 15,
    name: "CATEGORY",
  },
  {
    functionId: 16,
    name: "CATEGORY",
  },
  {
    functionId: 17,
    name: "CATEGORY",
  },
  {
    functionId: 18,
    name: "CATEGORY",
  },
  {
    functionId: 19,
    name: "CATEGORY",
  },
];
const listSize = funcList.length;
const sortingType = "날짜/시간";

export default function DateTime() {
  return (
    <Container
      funcList={funcList}
      listSize={listSize}
      sortingType={sortingType}
      category={2}
    />
  );
}
