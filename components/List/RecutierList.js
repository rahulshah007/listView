//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator ,ScrollView} from "react-native";
import axios from "axios";

import { customStyle } from "../../assets/style/Styles";
import RecutierDetail from "../Details/RecutierDetail";
import { URL_MAIN } from "../../assets/helper/Constant";

// create a component
class RecutierList extends Component {
  //TO set default state
  state = { recutier: [] }; //When we enter first time recutier has empty array

  constructor(props) {
    super(props);
    isLoading: true;
  }

  componentWillMount() {
    axios
      .get(URL_MAIN)
      //.then(response => console.log(response));
      //we got our response in data key thats why we pass response.data for key value check log

      .then(response =>
        this.setState({
          recutier: response.data
        })
      ); //when we get response we updated  our recutier state with data
  }

  //Helper method to display the value
  renderRecutier() {
    //Map is array functoin we call here because we are getting data in array formate
    return this.state.recutier.map(recutier => (
      //We need to pass key because we are displaying array with help of key react can know that he is rendering particular key value every time
      //For defining key there are two rule must be uniqe and is same value across render list
      //<Text key={recutier.r_id}>{recutier.r_name}</Text>

      <RelatedItemViewCardItem key={recutier.r_id} recutierList={recutier} />
    ));
  }

  render() {
    console.log(" In Render Method" + this.state);
    return <ScrollView style={customStyle.container}>{this.renderRecutier()}</ScrollView>;
  }
}

//make this component available to the app
export default RecutierList;
