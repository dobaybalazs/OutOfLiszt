import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Sizes from "../constants/Sizes";
import DefaultText from "./texts/DefaultText";
import Colors from "../constants/Colors";

const ItemFilter = () => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: Colors.filtergray }}
      >
        <View>
          <TouchableOpacity activeOpacity={Sizes.activeopacity}>
            <View style={styles.textContainer}>
              <DefaultText style={styles.text}>Húsok</DefaultText>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={Sizes.activeopacity}>
            <View style={styles.textContainer}>
              <DefaultText style={styles.text}>Zöldség</DefaultText>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={Sizes.activeopacity}>
            <View style={styles.textContainer}>
              <DefaultText style={styles.text}>Gyümölcs</DefaultText>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={Sizes.activeopacity}>
            <View style={styles.textContainer}>
              <DefaultText style={styles.text}>Tejtermékek</DefaultText>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={Sizes.activeopacity}>
            <View style={styles.textContainer}>
              <DefaultText style={styles.text}>Fagyasztott ételek</DefaultText>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: Sizes.regularfontsize * 1.25,
    color: Colors.secondarygray,
  },
  textContainer: {
    margin: 10,
  },
});

export default ItemFilter;
