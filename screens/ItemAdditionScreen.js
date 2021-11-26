import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AddItemCard from "../components/AddItemCard";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";
import AddButton from "../components/buttons/AddButton";

const ItemAdditionScreen = (props) => {
  const currentListId = props.navigation.getParam("listId");
  const currentItems = useSelector((state) => state.products.availableProducts);
  const renderListItem = (itemData) => {
    return (
      <AddItemCard
        img={itemData.item.img}
        name={itemData.item.name}
        itemId={itemData.item.id}
        listId={currentListId}
        onSelect={() => {
          return props.navigation.navigate({
            routeName: "ListItems",
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <FlatList
          numColumns={2}
          renderItem={renderListItem}
          data={currentItems}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.footer}>
        <AddButton
          color={props.navigation.getParam("headerColor")}
          onSelect={() => {
            props.navigation.navigate({
              routeName: "ProductAddition",
              params: {
                headerColor: props.navigation.getParam("headerColor"),
              },
            });
          }}
        />
      </View>
    </View>
  );
};

ItemAdditionScreen.navigationOptions = (navData) => {
  const headerColor = navData.navigation.getParam("headerColor");
  return {
    headerTitle: "Choose Item",
    headerStyle: {
      backgroundColor: headerColor,
    },
    headerTintColor: Colors.whitecolor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  body: {
    marginTop: 40,
    flex: 6,
    alignItems: "center",
  },
  footer: {
    flex: 2,
    justifyContent: "center",
  },
});

export default ItemAdditionScreen;
