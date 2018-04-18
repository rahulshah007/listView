//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CustomCard = (props) => {
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
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth:0,
      shadowColor: '#000',
      shadowOffset: {width:0,height:2},
      shadowRadius: 2,
      elevation:1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
});

//make this component available to the app
export default CustomCard;
