import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
} from "react-native";

import TitleText from "../components/texts/TitleText";
import DefaultText from "../components/texts/DefaultText";
import InputField from "../components/InputField";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";

const ItemAdditionScreen = (props) => {
  const [isColdStorage, setColdStorage] = useState(false);
  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView style={{ width: "85%" }} behavior={"height"}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.body}>
            <View style={styles.inputContainer}>
              <InputField title="Termék neve" />
              <InputField title="Termék képe" />
              <InputField title="Termékkategória" />
              <InputField title="Termék egység" />
              <InputField title="Termék ára" />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DefaultText
                  style={{ color: Colors.primarygray, fontSize: 20 }}
                >
                  Hűtőben tárolandó?
                </DefaultText>
                <Switch
                  trackColor={{
                    true: Colors.redcolor,
                    false: Colors.primarygray,
                  }}
                  thumbColor={isColdStorage ? "red" : Colors.secondarygray}
                  value={isColdStorage}
                  onValueChange={(newValue) => setColdStorage(newValue)}
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              activeOpacity={Sizes.activeopacity}
              onPress={() => {
                props.navigation.goBack();
              }}
            >
              <View style={styles.topButton}>
                <DefaultText style={styles.topButtonText}>
                  Hozzáadás
                </DefaultText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={Sizes.activeopacity}
              onPress={() => {
                props.navigation.goBack();
              }}
            >
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
  body: {
    marginTop: 40,
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
