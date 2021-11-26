import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
} from "react-native";

import DefaultText from "../components/texts/DefaultText";
import InputField from "../components/InputField";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";
import * as productActions from "../store/actions/products";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../models/listitem";
import { filters } from "../components/ItemFilter";

const ProductAdditionScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const productNum = products.length;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [isColdStorage, setColdStorage] = useState(false);
  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView style={{ width: "85%" }} behavior={"height"}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.body}>
            <View style={styles.inputContainer}>
              <InputField
                title="Termék neve"
                value={name}
                onChange={(v) => setName(v)}
              />
              <InputField
                title="Termék képe"
                value={image}
                onChange={(v) => setImage(v)}
              />
              <InputField
                title="Termék kategória"
                value={category}
                onChange={(v) => setCategory(v)}
              />
              <InputField
                title="Termék egység"
                value={unit}
                onChange={(v) => setUnit(v)}
              />
              <InputField
                title="Termék ára"
                value={price}
                onChange={(v) => setPrice(v)}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <DefaultText
                  style={{ color: Colors.primarygray, fontSize: 20 }}
                >
                  Hűtőben tárolandó?
                </DefaultText>
                <Switch
                  trackColor={{
                    true: props.navigation.getParam("headerColor"),
                    false: Colors.primarygray,
                  }}
                  thumbColor={
                    isColdStorage
                      ? props.navigation.getParam("headerColor")
                      : Colors.secondarygray
                  }
                  value={isColdStorage}
                  onValueChange={(newValue) => setColdStorage(newValue)}
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              activeOpacity={Sizes.activeopacity}
              onPress={() => {
                if (
                  !(
                    name === "" ||
                    image === "" ||
                    category === "" ||
                    unit === "" ||
                    price === ""
                  )
                ) {
                  const newId = "l" + String(productNum + 1);
                  const filterType = filters.find(
                    (filter) => filter.text === category
                  );
                  const newCategoryId = filterType ? filterType.name : "egyeb";
                  const newProduct = new ListItem(
                    newId,
                    name,
                    image,
                    unit,
                    price,
                    newCategoryId,
                    isColdStorage,
                    1
                  );
                  dispatch(productActions.addToProducts(newProduct));
                }
                props.navigation.goBack();
              }}
            >
              <View
                style={{
                  ...styles.topButton,
                  ...{
                    backgroundColor: props.navigation.getParam("headerColor"),
                  },
                }}
              >
                <DefaultText style={styles.topButtonText}>
                  Hozzáadás
                </DefaultText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={Sizes.activeopacity}
              onPress={() => {
                props.navigation.goBack();
              }}
            >
              <View style={styles.bottomButton}>
                <DefaultText style={styles.bottomButtonText}>
                  Elvetés
                </DefaultText>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
ProductAdditionScreen.navigationOptions = (navData) => {
  const headerColor = navData.navigation.getParam("headerColor");
  return {
    headerTitle: "Add Product",
    headerStyle: {
      backgroundColor: headerColor,
    },
    headerTintColor: Colors.whitecolor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  body: {
    marginTop: 40,
    flex: 4,
    width: "100%",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
  },
  topButton: {
    width: 300,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 20,
  },
  topButtonText: {
    fontSize: Sizes.titlefontsize,
    color: Colors.whitecolor,
  },
  bottomButton: {
    width: 100,
    alignItems: "center",
  },
  bottomButtonText: {
    fontSize: Sizes.titlefontsize,
    color: Colors.primarygray,
  },
});

export default ProductAdditionScreen;
