//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const CustomButton = ({ omc, children }) => {
  return (
    <TouchableOpacity onPress={omc}>
      <Text style={{ fontWeight: "bold", color: "#000" }}>{children}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default CustomButton;
