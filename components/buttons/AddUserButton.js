import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import Sizes from "../../constants/Sizes";

const AddUserButton = (props) => {
  return (
    <View style={{ ...styles.button, ...props.style }}>
      <TouchableOpacity activeOpacity={Sizes.activeopacity}>
        <MaterialIcons name="group-add" size={34} color={props.color} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
});

export default AddUserButton;
