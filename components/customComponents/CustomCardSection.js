//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const CustomCardSection = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    justifyContent: "flex-start",
    padding: 5,
    flexDirection: 'row',
    borderLeftColor: '#ddd',
    backgroundColor: "#fff",
    position:'relative'
  }
});

//make this component available to the app
export default CustomCardSection;
