import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import DefaultText from "../texts/DefaultText";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";

const PriorityButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        activeOpacity={Sizes.activeopacity}
        onPress={props.onSelect}
      >
        <View
          style={{ ...styles.button, ...{ backgroundColor: props.color } }}
        ></View>
      </TouchableOpacity>
      <DefaultText>{props.title}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    height: 75,
    width: 75,
    marginVertical: 10,
    borderRadius: 100,
  },
});

export default PriorityButton;
