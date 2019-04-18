import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";

import bgImage from "../assets/background.jpg";

const HOME_PAGE = [
  {
    text: "Here you can find every information about HOI AN MUAY THAI GYM!",
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
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text style={[styles.homeText, { fontWeight: "bold" }]}>
            Welcome ANDREA
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
            image={require("../assets/muay-thai-class.jpg")}
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
    width: null,
    backgroundColor: "#F5FCFF"
  },
  homeText: {
    textAlign: "center",
    fontSize: 18,
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

export default HomeScreen;
