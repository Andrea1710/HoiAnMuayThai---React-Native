import React, { Component } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { connect } from "react-redux";

import bgImage from "../assets/background.jpg";

class HistoryScreen extends Component {
  state = {
    joinings: []
  };

  componentDidMount() {
    this.fetchJoinings();
  }

  fetchJoinings = () => {
    const userId = this.props.userInfo.id;
    const userEmail = this.props.userInfo.email;

    const requestBody = {
      query: `
          query {
            joinings (userId: "${userId}", userEmail: "${userEmail}") {
              _id
             mtclass {
               _id
               title
               date
               time
             }
            }
          }
        `
    };

    const token = "jeryhdgnbvcjmhsdnbfch";

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const joinings = resData.data.joinings;
        console.log("Joinings:", joinings);

        this.setState({ joinings: joinings });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text style={{ color: "red", textAlign: "center" }} h1>
            History
          </Text>
          <View>
            {this.state.joinings.map((l, i) => (
              <ListItem
                key={i}
                rightTitle={l.mtclass.date}
                title={l.mtclass.title}
                subtitle={l.mtclass.time}
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

const mapStateToProps = state => {
  return {
    userInfo: state.auth.userInfo
  };
};

export default connect(mapStateToProps)(HistoryScreen);
