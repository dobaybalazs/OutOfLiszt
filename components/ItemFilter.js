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
import { filters } from "../screens/RefrigeratorScreen";

const ItemFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: Colors.filtergray }}
      >
        {filters.map(f => (
          <FilterButton
            key={f.name}
            name={f.name}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          >
            {f.text}
          </FilterButton>
        ))}
      </ScrollView>
    </View>
  );
};

const FilterButton = ({ name, activeFilter, setActiveFilter, children }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={Sizes.activeopacity}
        onPress={() => setActiveFilter(name)}
      >
        <View style={styles.textContainer}>
          <DefaultText
            style={name === activeFilter ? styles.activeText : styles.text}
          >
            {children}
          </DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  )

}



const styles = StyleSheet.create({
  text: {
    fontSize: Sizes.regularfontsize * 1.25,
    color: Colors.secondarygray,
  },
  activeText: {
    fontSize: Sizes.regularfontsize * 1.25,
    color: 'black',
    //fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  textContainer: {
    margin: 10,
  },
});

export default ItemFilter;
