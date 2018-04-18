import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { customStyle } from "../../assets/style/Styles";
import {
  textHintColor,
  backgroundcolorText
} from "./../../assets/helper/Color";

const InputText = props => {
  const test =
    props.cusotomPlaceholder == null ? "testing" : props.cusotomPlaceholder;
  return (
    <TextInput
      style={styles.inputtext}
      placeholder={test.toUpperCase()}
      secureTextEntry={props.isSecured}
      underlineColorAndroid="transparent"
      placeholderTextColor={textHintColor}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputtext: {
    backgroundColor: backgroundcolorText,
    marginLeft: 50,
    marginTop: 15,
    marginRight: 50,
    padding: 8,
    color: textHintColor,
    borderRadius: 2,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 16
  }
});
