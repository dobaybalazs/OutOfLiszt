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
        <View
          style={{
            flex: 7,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DefaultText style={styles.userName}>{props.name}</DefaultText>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={Sizes.activeopacity}
            onPress={props.onSelect}
          >
            <Entypo name="cross" size={18} color={Colors.primarygray} />
          </TouchableOpacity>
        </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  userComp: {
    height: "100%",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  userName: {
    color: Colors.primarygray,
    fontSize: 15,
    paddingRight: 20,
  },
});

export default UserButton;
