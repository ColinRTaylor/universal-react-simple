import React from "react";
import styled from "../primitives";
const Text = styled.Text`
  color: white;
  font-size: 20px;
`;
const Wrapper = styled.Touchable`
  width: 100%;
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #4d86f7;
`;

export default ({ onClick, children }) => (
  <Wrapper color="white" onPress={onClick}>
    <Text>{children}</Text>
  </Wrapper>
);
