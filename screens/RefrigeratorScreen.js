import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import TitleText from "../components/texts/DefaultText";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import ItemFilter from "../components/ItemFilter";
import ItemCard from "../components/ItemCard";

export const filters = [
  { name: 'husok', text: 'Húsok' },
  { name: 'toldseg', text: 'Zöldség' },
  { name: 'gyumolcs', text: 'Gyümölcs' },
  { name: 'tej', text: 'Tejtermékek' },
  { name: 'fagyasztott', text: 'Fagyasztott termékek' }
]

// export const filterNames = filters.map(f => f.name)

const NamedList = ({ name }) => {
  return (
    <View>
      <Text>
        {name}
      </Text>
    </View>
  )
}

const RefrigeratorScreen = (props) => {
  const [activeFilter, setActiveFilter] = React.useState(filters.husok)
  return (
    <View style={styles.screen}>
      <Header
        style={styles.header}
        source={require("../assets/headerimages/fridge.jpg")}
      >
        Hűtő
      </Header>
      <View style={styles.body}>
        <ItemFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <View style={styles.list}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          >
            {activeFilter === filters[0].name && <NamedList name={filters[0].text} />}
            {activeFilter === filters[1].name && <NamedList name={filters[1].text} />}
            {activeFilter === filters[2].name && <NamedList name={filters[2].text} />}
            {activeFilter === filters[3].name && <NamedList name={filters[3].text} />}
            {activeFilter === filters[4].name && <NamedList name={filters[4].text} />}

            {/* <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard /> */}
          </ScrollView>
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
