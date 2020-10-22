import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thenderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
