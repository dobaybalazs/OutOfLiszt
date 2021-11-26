import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ShopNavigator from "./navigation/ShopNavigator";
import LoginScreen from "./screens/LoginScreen";
import listsReducer from "./store/reducers/lists";
import productsReducer from "./store/reducers/products";

// import { firebaseConfig } from "./firebaseconfig";
// import { initializeApp } from "firebase/app";
import {
  //getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from './firebaseconfig'

//export const firebase = initializeApp(firebaseConfig);
//export const auth = getAuth(firebase);
//const initialUser = null;

// function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

enableScreens();

const rootReducer = combineReducers({
  lists: listsReducer,
  products: productsReducer,
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

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('Created with: ', user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
    });
  };

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in 
        const user = userCredential.user;
      console.log('Logged in with: ', user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
    });
  }

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
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Loading User</Text>
      </View>
    );
  }

  if (!user) {
    return <LoginScreen login={handleLogin} register={handleSignUp} user={user} />;
  } 
  else
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
