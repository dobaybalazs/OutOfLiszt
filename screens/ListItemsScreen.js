import React, { useCallback, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/buttons/HeaderButton";
import Colors from "../constants/Colors";
import UserButton from "../components/buttons/UserButton";
import AddUserButton from "../components/buttons/AddUserButton";
import AddButton from "../components/buttons/AddButton";
import DefaultText from "../components/texts/DefaultText";
import DeleteButton from "../components/buttons/DeleteButton";
import ItemCard from "../components/ItemCard";
import { USERS } from "../data/dummy-data";
import { useDispatch } from "react-redux";
import * as listActions from "../store/actions/lists";

const ListItemsScreen = (props) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.availableProducts);
  const currentList = useSelector((state) =>
    state.lists.userLists.find(
      (list) => list.id === props.navigation.getParam("listId")
    )
  );
  const toggleDeleteHandler = useCallback(() => {
    props.navigation.popToTop();
    dispatch(listActions.deleteList(currentList.id));
  }, [dispatch, currentList]);
  useEffect(() => {
    props.navigation.setParams({ toggleDelete: toggleDeleteHandler });
  }, [toggleDeleteHandler]);
  if (currentList) {
    const usersList = currentList.users;
    const renderListItem = (itemData) => {
      const currentProduct = allProducts.find(
        (item) => item.id === itemData.item
      );
      if (!currentProduct) {
        return null;
      }
      return (
        <ItemCard
          name={currentProduct.name}
          image={currentProduct.img}
          unit={currentProduct.unit}
          quantity={currentProduct.itemCount}
          itemId={currentProduct.id}
          listId={currentList.id}
          isInList={true}
          onSelect={() => {
            props.navigation.navigate({
              routeName: "ItemDetails",
              params: {
                itemName: currentProduct.name,
                itemImage: currentProduct.img,
                itemUnit: currentProduct.unit,
                itemPrice: currentProduct.price,
                itemCategoryId: currentProduct.categoryId,
                itemPageColor: props.navigation.getParam("pageHeaderColor"),
                itemPageTitle: props.navigation.getParam("listTitle"),
              },
            });
          }}
        />
      );
    };
    const renderUser = (itemData) => {
      const currentUser = USERS.find((user) => user.id === itemData.item);
      if (!currentUser) {
        return null;
      }
      return (
        <UserButton
          name={currentUser.username}
          style={styles.user}
          onSelect={() => {
            const pairedKeys = {
              listId: currentList.id,
              userId: currentUser.id,
            };
            dispatch(listActions.deleteUser(pairedKeys));
          }}
        />
      );
    };
    return (
      <View style={styles.screen}>
        <View style={styles.usersContainer}>
          <View style={styles.users}>
            <View>
              <FlatList
                keyExtractor={(item, index) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={usersList}
                renderItem={renderUser}
                style={{ marginHorizontal: 15 }}
              />
            </View>
            <View style={{ padding: 15 }}>
              <AddUserButton
                color={Colors.primarygray}
                onSelect={() => {
                  props.navigation.navigate({
                    routeName: "UserSearch",
                    params: {
                      listId: props.navigation.getParam("listId"),
                    },
                  });
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.listheaderContainer}>
            <View style={styles.listheader}>
              <DefaultText style={{ fontSize: 18 }}>Termékek</DefaultText>
              <DeleteButton
                onSelect={() => {
                  dispatch(
                    listActions.deleteAllListItems(
                      props.navigation.getParam("listId")
                    )
                  );
                }}
              />
            </View>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              renderItem={renderListItem}
              data={currentList.products}
              keyExtractor={(item, index) => item}
              style={{ marginHorizontal: 15 }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <AddButton
              color={props.navigation.getParam("pageHeaderColor")}
              onSelect={() => {
                props.navigation.navigate({
                  routeName: "ItemAddition",
                  params: {
                    headerColor: props.navigation.getParam("pageHeaderColor"),
                    listId: props.navigation.getParam("listId"),
                  },
                });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
  return <View></View>;
};

ListItemsScreen.navigationOptions = (navData) => {
  const pageTitle = navData.navigation.getParam("listTitle");
  const pageHeaderColor = navData.navigation.getParam("pageHeaderColor");
  const toggleDelete = navData.navigation.getParam("toggleDelete");
  return {
    headerTitle: pageTitle,
    headerStyle: {
      backgroundColor: pageHeaderColor,
    },
    headerTintColor: Colors.whitecolor,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Done" iconName="checkmark" onPress={toggleDelete} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 2,
    width: "100%",
  },
  usersContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.whitecolor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  users: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  user: {
    marginHorizontal: 5,
    marginVertical: 15,
  },
  body: {
    flex: 8,
    width: "100%",
  },
  listheaderContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  listheader: {
    flex: 1,
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    flex: 7,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.whitecolor,
  },
  buttonContainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    padding: 5,
  },
});

export default ListItemsScreen;
