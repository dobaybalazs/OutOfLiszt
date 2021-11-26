import React, { useState } from "react";
import {
  Text,
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
  const [password, setPassword] = useState('');

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
              onChange={(text) => setEmail(text)}
            />
            <InputField
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChange={(text) => setPassword(text)}
            />
            <View style={styles.buttonContainer}>
              {/* <TouchableOpacity
                activeOpacity={Sizes.activeopacity}
                onPress={() => props.login(email, password)}
              >
                <View style={styles.button}>
                  <TitleText style={styles.buttonText}>ENTER</TitleText>
                </View>
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => props.login(email, password)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.register(email, password)}
                style={[styles.button, styles.buttonOutline]}
              >
                <Text style={styles.buttonOutlineText}>Register</Text>
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
  // button: {
  //   width: "100%",
  //   backgroundColor: Colors.bluecolor,
  //   padding: 10,
  //   borderRadius: 8,
  //   shadowColor: "black",
  //   shadowOpacity: 0.26,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowRadius: 10,
  //   elevation: 3,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 15,
  // },
  // buttonText: {
  //   fontSize: Sizes.titlefontsize,
  //   color: Colors.whitecolor,
  // },
  button: {
    backgroundColor: Colors.bluecolor,
    width: '100%',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: Colors.bluecolor,
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: Colors.bluecolor,
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    width: "100%",
    height: 300,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default LoginScreen;
