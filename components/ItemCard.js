import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Entypo } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import DefaultText from "./texts/DefaultText";
import QuantityButton from "./buttons/QuantityButton";

const ItemCard = (props) => {
  const rightSwipe = (props) => {
    return (
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity activeOpacity={Sizes.activeopacity}>
          <View style={styles.deleteButton}>
            <Entypo name="cross" size={35} color={Colors.whitecolor} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.topContainer}>
      <View style={styles.itemContainer}>
        <Swipeable renderRightActions={rightSwipe} waitFor>
          <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://i2.wp.com/karissasvegankitchen.com/wp-content/uploads/2019/03/c-vegan-chocolate-bars-4-500x500.jpg",
                }}
                resizeMode="cover"
              />
              <DefaultText style={styles.title}>Csokoládé</DefaultText>
              <DefaultText style={styles.quantity}>1 tábla</DefaultText>
              <QuantityButton />
            </View>
          </TouchableOpacity>
        </Swipeable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: 110,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 7,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 3,
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 90,
    borderRadius: 5,
    marginRight: 25,
  },
  title: {
    fontSize: Sizes.titlefontsize,
    marginRight: 25,
  },
  quantity: {
    marginRight: 25,
    fontSize: Sizes.regularfontsize,
  },
  deleteButtonContainer: {
    height: "100%",
    borderTopEndRadius: 7,
    borderBottomEndRadius: 7,
    overflow: "hidden",
  },
  deleteButton: {
    height: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default ItemCard;
