import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { customStyle } from "../../assets/style/Styles";

const CustomHeader = props => {
  return (
    <View style={customStyle.headerStyle}>
      <Text style={customStyle.textStyle}>{props.headerText}</Text>
    </View>
  );
};


export default CustomHeader;
