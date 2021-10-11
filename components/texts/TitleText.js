import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Sizes from "../../constants/Sizes";

const TitleText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
    fontSize: Sizes.titlefontsize,
  },
});

export default TitleText;
