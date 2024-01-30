import React from "react";
import Container from "../functionPage/FuncListContainer";

const funcList = [
  {
    functionId: 1,
    name: "DataBase",
  },
  {
    functionId: 2,
    name: "Function",
  },
  {
    functionId: 3,
    name: "Category",
  },
];
const listSize = funcList.length;
const sortingType = "데이터베이스";

export default function DataBase() {
  return (
    <Container
      funcList={funcList}
      listSize={listSize}
      sortingType={sortingType}
      category={2}
    />
  );
}
