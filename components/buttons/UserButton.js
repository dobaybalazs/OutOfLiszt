import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import DefaultText from "../texts/DefaultText";

const UserButton = (props) => {
  return (
    <View style={{ ...styles.userContainer, ...props.style }}>
      <View style={styles.userComp}>
        <DefaultText style={styles.userName}>Anya</DefaultText>
        <TouchableOpacity activeOpacity={Sizes.activeopacity}>
          <Entypo name="cross" size={18} color={Colors.primarygray} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    borderRadius: 20,
    borderColor: Colors.primarygray,
    borderWidth: 1,
    width: 140,
    height: 35,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 8,
  },
  userComp: {
    flexDirection: "row",
    width: "62%",
    justifyContent: "space-between",
  },
  userName: {
    color: Colors.primarygray,
    fontSize: 15,
  },
});

export default UserButton;
