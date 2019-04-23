import React, { Component } from "react";
import { View, Platform, ImageBackground, StyleSheet } from "react-native";
import { Avatar, Text, Button, Icon } from "react-native-elements";

import bgImage from "../assets/nak-muay.jpg";

const PROFILE = {
  name: "Nak Muay",
  email: "test@test.com",
  username: "Nak Muay 10",
  password: "********",
  gender: "male",
  subscription: "25/11/2018"
};

class ProfileScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.7)", height: "100%" }}
        >
          <View>
            <Avatar
              rounded
              source={{
                uri: "https://randomuser.me/api/portraits/men/3.jpg"
              }}
              size="xlarge"
              containerStyle={{ margin: 10 }}
            />
            <Text h4>NAME: {PROFILE.name}</Text>
            <Text h4>EMAIL: {PROFILE.email}</Text>
            <Text h4>USERNAME: {PROFILE.username}</Text>
            <Text h4>PASSWORD: {PROFILE.password}</Text>
            <Text h4>GENDER: {PROFILE.gender}</Text>
            <Text h4>SUBSCIPTION DATE: {PROFILE.subscription}</Text>
          </View>
          <View>
            <Button
              icon={
                <Icon
                  name="settings"
                  size={20}
                  color="white"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="Edit Profile"
              style={{ margin: 20 }}
            />

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

export default ProfileScreen;
