import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import DefaultText from "../../components/texts/DefaultText";
import InputField from "../../components/InputField";
import { auth, db } from "../../firebaseconfig";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { USERS } from "../../data/dummy-data";
import { RadioButton } from 'react-native-paper';

const ProfileScreen = () => {

  const [isEditable, setisEditable] = useState(false);
  const [name, setName] = useState("");
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    
    const fetchUser = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUser(docSnap.data());
        setName(docSnap.data().username);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    return fetchUser();
  }, []);
  console.log(user);
  // const [birthDate, setBirthDate] = useState("");
  // const [emailAddress, setEmailAddress] = useState("");
  // const fetchUser = async () => {
  //   const docRef = doc(db, "users", auth.currentUser.uid);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setUser(docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }
  // fetchUser();
  //useEffect( () => { fetchUser(user) }, [user]);

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
    const [localUser, setlocalUser] = useState(user);
    const [checked, setChecked] = useState((user !== undefined)?user.gender:'male');
    // const [localbirthDate, setlocalBirthDate] = useState(
    //   birthDate === "" ? "" : birthDate
    // );
    // const [localemailAddress, setlocalEmailAddress] = useState(
    //   emailAddress === "" ? "" : emailAddress
    // );

    const handleChange = async (localUser) => {
      // updateProfile(auth.currentUser, {
      //   displayName: localname });
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        username: localUser.username,
        age: localUser.age,
        gender: localUser.gender
      });
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
            value={localUser.username}
            onChange={(v) => {
              setlocalUser({ ...localUser, username: v });
            }}
          />
          <InputField
            placeholder="Enter age"
            value={localUser.age}
            onChange={(v) => {
              setlocalUser({ ...localUser, age: v });
            }}
          />
          {/* <View>
          <DefaultText style={styles.text}>
            Neme: 
          </DefaultText>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                <View style={{ flex: 4, alignSelf: 'center' }}>
                  <Text>First</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <RadioButton
                    value="first"
                    onPress={() => setChecked('first')}
                  />
                </View>
          </View>
            <DefaultText>
            férfi: 
              <RadioButton
                value="male"
                status={ checked === 'male' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('male')}
              />
            </DefaultText>
            <DefaultText>
              nő: 
              <RadioButton
                value="female"
                status={ checked === 'female' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('female')}
              />
            </DefaultText>
          </View> */}
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text>Férfi</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <RadioButton
                    value="male"
                    status={ localUser.gender === 'male' ? 'checked' : 'unchecked' }
                    onPress={() => setlocalUser({ ...localUser, gender: 'male' })}
                  />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text>Nő</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <RadioButton
                    value="female"
                    status={ localUser.gender === 'female' ? 'checked' : 'unchecked' }
                    onPress={() => setlocalUser({ ...localUser, gender: 'female' })}
                  />
                </View>
          </View>
          <TouchableOpacity
            activeOpacity={Sizes.activeopacity}
            style={{ marginTop: 35 }}
            onPress={() => {
              handleChange(localUser);
              setUser(localUser);
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
        {/* <View style={styles.field}>
          <DefaultText style={styles.text}>Név:  {user.username}</DefaultText>
        </View> */}
        <View style={styles.field}>
          <DefaultText style={styles.text}>
            Életkor:  {(user !== undefined && user.age)?user.age:" nincs megadva"}
          </DefaultText>
        </View>
        <View style={styles.field}>
          <DefaultText style={styles.text}>
            Neme:  {(user !== undefined && user.gender)?user.gender:" nincs megadva"}
          </DefaultText>
        </View>
        <View style={styles.field}>
          <DefaultText style={styles.text}>
            E-mail-cím:  {user !== undefined && user.email}
          </DefaultText>
        </View>
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
              uri: (user !== undefined && user.img)?user.img:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
            }}
          />
        </View>
        <View>
          <DefaultText style={{ color: Colors.whitecolor, fontSize: 20 }}>
            {(user !== undefined)?user.username:"Felhasználó"}
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
    width: 110,
    height: 110,
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
