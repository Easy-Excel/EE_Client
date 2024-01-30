import React from "react";
import Container from "../functionPage/FuncListContainer";

const funcList = [
  {
    functionId: 1,
    name: "SEARCH",
  },
  {
    functionId: 2,
    name: "SEARCH",
  },
  {
    functionId: 3,
    name: "SEARCH",
  },
  {
    functionId: 4,
    name: "SEARCH",
  },
  {
    functionId: 5,
    name: "TEST",
  },
];

const listSize = funcList.length;
const sortingType = "찾기/참조 영역";

export default function SearchRef() {
  return (
    <Container
      funcList={funcList}
      listSize={listSize}
      sortingType={sortingType}
      category={2}
    />
  );
}
