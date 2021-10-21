import React from "react";
import { StyleSheet, Text, View, To } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TitleText from "../components/texts/TitleText";
import Colors from "../constants/Colors";
import SearchButton from "../components/buttons/SearchButton";

const ListsScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TitleText>Out of liszt</TitleText>
        </View>
        <View style={styles.buttonContainer}>
          <SearchButton color={Colors.primarygray} />
        </View>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 25,
  },
  body: {
    flex: 5,
  },
  titleContainer: {
    paddingRight: "25%",
  },
});

export default ListsScreen;
