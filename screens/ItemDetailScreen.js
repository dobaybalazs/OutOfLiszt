import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Colors from "../constants/Colors";
import DefaultText from "../components/texts/DefaultText";
import { filters } from "../components/ItemFilter";

const ItemDetailScreen = (props) => {
  props.navigation.getParam("itemPageColor");
  const category = filters.find(
    (item) => item.name === props.navigation.getParam("itemCategoryId")
  );
  return (
    <View style={styles.screen}>
      <View
        style={{
          ...styles.board,
          ...{ backgroundColor: props.navigation.getParam("itemPageColor") },
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: props.navigation.getParam("itemImage"),
            }}
          />
        </View>
        <View style={styles.attribute}>
          <DefaultText style={styles.text}>
            Név: {props.navigation.getParam("itemName")}
          </DefaultText>
        </View>
        <View style={styles.attribute}>
          <DefaultText style={styles.text}>
            Mértékegység: {props.navigation.getParam("itemUnit")}
          </DefaultText>
        </View>
        <View style={styles.attribute}>
          <DefaultText style={styles.text}>
            Ár: {props.navigation.getParam("itemPrice")} Ft
          </DefaultText>
        </View>
        <View style={styles.attribute}>
          <DefaultText style={styles.text}>
            Kategória: {category.text}
          </DefaultText>
        </View>
      </View>
    </View>
  );
};

ItemDetailScreen.navigationOptions = (navData) => {
  const pageTitle = navData.navigation.getParam("itemPageTitle");
  const pageHeaderColor = navData.navigation.getParam("itemPageColor");
  return {
    headerTitle: pageTitle,
    headerStyle: {
      backgroundColor: pageHeaderColor,
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
    padding: 25,
  },
  board: {
    flex: 1,
    width: "95%",
    borderRadius: 30,
    elevation: 15,
    alignItems: "center",
    padding: 30,
    backgroundColor: Colors.redcolor,
  },
  imageContainer: {
    backgroundColor: Colors.whitecolor,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  attribute: {
    marginTop: 15,
    width: "100%",
    borderColor: Colors.whitecolor,
    borderBottomWidth: 3,
    padding: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 20,
  },
  text: {
    color: Colors.whitecolor,
    fontSize: 20,
  },
});

export default ItemDetailScreen;
