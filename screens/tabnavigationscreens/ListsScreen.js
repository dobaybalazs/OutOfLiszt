import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItemCard from "../../components/ListItemCard";
import AddButton from "../../components/buttons/AddButton";
import { useSelector } from "react-redux";

const ListsScreen = (props) => {
  const currentList = useSelector((state) => state.lists.userLists);
  console.log(currentList);
  const renderListElement = (itemData) => {
    console.log("ID:",itemData.item.id);
    return (
      <ListItemCard
        color={itemData.item.priority}
        title={itemData.item.name}
        dateDay={itemData.item.dateDay}
        dateMonth={itemData.item.dateMonth}
        users={itemData.item.users}
        style={styles.listitem}
        itemCount={itemData.item.products.length}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ListItems",
            params: {
              listId: itemData.item.id,
              listUsers: itemData.item.users,
              listTitle: itemData.item.name,
              pageHeaderColor: itemData.item.priority,
              listProducts: itemData.item.products,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <FlatList
          keyExtractor={(item, index) => item.name}
          data={currentList}
          renderItem={renderListElement}
          showsVerticalScrollIndicator={false}
        />
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
