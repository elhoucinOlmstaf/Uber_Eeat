import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ViewCart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        bottom:30,
        zIndex:1000
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            padding: 10,
            alignItems: "center",
            marginTop: 10,
            width: 300,
            borderRadius: 50,
            position: "relative",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 25 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
