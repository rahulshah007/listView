//import liraries
import React, { Component } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import { Card, Text, CardItem, Right } from "native-base";
import StartRating from "react-native-star-rating";
import CustomButton from "./CustomButton";

// create a component
class RelatedItemViewCardItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardItem
        style={{
          borderBottomColor: "#f0f0f0",
          borderBottomWidth: 1,
          marginLeft: 5,
          marginRight: 5
        }}
      >
        <View>
          <Image style={styles.cardImageStyle} source={this.props.imageUri} />
        </View>
        <Right style={styles.rightTextView}>
          <Text note>{this.props.itemCreator}</Text>
          <Text
            style={{ fontSize: 13, marginBottom: 5 }}
            numberOfLines={3}
            ellipsizeMode={"tail"}
          >
            {this.props.itemName}
          </Text>

          <StartRating
            disabled={true}
            maxStars={10}
            rating={this.props.rating}
            starSize={12}
            fullStarColor="#FFC000"
            emptyStarColor="#FFC000"
          />
          <Text
            style={{
              marginTop: 15,
              fontWeight: "bold"
            }}
          >
            ${this.props.itemPrice}
          </Text>
          <Text
            note
            style={{
              fontSize: 13,
              marginBottom: 8,
              textDecorationLine: "line-through",
              textDecorationStyle: "solid"
            }}
          >
            ${this.props.savings}
          </Text>
          <CustomButton
            omc={() =>
              alert("Congratulations for purchase of" + this.props.itemName)
            }
          >
            Buy Now !!
          </CustomButton>
        </Right>
      </CardItem>
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
  },
  cardImageStyle: {
    height: 100,
    width: 90,
    resizeMode: "contain"
  },
  rightTextView: {
    flex: 1,
    alignItems: "flex-start",
    height: 135,
    paddingHorizontal: 16
  }
});

//make this component available to the app
export default RelatedItemViewCardItem;
