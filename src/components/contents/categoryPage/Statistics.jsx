import React from "react";
import Container from "../functionPage/FuncListContainer";

const funcList = [
  {
    functionId: 1,
    name: "STATISTICS",
  },
  {
    functionId: 2,
    name: "STATISTICS",
  },
  {
    functionId: 3,
    name: "MATH",
  },
  {
    functionId: 4,
    name: "AVERAGE",
  },
  {
    functionId: 5,
    name: "MIN",
  },
];

const listSize = funcList.length;
const sortingType = "Statistics";

export default function Statistics() {
  return (
    <Container
      funcList={funcList}
      listSize={listSize}
      sortingType={sortingType}
      category={2}
    />
  );
}
