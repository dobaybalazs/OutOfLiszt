import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import InputField from "../components/InputField";
import TitleText from "../components/texts/TitleText";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";

const LoginScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TitleText style={styles.title}>Out of liszt</TitleText>
      </View>
      <View style={styles.form}>
        <InputField />
        <InputField />
        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={Sizes.activeopacity}>
            <View style={styles.button}>
              <TitleText style={styles.buttonText}>ENTER</TitleText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: Sizes.titlefontsize,
    color: Colors.whitecolor,
  },
  header: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: Colors.bluecolor,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 6,
  },
  form: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "80%",
  },
  button: {
    width: "100%",
    backgroundColor: Colors.bluecolor,
    padding: 10,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: Sizes.titlefontsize,
    color: Colors.whitecolor,
  },
});

export default LoginScreen;
