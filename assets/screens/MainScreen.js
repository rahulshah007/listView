//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  Alert
} from "react-native";

import { DrawerNavigator } from "react-navigation";
import Home from "./Home";
import {


  Content,
  Header,
  Text,
  Container,
  ListItem,
  Left,
  Icon
} from "native-base";
import ShopByCat from './NavDrawer/ShopByCat';
// create a component
class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppDrawernavigator />;
  }
}

CustomDrawerContentComponent = props => {
  return (
    <Container>
      <Header
        style={[{
          backgroundColor: "#3a455c",
          height: 90
        },styles.androidHeader]}
      >
        <Left
          style={{ flex: 1, flexDirection: "row", alignItems:"center" }}
        >
          <Icon name="person" style={{ color: "#fff" }} />
          <Text
            style={{
              marginLeft: 8,
              fontSize: 18,
              color: "#fff",
              fontStyle: "italic"
            }}
          >
            Hello,Jhon Doe
          </Text>
        </Left>
      </Header>
      <Content>
        <FlatList
          style={styles.listViewStyle}
          data={[
            { key: "Home" },
            { key: "Shop by Category" },
            { key: "Today's deal " }
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder={true}>
              <Text style={styles.textStyle} onPress={() => alert(item.key)}>
                {item.key}
              </Text>
            </ListItem>
          )}
        />

        <FlatList
          style={styles.listViewStyle}
          data={[
            { key: "Your Detail" },
            { key: "Your Wish List" },
            { key: "Your Account " },
            { key: "Amazon Pay " },
            { key: "Sell on Amazon " }
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder={true}>
         
              <Text style={styles.textStyle} onPress={() => alert(item.key)}>
                {item.key}
              </Text>
            </ListItem>
          )}
        />

        <FlatList
          data={[{ key: "Settings" }, { key: "Customer Service" }]}
          renderItem={({ item }) => (
            <ListItem noBorder={true}>
              <Text style={styles.textStyle} onPress={() => alert(item.key)}>
                {item.key}
              </Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  textStyle: {
    fontSize: 13,
    fontStyle: "italic"
  },
  listViewStyle: {
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1
  },androidHeader:{
    ...Platform.select({
      android:{
        paddingTop: StatusBar.currentHeight,
      }
    })
  }
});

//For drawer navigator
const AppDrawernavigator = new DrawerNavigator(
  {
    HomeScreen: { screen: Home },
    ShopByCat:{screen :ShopByCat}
  },
  {
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

//make this component available to the app
export default MainScreen;
