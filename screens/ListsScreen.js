import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>ListsScreen</Text>
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

export default ListsScreen;
