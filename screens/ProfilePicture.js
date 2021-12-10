import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import DefaultText from "../components/texts/DefaultText";
import InputField from "../components/InputField";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc, updateDoc } from 'firebase/firestore';


const ProfilePicture = (props) => {
    const [user, setUser] = useState(props.navigation.getParam("user"));

    const handleChange = async (user) => {
        // updateProfile(auth.currentUser, {
        //   displayName: localname });
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          img: user.img,
        });
      }
    console.log("In Picture",user.img);

      // https://lh3.googleusercontent.com/proxy/zP3tsJjX2fLK0iJFwgd3NL6mO_P8k2ApCmaIodj1HUH_hLf9oALCeAF4NaRcktLDComjmrrzy2Tj4jW1FAbjr0sQYHR-euv84LhfudY7b4ctecY
    return (
        <View style={styles.screen}>
        
            <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{
                uri: (user.img)?user.img:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
                }}
            />
            </View>
            <View>
            <DefaultText style={{ color: Colors.whitecolor, fontSize: 20 }}>
                {user.username}
            </DefaultText>
            </View>
            <View style={{width: "90%"}}>
                <InputField
                    placeholder="Enter picture's URL"
                    value={user.img}
                    onChange={(v) => {
                    setUser({ ...user, img: v });
                    }}
                />
                
            </View>
            <TouchableOpacity
                    activeOpacity={Sizes.activeopacity}
                    style={{ marginTop: 15, justifyContent: 'center', alignContent: 'center' }}
                    onPress={() => {
                      console.log(user)
                      handleChange(user);  
                      setUser(user);                      
                      props.navigation.navigate({
                        routeName: "Profile",
                        params: { pic: user.img }
                      });
                    }}
                    >
                    <View style={{...styles.Button, backgroundColor: Colors.primarygray, width: 200, height: 50,}}>
                    <DefaultText style={{...styles.ButtonText, fontSize: Sizes.titlefontsize*0.8}}>
                        Profikép mentése
                    </DefaultText>
                    </View>
                </TouchableOpacity>
        
        </View>
    );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bluecolor,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    //flex: 3,
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
    //flex: 1,
    width: "90%",
    height: "25%",
    backgroundColor: "white",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    alignItems: "center",
    marginTop: 15,
    //justifyContent: "space-evenly",
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
