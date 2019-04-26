import React from "react";
import { Text, View, Image } from "react-native";

const Header = props => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/logo.png")}
      />
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#141414",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    elevation: 5,
    position: "relative",
    flexDirection: "row"
  },
  textStyle: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold"
  }
};

export default Header;
