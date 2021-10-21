import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import TitleText from "./texts/TitleText";
import Sizes from "../constants/Sizes";
import SearchButton from "./buttons/SearchButton";
import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <ImageBackground style={styles.imageContainer} source={props.source}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <SearchButton color={Colors.whitecolor} />
          </View>
          <View style={styles.textContainer}>
            <TitleText style={styles.text}>{props.children}</TitleText>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  textContainer: {
    flex: 2,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
    padding: 25,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: Sizes.titlefontsize * 1.5,
  },
});

export default Header;
