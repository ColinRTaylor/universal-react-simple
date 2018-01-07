import React from "react";

import styled from "styled-components";

const TextInput = styled.input`
  width: 100%;
`;

export default ({ onChangeText, value, placeholder, ...rest }) => (
  <TextInput
    {...rest}
    onChange={e => {
      onChangeText(e.target.value);
    }}
    value={value}
    placeholder={placeholder}
  />
);
