import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import ItemFilter from "../components/ItemFilter";

const PantryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Header
        style={styles.header}
        source={require("../assets/headerimages/pantry.jpg")}
      >
        Kamra
      </Header>
      <View style={styles.body}>
        <ItemFilter />
      </View>
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
    flex: 3,
  },
  body: {
    flex: 5,
    width: "100%",
  },
});

export default PantryScreen;
