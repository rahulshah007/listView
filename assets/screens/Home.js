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
  ActivityIndicator,
  Item,
  Card,
  CardItem,
  Input
} from "native-base";
import FAICon from "react-native-vector-icons/FontAwesome";
import Swipper from "react-native-swiper";
import RelatedItemViewCardItem from "../../components/customComponents/RelatedItemViewCardItem";

import axios from "axios";
// create a component
class Home extends Component {
  state = { movieList: [], isLoding: false, isLoad: false };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get("https://api.androidhive.info/json/movies.json").then(response =>
      this.setState({
        movieList: response.data
      })
    );
  }

  renderRecutier() {
    //Map is array functoin we call here because we are getting data in array formate
    return this.state.movieList.map(movieList => (
      //We need to pass key because we are displaying array with help of key react can know that he is rendering particular key value every time
      //For defining key there are two rule must be uniqe and is same value across render list
      //<Text key={recutier.r_id}>{recutier.r_name}</Text>
      <RelatedItemViewCardItem
        itemName={movieList.title}
        itemCreator={movieList.genre}
        itemPrice={movieList.releaseYear}
        savings={movieList.releaseYear}
        imageUri={{ uri: movieList.image }}
        rating={movieList.rating}
      />
    ));
  }

  renderSwiper() {
    return this.state.movieList.map(movieList => (
      //We need to pass key because we are displaying array with help of key react can know that he is rendering particular key value every time
      //For defining key there are two rule must be uniqe and is same value across render list
      //<Text key={recutier.r_id}>{recutier.r_name}</Text>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.swiperImageStyle}
          source={{ uri: movieList.image }}
        />
      </View>
    ));
  }

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
        <View style={styles.categoryStyle}>
          <TouchableOpacity>
            <View style={styles.searchByCatBtn}>
              <Text style={{ fontSize: 12 }}>Shop By</Text>
              <Text style={{ fontWeight: "bold" }}>Category</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              marginLeft: 5,
              height: "100%",
              justifyContent: "center"
            }}
          >
            <Item
              style={{
                backgroundColor: "#fff",
                paddingHorizontal: 10,
                borderRadius: 4
              }}
            >
              <Icon
                name="search"
                style={{
                  fontSize: 20,
                  padding: 5
                }}
              />
              <Input placeholder="search" />
            </Item>
          </View>
        </View>

        {/* Profile info page */}
        <Content style={styles.profileNameView}>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              flexDirection: "row",
              paddingHorizontal: 5,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text> Hello , Jhon Doe</Text>
            <TouchableOpacity onPress={this.myAccount}>
              <View style={{ flexDirection: "row" }}>
                <Text>Your Account </Text>
                <Icon
                  name="angle-right"
                  type="FontAwesome"
                  style={{
                    fontSize: 18,
                    marginLeft: 5,
                    marginRight: 7,
                    color: "#B1B2B2"
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* Banner part */}
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ flexGrow: 1 }}
            showsHorizontalScrollIndicator={false}
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              marginTop: 5,
              height: 80,
              backgroundColor: "#fff"
            }}
          >
            {/* 1 */}
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 8
              }}
            >
              <Thumbnail
                circular
                source={require("./../image/electronics_icon.png")}
              />
              <Text style={{ fontSize: 9, color: "#000", fontWeight: "400" }}>
                Electronics
              </Text>
            </View>

            {/* 2 */}
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 8
              }}
            >
              <Thumbnail
                circular
                source={require("./../image/fashion_gray_icon.png")}
              />
              <Text style={{ fontSize: 9, color: "#000", fontWeight: "400" }}>
                Fashion
              </Text>
            </View>
            {/* 3 */}
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 8
              }}
            >
              <Thumbnail
                circular
                source={require("./../image/kitchen_icon.png")}
              />
              <Text style={{ fontSize: 9, color: "#000", fontWeight: "400" }}>
                Grocery
              </Text>
            </View>
            {/* 4 */}
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 8
              }}
            >
              <Thumbnail
                circular
                source={require("./../image/furniture_gray_icon.png")}
              />
              <Text style={{ fontSize: 9, color: "#000", fontWeight: "400" }}>
                Home
              </Text>
            </View>

            {/* 5 */}
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 8
              }}
            >
              <Thumbnail
                circular
                source={require("./../image/leisure_icon.png")}
              />
              <Text style={{ fontSize: 9, color: "#000", fontWeight: "400" }}>
                Entertainment
              </Text>
            </View>
          </ScrollView>

          {/* Swipper part */}
          <Swipper
            style={styles.swperView}
            activeDotColor="#fff"
            autoplay={true}
          >
            {this.renderSwiper()}
          </Swipper>
          {/* For related to items you have search*/}
          <Card
            style={{
              marginLeft: 5,
              marginRight: 5
            }}
          >
            <CardItem
              style={{
                borderBottomColor: "#f3C3f3",
                borderBottomWidth: 1,
                marginLeft: 8,
                marginRight: 8
              }}
            >
              <Text style={{ color: "#000", fontSize: 18 }}>
                Related to item you've viewed
              </Text>
            </CardItem>
            {this.renderRecutier()}
          </Card>
        </Content>
      </Container>
    );
  }

  //On click of my account '
  myAccount = () => {
    alert("my account click");
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  },
  header: {
    backgroundColor: "#2c3e50",
    height: 50,
    borderBottomColor: "#757575",
    elevation: 0
  },
  categoryStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    height: 70,
    backgroundColor: "#2c3e50"
  },
  searchByCatBtn: {
    width: 100,
    backgroundColor: "#e7e7eb",
    height: 50,
    borderRadius: 5,
    padding: 10
  },
  profileNameView: {
    backgroundColor: "#d5d5d6",
    marginTop: 70
  },
  swperView: {
    height: 120,
    marginTop: 5,
    marginBottom: 5
  },
  swiperImageStyle: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  }
});

//make this component available to the app
export default Home;
