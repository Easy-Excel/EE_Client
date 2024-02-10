import React from "react";
import Container from "../functionPage/FuncListContainer";

export default function DataBase({ functionsList, sortingType, content }) {
  return (
    <Container
      funcList={functionsList}
      listSize={functionsList.length}
      sortingType={sortingType}
      content={content}
    />
  );
}
