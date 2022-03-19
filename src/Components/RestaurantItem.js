import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import React from "react";
export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];
const RestaurantItem = () => {
    console.log(localRestaurants[2].name)
  return (
    <TouchableOpacity activeOpacity={0.8}>
      {localRestaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#fff",
            marginTop: 10,
            padding: 12,
          }}
        >
          <RestaurantImage image={restaurant.localImage} />
          <RestaurantInfo
            name={restaurant.name}
            rating={restaurant.rating}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
};
const RestaurantImage = (props) => {
  return (
    <View>
      <Image
        source={require("../../assets/images/bg2.jpg")}
        style={{ width: 335, height: 180 }}
      />
      <MaterialCommunityIcons
        name="heart-outline"
        size={25}
        color="#fff"
        style={{ position: "absolute", right: 15, top: 10 }}
      />
    </View>
  );
};
const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        {props.name}
        </Text>
        <Text style={{ fontSize: 13, color: "grey" }}>30-45 min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          width: 30,
          height: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>4.5</Text>
      </View>
    </View>
  );
};
export default RestaurantItem;

const styles = StyleSheet.create({});
