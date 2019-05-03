import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { Avatar, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";

import bgImage from "../assets/nak-muay.jpg";

class ProfileScreen extends Component {
  logout = () => {
    AsyncStorage.removeItem("fb_token");
    this.props.userInfo = null;
    this.props.navigation.navigate("auth");
  };

  render() {
    const { email, name, id, birthday } = this.props.userInfo;

    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            height: "100%"
          }}
        >
          <View>
            <View style={{ padding: 20 }}>
              <Text style={styles.titlesStyle}>
                NAME: <Text>{name}</Text>
              </Text>
              <Text style={styles.titlesStyle}>
                EMAIL: <Text>{email}</Text>
              </Text>
              {this.props.userInfo.birthday ? (
                <Text style={styles.titlesStyle}>
                  BIRTHDAY: <Text>{birthday}</Text>
                </Text>
              ) : null}
              <Text style={styles.titlesStyle}>
                ID: <Text>{id}</Text>
              </Text>
            </View>
          </View>
          <View>
            <Button
              icon={
                <Icon
                  name="exit-to-app"
                  size={20}
                  color="white"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="Log Out"
              buttonStyle={{ backgroundColor: "red" }}
              style={{ margin: 20 }}
              onPress={() => this.logout()}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    height: null,
    width: null
  },
  titlesStyle: {
    fontSize: 18,
    padding: 5
  }
});

const mapStateToProps = ({ auth }) => {
  return { userInfo: auth.userInfo };
};

export default connect(mapStateToProps)(ProfileScreen);
