import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  background: #4d86f7;
  color: white;
`;

export default ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);
