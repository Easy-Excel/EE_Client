import React from "react";
import { useState } from "react";
import Container from "./FuncListContainer";

export default function AtoH({ functionsList, sortingType, content }) {
  return (
    <Container
      funcList={functionsList}
      listSize={functionsList.length}
      sortingType={sortingType}
      content={content}
    />
  );
}
