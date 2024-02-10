import React from "react";
import Container from "../functionPage/FuncListContainer";

export default function DateTime({ functionsList, sortingType, content }) {
  return (
    <Container
      funcList={functionsList}
      listSize={functionsList.length}
      sortingType={sortingType}
      content={content}
    />
  );
}
