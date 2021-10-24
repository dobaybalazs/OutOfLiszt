import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import DefaultText from "./texts/DefaultText";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";

const InputField = (props) => {
  return (
    <View style={styles.container}>
      <DefaultText style={styles.title}>Title</DefaultText>
      <TextInput style={styles.input}>Lol</TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.primarygray,
    marginVertical: 5,
  },
  title: {
    color: Colors.primarygray,
    fontSize: Sizes.titlefontsize,
  },
  input: {
    padding: 7,
    fontSize: Sizes.titlefontsize,
  },
});

export default InputField;