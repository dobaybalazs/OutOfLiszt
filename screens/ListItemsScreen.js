import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Colors from "../constants/Colors";
import UserButton from "../components/buttons/UserButton";
import AddUserButton from "../components/buttons/AddUserButton";
import AddButton from "../components/buttons/AddButton";
import DefaultText from "../components/texts/DefaultText";
import DeleteButton from "../components/buttons/DeleteButton";
import ItemCard from "../components/ItemCard";

const ListItemsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.header}></View>
        <View style={styles.usersContainer}>
          <View style={styles.users}>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <UserButton style={styles.user} />
                <UserButton style={styles.user} />
              </ScrollView>
            </View>
            <View style={{ padding: 15 }}>
              <AddUserButton color={Colors.primarygray} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.listheaderContainer}>
          <View style={styles.listheader}>
            <DefaultText style={{ fontSize: 18 }}>Termékek</DefaultText>
            <DeleteButton />
          </View>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.list}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
            >
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </ScrollView>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <AddButton />
        </View>
      </View>
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
  headerContainer: {
    flex: 1,
    backgroundColor: Colors.redcolor,
    width: "100%",
  },
  header: {
    flex: 2,
    width: "100%",
  },
  usersContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.whitecolor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  users: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  user: {
    marginHorizontal: 5,
    marginVertical: 15,
  },
  body: {
    flex: 3,
    width: "100%",
  },
  listheaderContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  listheader: {
    flex: 1,
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    flex: 7,
    width: "100%",
  },
  buttonContainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.whitecolor,
  },
  contentContainer: {
    padding: 5,
  },
});

export default ListItemsScreen;
