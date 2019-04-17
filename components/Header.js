import React from "react";
import { Text, View, Image } from "react-native";

const Header = function(props) {
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
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
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
