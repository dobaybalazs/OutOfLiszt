import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TitleText from "../../components/texts/TitleText";
import Colors from "../../constants/Colors";
import SearchButton from "../../components/buttons/SearchButton";
import ListItemCard from "../../components/ListItemCard";
import AddButton from "../../components/buttons/AddButton";

const ListsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TitleText>Out of liszt</TitleText>
        </View>
        <View style={styles.buttonContainer}>
          <SearchButton color={Colors.primarygray} />
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListItemCard color={Colors.bluecolor} style={styles.listitem} />
          <ListItemCard color={Colors.redcolor} style={styles.listitem} />
          <ListItemCard
            isDone={true}
            color={Colors.primarygray}
            style={styles.listitem}
          />
          <ListItemCard color={Colors.greencolor} style={styles.listitem} />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <AddButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 25,
  },
  body: {
    flex: 5,
    width: "100%",
    marginVertical: 10,
  },
  footer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    paddingRight: "25%",
  },
  listitem: {
    marginVertical: 12,
    marginHorizontal: 10,
  },
});

export default ListsScreen;
