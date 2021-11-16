import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const AddButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onSelect}>
      <View style={styles.button}>
        <Ionicons name="md-add" size={34} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    elevation: 12,
    backgroundColor: Colors.bluecolor,
  },
});

export default AddButton;
