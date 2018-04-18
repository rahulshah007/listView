import React, { Component } from "react";
import { Text, View } from "react-native";
import InputText from "./../components/customComponents/InputText";
import {
  backgroundcolor,
  textColorHeader,
  textColorSubHeader
} from "./../assets/helper/Color";
import {Container ,Content } from "native-base";


export default class SingnUp extends Component {
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: backgroundcolor }}>
        <Content >
        <Text
          style={{
            marginTop: 25,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 21,
            color: textColorHeader
          }}
        >
          SIGN UP
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 21,
            color: textColorSubHeader
          }}
        >
          CREATE YOUR ACCOUNT
        </Text>
        <View style={{ marginTop: 50 }}>
          <InputText cusotomPlaceholder="username" />
          <InputText cusotomPlaceholder="password" isSecured={true} />
          <InputText cusotomPlaceholder="conform password" isSecured={true} />
        </View>
      </Content>
      </Container>
      
    );
  }
}
