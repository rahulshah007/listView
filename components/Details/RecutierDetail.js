//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import CustomCardSection from "../customComponents/CustomCardSection";
import CustomCard from "../customComponents/CustomCard";
import { customStyle } from "../../assets/style/Styles";

// here we are not using class because this is only ui we are not using any life cycle function
const RecutierDetail = ({ recutierList }) => {
  const { r_type, r_name ,r_discrption} = recutierList;

  return (
    <CustomCard>
      
      <CustomCardSection>
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={styles.thumbnailStyle}
            source={require("../../assets/image/logo.png")}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={customStyle.recutierListTextHeader}>{r_type}</Text>
          <Text style={customStyle.recutierListText}>{r_name}</Text>
        </View>
      </CustomCardSection>

      <CustomCardSection >
        <Text style={customStyle.recutierListText}>
          {r_discrption}
        </Text>
      </CustomCardSection>
    </CustomCard>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};
//make this component available to the app
export default RecutierDetail;
