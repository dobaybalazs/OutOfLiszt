import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import DefaultText from "./texts/DefaultText";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as listActions from "../store/actions/lists";

const AddItemCard = (props) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      activeOpacity={Sizes.activeopacity}
      onPress={() => {
        const returnedPair = {
          listId: props.listId,
          productId: props.itemId,
        };
        dispatch(listActions.addToListProducts(returnedPair));
      }}
    >
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.image}>
            <Image
              source={{ uri: props.img }}
              style={{ width: 100, height: 90 }}
            />
          </View>
          <DefaultText style={styles.text}>{props.name}</DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 7,
    margin: 10,
    width: 150,
  },
  image: {
    overflow: "hidden",
    borderRadius: 7,
  },
  content: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: Colors.secondarygray,
  },
});

export default AddItemCard;
