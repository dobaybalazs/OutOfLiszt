import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import ItemFilter, { filters } from "../../components/ItemFilter";
import Colors from "../../constants/Colors";
import { LISTITEMS } from "../../data/dummy-data";

const PantryScreen = (props) => {
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
        source={require("../../assets/headerimages/pantry.jpg")}
      >
        Kamra
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
                activeFilter === item.categoryId && item.coldStorage === false
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

export default PantryScreen;
