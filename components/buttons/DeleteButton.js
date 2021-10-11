import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import DefaultText from "../texts/DefaultText";
import Sizes from "../../constants/Sizes";

const DeleteButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={Sizes.activeopacity}>
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="trash" size={18} color={Colors.primarygray} />
        <DefaultText style={styles.text}>Törlés</DefaultText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: 75,
  },
  text: {
    color: Colors.primarygray,
    paddingLeft: 5,
  },
});

export default DeleteButton;
