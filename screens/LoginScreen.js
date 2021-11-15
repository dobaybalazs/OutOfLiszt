import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import InputField from "../components/InputField";
import TitleText from "../components/texts/TitleText";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.header}>
            <TitleText style={styles.title}>Out of liszt</TitleText>
          </View>
          <View style={styles.form}>
            <InputField
              placeholder="Email"
              value={email}
              onChange={(v) => setEmail(v)}
            />
            <InputField
              placeholder="Password"
              value={pw}
              onChange={(v) => setPw(v)}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={Sizes.activeopacity}
                onPress={() => props.login(email, pw)}
              >
                <View style={styles.button}>
                  <TitleText style={styles.buttonText}>ENTER</TitleText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footer}>
            <Image
              style={{ width: 200, height: 247 }}
              source={require("../assets/loginicon.jpg")}
            />
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
  },
  title: {
    fontSize: Sizes.titlefontsize,
    color: Colors.whitecolor,
  },
  header: {
    paddingVertical: 40,
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
    width: "100%",
    paddingHorizontal: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
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
    marginTop: 15,
  },
  buttonText: {
    fontSize: Sizes.titlefontsize,
    color: Colors.whitecolor,
  },
  footer: {
    width: "100%",
    height: 300,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default LoginScreen;
