import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RefrigeratorScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>RefrigeratorScreen</Text>
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

export default RefrigeratorScreen;
