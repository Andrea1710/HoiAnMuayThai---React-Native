import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Image, Text, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";

import bgImage from "../assets/nak-muay.jpg";

class ProfileScreen extends Component {
  logout = () => {
    AsyncStorage.removeItem("fb_token");
    this.props.navigation.navigate("auth");
  };

  render() {
    const { email, name, picture, id } = this.props.userInfo;

    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.7)", height: "100%" }}
        >
          <View style={{ margin: 20 }}>
            <Image
              source={{ uri: picture.data.url }}
              style={{ width: 100, height: 100, margin: 20 }}
            />
            <Text h5>
              NAME: <Text h4>{name}</Text>
            </Text>
            <Text h5>
              EMAIL: <Text h4>{email}</Text>
            </Text>
            <Text h5>
              ID: <Text h4>{id}</Text>
            </Text>
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
  profileText: {
    fontSize: 40
  }
});

const mapStateToProps = ({ auth }) => {
  return { userInfo: auth.userInfo };
};

export default connect(mapStateToProps)(ProfileScreen);
