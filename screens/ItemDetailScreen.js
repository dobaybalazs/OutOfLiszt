import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../constants/Colors";
import DefaultText from "../components/texts/DefaultText";

const ItemDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.board}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://i2.wp.com/karissasvegankitchen.com/wp-content/uploads/2019/03/c-vegan-chocolate-bars-4-500x500.jpg",
            }}
          />
        </View>
        <View style={styles.attribute}>
          <DefaultText style={styles.text}>Név: Csokoládé</DefaultText>
        </View>
        <View style={styles.attribute}>
          <DefaultText style={styles.text}>Mértékegység: tábla</DefaultText>
        </View>
        <View style={styles.attribute}>
          <DefaultText style={styles.text}>Ár: 250 Ft</DefaultText>
        </View>
        <View style={styles.attribute}>
          <DefaultText style={styles.text}>Kategória: Édesség</DefaultText>
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
    backgroundColor: "blue",
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
