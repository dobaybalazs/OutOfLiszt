import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import Colors from "../../constants/Colors";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import ItemFilter, { filters } from "../../components/ItemFilter";
import { LISTITEMS } from "../../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";

const RefrigeratorScreen = (props) => {
  const NamedList = (itemData) => {
    return (
      <ItemCard
        name={itemData.item.name}
        image={itemData.item.img}
        unit={itemData.item.unit}
      />
    );
  };
  const [activeFilter, setActiveFilter] = useState(filters.husok);
  return (
    <View style={styles.screen}>
      <Header
        style={styles.header}
        source={require("../../assets/headerimages/fridge.jpg")}
      >
        Hűtő
      </Header>
      <View style={styles.body}>
        <ItemFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <View style={styles.list}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            renderItem={NamedList}
            data={LISTITEMS.filter((item) => {
              return (
                activeFilter === item.categoryId && item.coldStorage === true
              );
            })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    padding: 5,
  },
  header: {
    flex: 3,
  },
  body: {
    flex: 5,
    width: "100%",
  },
  list: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.whitecolor,
  },
});

export default RefrigeratorScreen;
