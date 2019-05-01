import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import moment from "moment";

import bgImage from "../assets/background.jpg";

const HOME_PAGE = [
  {
    text: "Here you can find every information about \n HOI AN MUAY THAI GYM!",
    color: "black"
  },
  {
    text:
      "You can join Classes in real time, check our timetable, our prices, events, our history and know all about Muay Thai!",
    color: "white"
  }
];

class HomeScreen extends Component {
  render() {
    const fullName = this.props.userInfo.name;
    const name = fullName.split(" ")[0];

    const currentDay = moment().format("MM/D");
    const { birthday } = this.props.userInfo;
    const birthdayArr = birthday.split("/");
    const monthDay = `${birthdayArr[0]}/${birthdayArr[1]}`;

    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text
            style={[
              styles.homeText,
              { fontWeight: "bold", fontSize: 30, marginTop: 40 }
            ]}
          >
            Hi {name}! {"\n"}
            {currentDay === monthDay ? <Text>Happy Birthday!</Text> : null}
          </Text>
          {HOME_PAGE.map(description => {
            return (
              <Text key={description.text} style={styles.homeText}>
                {description.text}
              </Text>
            );
          })}
        </View>
        <ScrollView>
          <Card
            title="Check our Classes live!"
            image={require("../assets/muay-thai-class.png")}
            containerStyle={{
              backgroundColor: "rgba(255,255,255,0.5)",
              borderColor: "black",
              borderRadius: 10,
              marginBottom: 20
            }}
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: "red"
            }}
          >
            <Text style={{ marginBottom: 10 }}>
              All the Classes of this week!
            </Text>
            <Button
              backgroundColor="rgba(255,255,255,0.7)"
              buttonStyle={styles.buttonStyle}
              title="CHECK CLASSES"
              titleStyle={{ color: "black" }}
              onPress={() => this.props.navigation.navigate("CLASSES")}
            />
          </Card>
          <Card
            title="Check our TimeTable"
            image={require("../assets/timetable.jpg")}
            containerStyle={{
              backgroundColor: "rgba(255,255,255,0.5)",
              borderColor: "black",
              borderRadius: 10,
              marginBottom: 20
            }}
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: "red"
            }}
          >
            <Text style={{ marginBottom: 10 }}>
              Our Schedule for this week!
            </Text>
            <Button
              backgroundColor="rgba(255,255,255,0.7)"
              buttonStyle={styles.buttonStyle}
              title="CHECK TIMETABLE"
              titleStyle={{ color: "black" }}
              onPress={() => this.props.navigation.navigate("TIMETABLE")}
            />
          </Card>
          <Card
            title="Check our Prices"
            image={require("../assets/timetable.jpg")}
            containerStyle={{
              backgroundColor: "rgba(255,255,255,0.5)",
              borderColor: "black",
              borderRadius: 10,
              marginBottom: 20
            }}
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: "red"
            }}
          >
            <Text style={{ marginBottom: 10 }}>
              Our Schedule for this week!
            </Text>
            <Button
              backgroundColor="rgba(255,255,255,0.7)"
              buttonStyle={styles.buttonStyle}
              title="CHECK PRICES"
              titleStyle={{ color: "black" }}
              onPress={() => this.props.navigation.navigate("PRICES")}
            />
          </Card>
          <Card
            title="Check the Events!"
            image={require("../assets/muay-thai-events.jpg")}
            containerStyle={{
              backgroundColor: "rgba(255,255,255,0.5)",
              borderColor: "black",
              borderRadius: 10,
              marginBottom: 20
            }}
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: "red"
            }}
          >
            <Text style={{ marginBottom: 10 }}>
              All the Events related to Muay Thai!
            </Text>
            <Button
              backgroundColor="rgba(255,255,255,0.7)"
              buttonStyle={styles.buttonStyle}
              title="CHECK EVENTS"
              titleStyle={{ color: "black" }}
              onPress={() => this.props.navigation.navigate("EVENTS")}
            />
          </Card>
          <Card
            title="About Us!"
            image={require("../assets/hamt-history.jpg")}
            containerStyle={{
              backgroundColor: "rgba(255,255,255,0.5)",
              borderColor: "black",
              borderRadius: 10,
              marginBottom: 20
            }}
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: "red"
            }}
          >
            <Text style={{ marginBottom: 10 }}>
              Read our history and why we love Muay Thai!
            </Text>
            <Button
              backgroundColor="rgba(255,255,255,0.7)"
              buttonStyle={styles.buttonStyle}
              title="HOI AN MUAY THAI HISTORY"
              titleStyle={{ color: "black" }}
              onPress={() => this.props.navigation.navigate("HISTORY")}
            />
          </Card>
        </ScrollView>
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
  homeText: {
    textAlign: "center",
    fontSize: 20,
    color: "black"
  },
  buttonStyle: {
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1
  }
});

const mapStateToProps = ({ auth }) => {
  return {
    userInfo: auth.userInfo
  };
};

export default connect(mapStateToProps)(HomeScreen);
