import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import DefaultList from "../models/defaultlist";
import DefaultText from "../components/texts/DefaultText";
import InputField from "../components/InputField";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";
import PriorityButton from "../components/buttons/PriorityButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import * as listActions from "../store/actions/lists";
import { USERS } from "../data/dummy-data";

import { db, auth } from '../firebaseconfig';
import { collection, onSnapshot, query } from 'firebase/firestore';

const CONTAINER = [];
onSnapshot(query(collection(db, "users")), (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    CONTAINER.push({...doc.data(), id: doc.id});
  });
  // console.log(container);
  // console.log('Loaded:', CONTAINER.length, 'users');
});



const ListAdditionScreen = (props) => {
  const [listName, setListName] = useState("");
  const [listDate, setListDate] = useState("");
  const [listUsers, setListUsers] = useState("");
  const [listPriority, setListPriority] = useState("red");
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView behavior={"height"}>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.inputContainer}>
              <InputField
                value={listName}
                onChange={(v) => setListName(v)}
                title="Lista neve"
              />
              <InputField
                value={listDate}
                onChange={(v) => setListDate(v)}
                title="Dátum"
              />
              <InputField
                value={listUsers}
                onChange={(v) => setListUsers(v)}
                title="Lista megosztása"
              />
              <DefaultText style={styles.prior}>Prioritás</DefaultText>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <PriorityButton
                    color={Colors.redcolor}
                    onSelect={() => {
                      setListPriority(Colors.redcolor);
                    }}
                    title="Magas"
                  />
                </View>
                <View style={styles.button}>
                  <PriorityButton
                    color={Colors.greencolor}
                    onSelect={() => {
                      setListPriority(Colors.greencolor);
                    }}
                    title="Közepes"
                  />
                </View>
                <View style={styles.button}>
                  <PriorityButton
                    color={Colors.bluecolor}
                    onSelect={() => {
                      setListPriority(Colors.bluecolor);
                    }}
                    title="Alacsony"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              activeOpacity={Sizes.activeopacity}
              onPress={() => {
                props.navigation.popToTop();
                if (listName !== "" && listDate !== "") {
                  const userList = [];
                  userList.push(auth.currentUser.uid);
                  if (listUsers !== "") {
                    const users = listUsers.split(",");
                    for (const user of users) {
                      userList.push(
                        CONTAINER.find((item) => {
                          return user === item.username;
                        }).id
                      );
                    }
                  }
                  const id = "l" + (Math.random() * 100).toString();
                  const newItem = new DefaultList(
                    //id,
                    listName,
                    [],
                    userList,
                    listPriority,
                    listDate.split(" ")[0],
                    parseInt(listDate.split(" ")[1])
                  );
                  dispatch(listActions.addToLists(newItem));
                }
              }}
            >
              <View style={styles.topButton}>
                <DefaultText style={styles.topButtonText}>
                  Létrehozás
                </DefaultText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={Sizes.activeopacity}
              onPress={() => {
                setListName("");
                setListDate("");
                setListPriority("");
                setListUsers("");
                props.navigation.goBack();
              }}
            >
              <View style={styles.bottomButton}>
                <DefaultText style={styles.bottomButtonText}>
                  Törlés
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
  prior: {
    fontSize: Sizes.titlefontsize,
    color: Colors.primarygray,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 18,
  },
  topButton: {
    width: 300,
    backgroundColor: Colors.bluecolor,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
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
    marginTop: 20,
    fontSize: Sizes.titlefontsize,
    color: Colors.primarygray,
  },
});

export default ListAdditionScreen;
