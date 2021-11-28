import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import DefaultText from "../../components/texts/DefaultText";
import InputField from "../../components/InputField";
import { auth } from "../../firebaseconfig";
import { updateProfile } from "firebase/auth";


const ProfileScreen = () => {
  let userName = auth.currentUser.displayName;

  const [isEditable, setisEditable] = useState(false);
  const [name, setName] = useState(userName);
  // const [birthDate, setBirthDate] = useState("");
  // const [emailAddress, setEmailAddress] = useState("");

  const handleLogOut = () => {
    auth.signOut()
      .then(() => {
        // Signed out 
        console.log('Logged out');
      })
      .catch(error => alert(error.message));
    
  };

  const Bodycmp = () => {
    const [localname, setlocalName] = useState(name === "" ? "" : name);

    // const [localbirthDate, setlocalBirthDate] = useState(
    //   birthDate === "" ? "" : birthDate
    // );
    // const [localemailAddress, setlocalEmailAddress] = useState(
    //   emailAddress === "" ? "" : emailAddress
    // );

    const handleChange = (localname) => {
      updateProfile(auth.currentUser, {
        displayName: localname });
    }
    
    if (isEditable) {
      return (
        <View
          style={{
            flex: 8,
            width: "100%",
            backgroundColor: "white",
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: 25,
          }}
        >
          <InputField
            placeholder="Enter name"
            value={localname}
            onChange={(v) => {
              setlocalName(v);
            }}
          />
          {/* <InputField
            placeholder="Enter birthdate"
            value={localbirthDate}
            onChange={(v) => {
              setlocalBirthDate(v);
            }}
          />
          <InputField
            placeholder="Enter email address"
            value={localemailAddress}
            onChange={(v) => {
              setlocalEmailAddress(v);
            }}
          /> */}
          <TouchableOpacity
            activeOpacity={Sizes.activeopacity}
            style={{ marginTop: 35 }}
            onPress={() => {
              setName(localname === "" ? name : localname);
              handleChange(localname);
              // setBirthDate(localbirthDate === "" ? birthDate : localbirthDate);
              // setEmailAddress(
              //   localemailAddress === "" ? emailAddress : localemailAddress
              // );
              setisEditable(!isEditable);
            }}
          >
            <View style={styles.Button}>
              <DefaultText style={styles.ButtonText}>
                Profil adatok mentése
              </DefaultText>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.body}>
        <View style={styles.field}>
          <DefaultText style={styles.text}>Név: {name}</DefaultText>
        </View>
        {/* <View style={styles.field}>
          <DefaultText style={styles.text}>
            Születési dátum: {birthDate}
          </DefaultText>
        </View>
        <View style={styles.field}>
          <DefaultText style={styles.text}>
            E-mail-cím: {emailAddress}
          </DefaultText>
        </View> */}
        <TouchableOpacity
          activeOpacity={Sizes.activeopacity}
          style={{ marginTop: 35 }}
          onPress={() => setisEditable(!isEditable)}
        >
          <View style={styles.Button}>
            <DefaultText style={styles.ButtonText}>
              Profil szerkesztése
            </DefaultText>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

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
            {name}
          </DefaultText>
        </View>
      </View>
      <Bodycmp />
      <View
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "#fff",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleLogOut}>
          <View style={{ width: 200, alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: Colors.primarygray }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={handleLogOut}
          style={styles.buttonLogOut}
        >
          <Text style={styles.buttonTextLogOut}>Sign Out</Text>
        </TouchableOpacity> */}
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
    fontSize: 18,
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
  buttonLogOut: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonTextLogOut: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
