import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Colors from "../../constants/Colors";
import ListItemCard from "../../components/ListItemCard";
import AddButton from "../../components/buttons/AddButton";

const ListsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListItemCard
            color={Colors.bluecolor}
            style={styles.listitem}
            onSelect={() => {
              props.navigation.navigate({
                routeName: "ListItems",
              });
            }}
          />
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
        <AddButton
          onSelect={() => {
            props.navigation.navigate({
              routeName: "ListAddition",
            });
          }}
        />
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
