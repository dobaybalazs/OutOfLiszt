import React from "react";
import { View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const SearchButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onSelect}>
      <View>
        <Ionicons name="search-outline" size={24} color={props.color} />
      </View>
    </TouchableOpacity>
  );
};

export default SearchButton;
