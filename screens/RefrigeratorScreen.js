import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import TitleText from "../components/texts/DefaultText";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import ItemFilter from "../components/ItemFilter";
import ItemCard from "../components/ItemCard";

const RefrigeratorScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Header
        style={styles.header}
        source={require("../assets/headerimages/fridge.jpg")}
      >
        Hűtő
      </Header>
      <View style={styles.body}>
        <ItemFilter />
        <View style={styles.list}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          >
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </ScrollView>
        </View>
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
  contentContainer: {
    padding: 5,
  },
  header: {
    flex: 3,
  },
  body: {
    flex: 5,
    width: "100%",
  },
  list: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.whitecolor,
  },
});

export default RefrigeratorScreen;
