import React from "react";
import styled from "styled-components";

const SearchBox = styled.input`
  display: flex;
  width: 828px;
  height: 52px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #000;
  background: #fff;
`;

function Search() {
  return <SearchBox />;
}

export default Search;
