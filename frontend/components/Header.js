import React, { Component } from "react";
import { Text, View, Image, Platform } from "react-native";
import { Avatar } from "react-native-elements";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { viewStyle, textStyle, elementStyle } = styles;
    const { userInfo } = this.props;

    return (
      <View style={viewStyle}>
        <View style={elementStyle}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/logo.png")}
          />
        </View>
        <View style={elementStyle}>
          <Text style={textStyle}>{this.props.headerText}</Text>
        </View>
        {(this.props.token === null && userInfo === null) ||
        this.props.token === null ? null : (
          <View style={elementStyle}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri:
                  userInfo.photoUrl !== undefined
                    ? userInfo.photoUrl
                    : userInfo.picture.data.url
              }}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: "#141414",
    height: Platform.OS === "android" ? 100 : 120,
    paddingTop: Platform.OS === "android" ? 10 : 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  elementStyle: {
    textAlign: "center",
    paddingTop: 20,
    justifyContent: "center"
  },
  textStyle: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold"
  }
};

const mapStateToProps = ({ auth }) => {
  return {
    token: auth.token,
    userInfo: auth.userInfo
  };
};

export default connect(mapStateToProps)(Header);
