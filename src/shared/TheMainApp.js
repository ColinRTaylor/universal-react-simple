import React from "react";
import styled from "./components/primitives";
import TextInput from "./components/TextInput";
import ActionButton from "./components/ActionButton";

const Divider = styled.View`
  border: 1px solid black;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Wrapper = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Header = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const SomeText = styled.Text`
  color: purple;
  font-size: 20px;
  margin-top: 20px;
`;
class TheMainApp extends React.Component {
  state = {
    text: "",
    someValue: "",
  };

  handleChange = text => {
    this.setState({ text });
  };

  handleSave = () => {
    this.setState({ someValue: this.state.text, text: "" });
  };

  render() {
    return (
      <Wrapper>
        <Header>Welcome to the MainApp</Header>
        <Divider />
        <TextInput value={this.state.text} onChangeText={this.handleChange} />
        <ActionButton onClick={this.handleSave}>SAVE</ActionButton>
        <SomeText>{this.state.someValue}</SomeText>
      </Wrapper>
    );
  }
}

export default TheMainApp;
