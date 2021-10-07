import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";

const ItemCard = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i2.wp.com/karissasvegankitchen.com/wp-content/uploads/2019/03/c-vegan-chocolate-bars-4-500x500.jpg",
          }}
          resizeMode="cover"
        />
        <Text style={styles.title}>Csokoládé</Text>
        <Text style={styles.quantity}>1 tábla</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.topButton}>
            <TouchableOpacity>
              <Ionicons
                name="md-add"
                size={Sizes.iconsize}
                color={Colors.primarygray}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomButton}>
            <TouchableOpacity>
              <Ionicons
                name="md-remove"
                size={Sizes.iconsize}
                color={Colors.primarygray}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 7,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    height: "40%",
  },
  image: {
    width: "30%",
    height: "90%",
    borderRadius: 5,
  },
  title: {
    fontSize: Sizes.fontsize,
  },
  quantity: {},
  buttonContainer: {
    width: 23,
    height: "90%",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    overflow: "hidden",
  },
  topButton: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primarygray,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ItemCard;
