import React, { useEffect, useState, useFocusEffect } from "react";
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
//import { useIsFocused } from '@react-navigation/native';

const ProfileScreen = (props) => {
  const [loading, setLoading] = useState(true)
  const [isEditable, setisEditable] = useState(false);
  const [name, setName] = useState("");
  const [user, setUser] = useState(undefined);

  //const isFocused = useIsFocused();

  useEffect(() => {
    //setTimeout(5000);
    const fetchUser = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUser(docSnap.data());
        setName(docSnap.data().username);
        setLoading(false);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    return fetchUser();
  }, []);

  

  //console.log("------------------");
  // console.log(user);
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
    //const [checked, setChecked] = useState((user !== undefined)?user.gender:'male');
    // const [localbirthDate, setlocalBirthDate] = useState(
    //   birthDate === "" ? "" : birthDate
    // );
    // const [localemailAddress, setlocalEmailAddress] = useState(
    //   emailAddress === "" ? "" : emailAddress
    // );
    //const newImg = useState(props.navigation.getParam("newUser"));
    const handleChange = async (localUser) => {
      // updateProfile(auth.currentUser, {
      //   displayName: localname });
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        username: localUser.username,
        age: localUser.age,
        gender: localUser.gender,
        //img: user.img
      });
    }
    
    useEffect(() => {
      const imgFromNav = props.navigation.getParam("pic");
      if (imgFromNav !== undefined) {
        if (user.img !== imgFromNav) {
          user.img = imgFromNav;
        }
        console.log("In Bodycnp",user.img);
      }
    }, []);
    


    if (isEditable) {
      return (
        <View
          style={{
            flex: 6,
            width: "100%",
            backgroundColor: "white",
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            alignItems: "center",
            justifyContent: "space-evenly",
            //padding: 25,
            paddingHorizontal: 50,
          }}
        >
          <TouchableOpacity
            activeOpacity={Sizes.activeopacity}
            style={{ marginTop: 15 }}
            onPress={() => {
              props.navigation.navigate({
                routeName: "Picture",
                params: { user: user }
              });
              //handleChange(localUser);
            }}
          >
            <View style={{...styles.Button, backgroundColor: Colors.primarygray, width: 200, height: 30,}}>
              <DefaultText style={{...styles.ButtonText, fontSize: Sizes.titlefontsize*0.8}}>
                Profikép szerkesztése
              </DefaultText>
            </View>
          </TouchableOpacity>
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
          
          <View style={{ flexDirection: 'row'}}>
                <View style={{ alignSelf: 'center' }}>
                  <Text>Férfi</Text>
                </View>
                <View>
                  <RadioButton
                    value="male"
                    status={ localUser.gender === 'male' ? 'checked' : 'unchecked' }
                    onPress={() => setlocalUser({ ...localUser, gender: 'male' })}
                  />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text>    Nő</Text>
                </View>
                <View>
                  <RadioButton
                    value="female"
                    status={ localUser.gender === 'female' ? 'checked' : 'unchecked' }
                    onPress={() => setlocalUser({ ...localUser, gender: 'female' })}
                  />
                </View>
          </View>
          <TouchableOpacity
            activeOpacity={Sizes.activeopacity}
            style={{ marginTop: 15 }}
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
            <DefaultText style={{...styles.text, fontSize: 18, color: Colors.primarygray}}>
              Életkor
            </DefaultText>
          <View>
            <DefaultText style={styles.text}>
              {(user.age)?user.age:" nincs megadva"}
            </DefaultText>
          </View>
        </View>
        <View style={styles.field}>
            <DefaultText style={{...styles.text, fontSize: 18, color: Colors.primarygray}}>
              Neme
            </DefaultText>
          <View>
            <DefaultText style={styles.text}>
            {((user.gender)?(user.gender=="male")?"Férfi":"Nő":" nincs megadva")}
            </DefaultText>
          </View>
        </View>
        <View style={styles.field}>
            <DefaultText style={{...styles.text, fontSize: 18, color: Colors.primarygray}}>
              E-mail-cím
            </DefaultText>
          <View>
            <DefaultText style={styles.text}>
              {user.email}
            </DefaultText>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={Sizes.activeopacity}
          style={{ marginTop: 15 }}
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
  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Loading User...</Text>
        <TouchableOpacity onPress={handleLogOut}>
          <View style={{ width: 200, alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: Colors.primarygray }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  else {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
          <Image
            style={styles.image}
            source={{
              uri: (user.img)?user.img:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
            }}
          />
          </TouchableOpacity>
        </View>
        <View>
          <DefaultText style={{ color: Colors.whitecolor, fontSize: 20 }}>
            {user.username}
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
      }
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
    elevation: 10,
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
    flex: 6,
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
    width: "70%",
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
