import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Sizes from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import { useDispatch } from "react-redux";
import * as listActions from "../../store/actions/lists";
import * as productActions from "../../store/actions/products";

const QuantityButton = (props) => {
  const dispatch = useDispatch();
  return (
    <View style={{ ...styles.buttonContainer, ...props.style }}>
      <View style={styles.topButton}>
        <TouchableOpacity
          onPress={() => {
            if (props.isInStorage) {
              const pairedKeys = {
                listId: props.listId,
                itemId: props.productId,
              };
              dispatch(listActions.incrementItemCount(pairedKeys));
            } else {
              dispatch(productActions.incrementProductCount(props.productId));
            }
          }}
        >
          <Ionicons
            name="md-add"
            size={Sizes.iconsize}
            color={Colors.secondarygray}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButton}>
        <TouchableOpacity
          onPress={() => {
            if (props.isInStorage) {
              const pairedKeys = {
                listId: props.listId,
                itemId: props.productId,
              };

              dispatch(listActions.decreaseItemCount(pairedKeys));
            } else {
              dispatch(productActions.decreaseProductCount(props.productId));
            }
          }}
        >
          <Ionicons
            name="md-remove"
            size={Sizes.iconsize}
            color={Colors.secondarygray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 23,
    height: 85,
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

export default QuantityButton;
