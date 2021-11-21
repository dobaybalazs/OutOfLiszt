import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import DefaultText from "../../components/texts/DefaultText";
import { signOut } from "firebase/auth";
import { auth } from "../../App";

function logout() {
  return signOut(auth).then(() => {
    // Sign-out successful.
  });
}

const ProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
            }}
          />
        </View>
        <View>
          <DefaultText style={{ color: Colors.whitecolor, fontSize: 20 }}>
            Felhasználónév
          </DefaultText>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.field}>
          <DefaultText style={styles.text}>Név</DefaultText>
        </View>
        <View style={styles.field}>
          <DefaultText style={styles.text}>Életkor</DefaultText>
        </View>
        <View style={styles.field}>
          <DefaultText style={styles.text}>Nem</DefaultText>
        </View>
        <TouchableOpacity
          activeOpacity={Sizes.activeopacity}
          style={{ marginTop: 35 }}
        >
          <View style={styles.Button}>
            <DefaultText style={styles.ButtonText}>
              Profil szerkesztése
            </DefaultText>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "#fff",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={logout}>
          <View style={{ width: 200, alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: Colors.primarygray }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bluecolor,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    elevation: 3,
    width: 110,
    height: 110,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 120,
  },
  header: {
    flex: 4,
    width: "100%",
    backgroundColor: Colors.bluecolor,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  body: {
    flex: 8,
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  field: {
    marginVertical: 10,
    borderBottomColor: Colors.primarygray,
    borderBottomWidth: 1,
    width: "75%",
    paddingBottom: 5,
  },
  text: {
    fontSize: 20,
    color: Colors.secondarygray,
  },
  Button: {
    width: 300,
    backgroundColor: Colors.bluecolor,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  ButtonText: {
    fontSize: Sizes.titlefontsize,
    color: Colors.whitecolor,
  },
});
