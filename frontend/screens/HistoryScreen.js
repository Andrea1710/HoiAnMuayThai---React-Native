import React, { Component } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Text, ListItem } from "react-native-elements";

import moment from "moment";

import bgImage from "../assets/background.jpg";
import muay_thai_class from "../assets/muay-thai-class.png";
import kick_boxing_class from "../assets/kick-boxing-class.jpg";

const list = [
  {
    date: moment().format("ddd DD-MM-YYYY"),
    classTitle: "Open Session - Muay Thai Class",
    time: "17:30",
    classType: muay_thai_class
  },
  {
    date: moment().format("ddd DD-MM-YYYY"),
    classTitle: "Morning Session - Kick Boxing Class",
    time: "09:00",
    classType: kick_boxing_class
  }
];

class HistoryScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text style={{ color: "red", textAlign: "center" }} h1>
            History
          </Text>
          <View>
            {list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: l.classType }}
                rightTitle={l.date}
                title={l.classTitle}
                subtitle={l.time}
                containerStyle={{
                  borderWidth: 1,
                  borderColor: "black",
                  backgroundColor: "rgba(255,255,255,0.8)"
                }}
              />
            ))}
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
    width: null,
    backgroundColor: "#F5FCFF"
  }
});

export default HistoryScreen;
