import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

import ShopNavigator from "./navigation/ShopNavigator";
import LoginScreen from "./screens/LoginScreen";
import ItemCard from "./components/ItemCard";
import { firebaseConfig } from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const firebase = initializeApp(firebaseConfig);
const auth=getAuth();
const initialUser= null;


function login(email,password){
  console.log(email,password)
  return signInWithEmailAndPassword(auth, email, password)
}
enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState(null);
  React.useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      setUser(user)
      setUserLoaded(true)
    });
    return unsubscribe
  },[])
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  if (!userLoaded){
    return <Text>
      Loading User
      </Text>
  }
  if (!user) {
  return <LoginScreen login={login} user={user}/>
  }

  else return <ShopNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
