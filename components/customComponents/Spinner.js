//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

// create a component
const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

//make this component available to the app
export default Spinner;
