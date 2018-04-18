//import liraries
import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import {
  Container,
  Content,
  Left,
  Right,
  Header,
  Thumbnail,
  Icon,
  Body,
  Item,
  Card,
  CardItem,
  Input
} from "native-base";
import FAICon from "react-native-vector-icons/FontAwesome";

// create a component
class ShopByCat extends Component {
 
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={{ flexDirection: "row" }}>
            <Icon
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
              name="md-menu"
              style={{
                color: "#fff",
                marginRight: 15
              }}
            />
          </Left>
          <Body>
            <FAICon
              name="amazon"
              style={{
                fontSize: 32,
                color: "#fff"
              }}
            />
          </Body>
          <Right>
            <Icon name="md-cart" style={{ color: "#fff" }} />
          </Right>
        </Header>
      </Container>
    );
  }
}

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
export default ShopByCat;
