import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";

import bgImage from "../assets/background.jpg";
import muay_thai_class from "../assets/muay-thai-class.jpg";
import kick_boxing_class from "../assets/kick-boxing-class.jpg";

const MUAY_THAI_CLASSES = [
  {
    id: 1,
    title: "OPEN SESSION - MUAY THAI",
    image: muay_thai_class,
    description: "Learn the Art of the Eight Limbs",
    time: "17:30",
    color: "red",
    buttontext: "JOIN NOW"
  },
  {
    id: 2,
    title: "MORNING SESSION - KICK",
    image: kick_boxing_class,
    description: "Stay fit and improve your strength",
    time: "09:00",
    color: "blue",
    buttontext: "JOIN NOW"
  }
];

class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <ScrollView>
          <View style={styles.homeContainer}>
            {MUAY_THAI_CLASSES.map(mtClass => {
              return (
                <Card
                  key={mtClass.id}
                  title={mtClass.title}
                  image={mtClass.image}
                  featuredTitle={mtClass.time}
                  titleNumberOfLines={2}
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
                    {mtClass.description}
                  </Text>
                  <Button
                    backgroundColor="rgba(255,255,255,0.7)"
                    buttonStyle={{
                      borderRadius: 10,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      backgroundColor: "#141414"
                    }}
                    title={mtClass.buttontext}
                    onPress={() => alert("You joined the class!")}
                  />
                </Card>
              );
            })}
          </View>
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
  homeContainer: {
    color: "white"
  }
});

export default HomeScreen;
