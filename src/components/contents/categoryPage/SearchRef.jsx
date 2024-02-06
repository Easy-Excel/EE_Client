import React from "react";
import Container from "../functionPage/FuncListContainer";

export default function SearchRef({ functionsList, sortingType }) {
  return (
    <Container
      funcList={functionsList}
      listSize={functionsList.length}
      sortingType={sortingType}
    />
  );
}
