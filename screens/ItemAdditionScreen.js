import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import TitleText from "../components/texts/TitleText";
import DefaultText from "../components/texts/DefaultText";
import InputField from "../components/InputField";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";

const ItemAdditionScreen = () => {
  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView style={{ width: "85%" }} behavior={"height"}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <TitleText>Out of liszt</TitleText>
          </View>
          <View style={styles.body}>
            <View style={styles.inputContainer}>
              <InputField title="Termék neve" />
              <InputField title="Termék képe" />
              <InputField title="Termékkategória" />
              <InputField title="Termék egység" />
              <InputField title="Termék ára" />
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={Sizes.activeopacity}>
              <View style={styles.topButton}>
                <DefaultText style={styles.topButtonText}>
                  Hozzáadás
                </DefaultText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={Sizes.activeopacity}>
              <View style={styles.bottomButton}>
                <DefaultText style={styles.bottomButtonText}>
                  Elvetés
                </DefaultText>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
  body: {
    flex: 4,
    width: "100%",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
  },
  topButton: {
    width: 300,
    backgroundColor: Colors.bluecolor,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 20,
  },
  topButtonText: {
    fontSize: Sizes.titlefontsize,
    color: Colors.whitecolor,
  },
  bottomButton: {
    width: 100,
    alignItems: "center",
  },
  bottomButtonText: {
    fontSize: Sizes.titlefontsize,
    color: Colors.primarygray,
  },
});

export default ItemAdditionScreen;
