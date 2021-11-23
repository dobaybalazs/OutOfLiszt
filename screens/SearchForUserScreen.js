import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import InputField from "../components/InputField";
import SearchButton from "../components/buttons/SearchButton";
import { useDispatch } from "react-redux";
import * as listActions from "../store/actions/lists";
import { USERS } from "../data/dummy-data";

const SearchForUserScreen = (props) => {
  const dispatch = useDispatch();
  const currentListId = props.navigation.getParam("listId");
  const [userName, setUserName] = useState("");
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <View style={{ flex: 8, height: 50 }}>
          <InputField
            placeholder={"Enter name"}
            onChange={(v) => setUserName(v)}
            value={userName}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: 40,
            justifyContent: "flex-end",
          }}
        >
          <SearchButton
            onSelect={() => {
              const user = USERS.find((user) => user.username === userName);
              if (user) {
                const pairedKeys = {
                  listId: currentListId,
                  userId: user.id,
                };
                dispatch(listActions.addUser(pairedKeys));
              }
              props.navigation.goBack();
            }}
          />
        </View>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    paddingHorizontal: 15,
    marginTop: 20,
    height: 100,
  },
  body: {
    flex: 10,
  },
});

export default SearchForUserScreen;
