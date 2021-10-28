import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatisticsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>StatisticsScreen</Text>
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
});

export default StatisticsScreen;
