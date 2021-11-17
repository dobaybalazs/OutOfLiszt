import React from "react";
import { StyleSheet, Text, View } from "react-native";

import InputField from "../components/InputField";
import SearchButton from "../components/buttons/SearchButton";

const SearchForUserScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <View style={{ flex: 8 }}>
          <InputField placeholder={"Enter name"} />
        </View>
        <View
          style={{
            flex: 1,
            height: 40,
            justifyContent: "flex-end",
          }}
        >
          <SearchButton />
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    paddingHorizontal: 15,
  },
  body: {
    flex: 10,
  },
});

export default SearchForUserScreen;
