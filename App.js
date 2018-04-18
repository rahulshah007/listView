/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  ListView,
  TouchableOpacity
} from "react-native";

import { customStyle } from "./assets/style/Styles";
import CustomHeader from "./components/customComponents/CustomHeader";
import RecutierList from "./components/List/RecutierList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoding: true
    };
  }

  render() {
    return (
      <View style={customStyle.container}>
        <CustomHeader headerText={"Album"} />
        <RecutierList />
      </View>
    );
  }
}
