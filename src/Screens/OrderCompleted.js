import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../../firebase";

export default function OrderCompleted({navigation , route}) {
  const [Items, setItems] = useState([]);
  const {restaurantName , ToUSD} = route.params;

  // getting selected items from firebase firestore
  const GetItems = () => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          setItems(doc.data().items);
        });
      });
  };


  useEffect(() => {
    GetItems();
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", flex: 1, justifyContent: "center" }}
    >
      {checkMarkAnimation()}
      <View style={{padding:10}}>
        <Text style={{ textAlign: "center", fontSize: 18 }}>
          You order  at {restaurantName} has been placed for {ToUSD}
        </Text>
      </View>
      <FlatList
        data={Items}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",

              flexDirection: "row",
              justifyContent: "space-between",

            }}
          >
            <View
              style={{
                width: 190,
                justifyContent: "space-evenly",
                margin: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                {item.name}
              </Text>
              <Text> {item.description}</Text>
              <Text>{item.price}</Text>
            </View>
            <View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  margin: 10,
                }}
                source={{ uri: item.image_url }}
              />
            </View>
          </View>
        )}
      />
      {CookingAnimation()}
    </SafeAreaView>
  );
}

const checkMarkAnimation = () => {
  return (
    <View style={{ alignItems: "center", alignSelf: "center" }}>
      <LottieView
        style={{
          height: 160,
        }}
        autoPlay

        source={require("../../assets/animations/checkMark.json")}
      />
    </View>
  );
};
const CookingAnimation = () => {
  return (
    <View style={{ alignItems: "center", alignSelf: "center" , marginBottom:10}}>
      <LottieView
        style={{
          height: 210,
          backgroundColor: "red",
        }}
        autoPlay
        loop
        source={require("../../assets/animations/cooking.json")}
      />
    </View>
  );
};
