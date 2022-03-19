import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

const Categories = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginTop: 7,
        padding: 10,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 23 }}>
            <Image
              style={{ width: 50, height: 40, resizeMode: "contain" }}
              source={item.image}
            />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
