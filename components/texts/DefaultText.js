import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Sizes from "../../constants/Sizes";

const DefaultText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    fontSize: Sizes.regularfontsize,
  },
});

export default DefaultText;
