import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: { height: 50, borderWidth: 1, borderColor: "black", width: "100%" },
});

export default ({ onChangeText, value, placeholder, ...rest }) => (
  <TextInput
    {...rest}
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
  />
);
