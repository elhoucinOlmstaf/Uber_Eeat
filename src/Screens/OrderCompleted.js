import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../../firebase";

export default function OrderCompleted() {
  const [Items, setItems] = useState([]);
  // getting selected items from firebase firestore
  const GetItems = () => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("orders").orderBy("createdAt", "desc").limit(1).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        setItems(doc.data().items);
      });

    });
  };
  console.log(Items);
  useEffect(() => {
    GetItems();
  }, []);

  return (
    <SafeAreaView>
      {checkMarkAnimation()}
      <View>
        <Text style={{ textAlign: "center", fontSize: 18 }}>
          You order has been processed
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
              backgroundColor: "green",
            }}
          >
            {/* <Text>User ID {item.description}</Text> */}
            <Text>User Name: {item.name}</Text>
          </View>
        )}
      />
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
        loop
        source={require("../../assets/animations/checkMark.json")}
      />
    </View>
  );
};
