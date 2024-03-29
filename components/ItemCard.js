import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import * as listActions from "../store/actions/lists";
import * as productActions from "../store/actions/products";

const ItemCard = (props) => {
  if (props.isInList) {
    const allList = useSelector((state) => state.lists.userLists);
    const currentList = allList.find((list) => list.id === props.listId);
    const currentItem = currentList.products.find(
      (product) => product.id === props.itemId
    );

    const dispatch = useDispatch();
    const rightSwipe = () => {
      return (
        <View style={styles.deleteButtonContainer}>
          <TouchableOpacity
            activeOpacity={Sizes.activeopacity}
            onPress={() => {
              const returnedPair = {
                listId: props.listId,
                productId: props.itemId,
              };
              dispatch(listActions.deleteListItem(returnedPair));
            }}
          >
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
          <Swipeable
            renderRightActions={rightSwipe}
            containerStyle={{ flex: 1, width: "100%" }}
            waitFor
          >
            <TouchableOpacity activeOpacity={0.6} onPress={props.onSelect}>
              <View style={styles.item}>
                <View style={{ flex: 4 }}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: props.image,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    flex: 7,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <DefaultText style={styles.title}>{props.name}</DefaultText>
                  <DefaultText style={styles.quantity}>
                    {currentItem.count} {props.unit}
                  </DefaultText>
                </View>
                <View style={{ flex: 1 }}>
                  <QuantityButton
                    listId={props.listId}
                    productId={props.itemId}
                    isInStorage={props.isInList}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Swipeable>
        </View>
      </View>
    );
  }
  const allProducts = useSelector((state) => state.products.userProducts);
  const currentItem = allProducts.find(
    (product) => product.id === props.itemId
  );
  const dispatch = useDispatch();
  const rightSwipe = () => {
    return (
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity
          activeOpacity={Sizes.activeopacity}
          onPress={() => {
            dispatch(productActions.deleteUserProduct(props.itemId));
          }}
        >
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
        <Swipeable
          renderRightActions={rightSwipe}
          containerStyle={{ flex: 1, width: "100%" }}
          waitFor
        >
          <TouchableOpacity activeOpacity={0.6} onPress={props.onSelect}>
            <View style={styles.item}>
              <View style={{ flex: 4 }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: props.image,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  flex: 7,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <DefaultText style={styles.title}>{props.name}</DefaultText>
                <DefaultText style={styles.quantity}>
                  {currentItem.itemCount} {props.unit}
                </DefaultText>
              </View>
              <View style={{ flex: 1 }}>
                <QuantityButton
                  listId={props.listId}
                  productId={props.itemId}
                  isInStorage={props.isInList}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Swipeable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    width: 350,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 110,
    justifyContent: "center",
    backgroundColor: Colors.whitecolor,
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
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
