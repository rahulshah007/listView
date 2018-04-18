import { View, Text, StyleSheet } from "react-native";
export const customStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#80CCCC99"
    },containerMain:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50"
    },recutierListTextHeader:{
        fontSize:18,
        color:'#000'
    },
    recutierListText:{
        fontSize: 16,
        color:'#000'
    },headerStyle: {
        backgroundColor: "#f8f8f8",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
      },
      textStyle: {
        fontSize: 20
      }
    
  });