import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ShopNavigator from "./navigation/ShopNavigator";
import LoginScreen from "./screens/LoginScreen";
import listsReducer from "./store/reducers/lists";
import productsReducer from "./store/reducers/products";
import fridgeReducer from "./store/reducers/fridge";
import pantryReducer from "./store/reducers/pantry";

import { firebaseConfig } from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
const initialUser = null;

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

enableScreens();

const rootReducer = combineReducers({
  lists: listsReducer,
  products: productsReducer,
  fridge: fridgeReducer,
  pantry: pantryReducer,
});

const store = createStore(rootReducer);

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
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserLoaded(true);
    });
    return unsubscribe;
  }, []);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  if (!userLoaded) {
    return <Text>Loading User</Text>;
  }
  if (!user) {
    return <LoginScreen login={login} user={user} />;
  } else
    return (
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
