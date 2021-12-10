import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
  updateProfile,
} from "firebase/auth";
import { auth, db } from './firebaseconfig'
import { onSnapshot, collection, doc, setDoc, set, getDocs, addDoc, query, where } from 'firebase/firestore'
import firestore from 'firebase/firestore';
import USERS from './models/user'


//import * as listItems from './listItems.json'
//import * as firebase from "firebase"

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserLoaded(true);
      // if(user !== null) {
      //   if(user.displayName === null) {
      //     updateProfile(auth.currentUser, {
      //       displayName: "Felhasználó" });
      //   }
      // }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {

    // const updateUsersDatabase = async (id, data) => {
    //   const payload = data;
    //   const docRef = doc(db, 'users', id);
    //   await setDoc(docRef, payload);
    //   console.log(docRef.id);
    // }
    // updateUsersDatabase(auth.currentUser.uid, userObj);

    // ----------------------FETCH DATA FROM DATABASE-------------------
    // const CONTAINER = [];
    // onSnapshot(query(collection(db, "products")), (querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     CONTAINER.push({...doc.data(), id: doc.id});
    //   });
    //   // console.log(container);
    //   console.log('Loaded:', CONTAINER.length, 'items');
    // });
    // ----------------------------------------------------------------

    // ------------------------UPLOADER--------------------------------
    // const data = require('./<name>.json');
    // for (const key in data) {
    //   if (Object.hasOwnProperty.call(data, key)) {
    //     const element = data[key];
    //     Uploading(element);
    //   }
    // }
    // async function Uploading(item) {
    //   const collectionRef = collection(db, '<collection_name>');
    //   const payload = item;
    //   const docRef = await addDoc(collectionRef, payload);
    //   console.log(docRef.id);
    // }
    // -----------------------------------------------------------------
  }, []);

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // Add User To Cloud Database
      // const userObj2 = {
      //   username: "Felhasználó",
      //   img: "https://lh3.googleusercontent.com/proxy/8Awhri_SHqrbsBqTXdza1QyNvnWt9XW1dV-vAnJuM16q-WrJOMm1Ywl-1IQVxvwtTbvTafsUocDOKRlLhe41aE8QxuN_5DwfZMQVla55Ew",
      //   age: null,
      //   gender: "male",
      //   email: "userCredential.user.email",
      //   ownLists: []
      // };
      const userObj = new USERS (
        "Felhasználó",
        null,
        null,
        null,
        userCredential.user.email,
        []
      );
      console.log(Object.assign({}, userObj));
      const updateUsersDatabase = async (id, data) => {
          const payload = Object.assign({}, data);
          const docRef = doc(db, 'users', id);
          await setDoc(docRef, payload);
          console.log(docRef.id);
        }
      updateUsersDatabase(auth.currentUser.uid, userObj);
      
      console.log('Created with: ', userCredential.user.email);
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
      console.log('Logged in with: ', userCredential.user.email);
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
    return <LoginScreen login={handleLogin} register={handleSignUp} />;
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


