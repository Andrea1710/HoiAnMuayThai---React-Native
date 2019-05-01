import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Linking
} from "react-native";
import { PricingCard, Text } from "react-native-elements";

import bgImage from "../assets/background.jpg";

const PRICES = [
  {
    id: 1,
    title: "Class Pass",
    price: "VND 150.000",
    info: [
      "1 Class",
      "1.30 hours training",
      "Monday to Friday",
      "09:00 or 17:30"
    ],
    buttonTitle: {
      title: "CHECK SCEDULE"
    }
  },
  {
    id: 2,
    title: "3 Classes/Week Package",
    price: "VND 1.200.000",
    info: [
      "3 Classes per Week",
      "1.30 hours training",
      "Monday to Friday",
      "09:00 or 17:30"
    ],
    buttonTitle: {
      title: "CHECK SCEDULE"
    }
  },
  {
    id: 3,
    title: "Unlimited Pass",
    price: "VND 1.500.000",
    info: [
      "Unlimited Classes Pass",
      "1.30 hours training",
      "Monday to Friday",
      "09:00 or/and 17:30"
    ],
    buttonTitle: {
      title: "CHECK SCEDULE"
    }
  },
  {
    id: 4,
    title: "Private Class",
    price: "VND 600.000",
    info: [
      "1 Person",
      "1 hour training",
      "Monday to Friday",
      "Available time: 10:30 to 16:00"
    ],
    buttonTitle: {
      title: "BOOK YOUR PRIVATE CLASS"
    }
  }
];

class PricesScreen extends Component {
  state = {
    uri: "https://www.facebook.com/hoianmuaythai/"
  };

  handleClick = () => {
    Linking.canOpenURL(this.state.uri).then(supported => {
      if (supported) {
        Linking.openURL(this.state.uri);
      } else {
        console.log("Don't know how to open URI: " + this.state.uri);
      }
    });
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={{ marginBottom: 50 }}>
          <Text style={{ color: "red", textAlign: "center" }} h1>
            Prices
          </Text>
          <ScrollView>
            {PRICES.map(price => {
              return (
                <PricingCard
                  key={price.id}
                  color="#E21A1D"
                  title={price.title}
                  price={price.price}
                  info={price.info}
                  button={price.buttonTitle}
                  onButtonPress={
                    price.title === "Private Class"
                      ? this.handleClick
                      : () => this.props.navigation.navigate("TIMETABLE")
                  }
                  containerStyle={{
                    backgroundColor: "rgba(255,255,255,0.7)"
                  }}
                  infoStyle={{ color: "black" }}
                />
              );
            })}
          </ScrollView>
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

export default PricesScreen;
