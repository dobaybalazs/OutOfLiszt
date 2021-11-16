import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Foundation } from "@expo/vector-icons";

import DefaultText from "./texts/DefaultText";
import Sizes from "../constants/Sizes";

const List = (props) => {
  return (
    <View style={{ ...styles.listContainer, ...props.style }}>
      <View style={styles.date}>
        <DefaultText style={{ fontSize: 30 }}>15</DefaultText>
        <DefaultText>Ápr</DefaultText>
      </View>
      <TouchableOpacity
        style={{
          ...styles.detailContainer,
          ...{ backgroundColor: props.color },
        }}
        activeOpacity={Sizes.activeopacity}
        onPress={props.onSelect}
      >
        <View style={styles.itemCountContainer}>
          <DefaultText style={styles.itemCount}>3 termék</DefaultText>
        </View>
        <View style={styles.itemTitleContainer}>
          <DefaultText
            style={{
              ...styles.itemTitle,
              ...{ textDecorationLine: props.isDone ? "line-through" : "none" },
            }}
          >
            Ünnepi ebéd
          </DefaultText>
        </View>
        <View style={styles.attachedUsersContainer}>
          <Foundation
            name="torsos-female-male"
            size={24}
            color={Colors.whitecolor}
          />
          <DefaultText style={styles.attachedUsers}>Anya,Apa</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "90%",
    height: 130,
    flexDirection: "row",
  },
  date: {
    flex: 1,
    alignItems: "center",
    paddingTop: 12,
  },
  detailContainer: {
    flex: 5,
    borderRadius: 20,
    overflow: "hidden",
    paddingHorizontal: 15,
    paddingVertical: 8,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 3,
  },
  itemCountContainer: {
    flex: 10,
    padding: 5,
  },
  itemCount: {
    color: Colors.whitecolor,
    fontSize: 18,
  },
  itemTitleContainer: {
    flex: 6,
    padding: 5,
  },
  itemTitle: {
    color: Colors.whitecolor,
    fontSize: 22,
  },
  attachedUsersContainer: {
    flex: 5,
    flexDirection: "row",
    padding: 5,
  },
  attachedUsers: {
    color: Colors.whitecolor,
    fontSize: 15,
    paddingLeft: 8,
  },
});

export default List;
