import React from "react";
import Container from "./FuncListContainer";

export default function QtoZ({ functionsList, sortingType }) {
  return (
    <Container
      funcList={functionsList}
      listSize={functionsList.length}
      sortingType={sortingType}
    />
  );
}
