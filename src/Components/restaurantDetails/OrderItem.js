import { View, Text } from "react-native";
import React from "react";

export default function OrderItem({ item }) {
  const { price, name } = item;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderBottomColor: "#999",
        borderBottomWidth: 1,
      }}
    >
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
}
