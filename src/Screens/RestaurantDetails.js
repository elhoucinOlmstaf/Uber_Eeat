import { View, Text } from "react-native";
import React from "react";
import About from "../Components/restaurantDetails/About";
import MenuItem from "../Components/restaurantDetails/MenuItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements";


//foods

export default function RestaurantDetails() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <About />
      <Divider width={1.5} style={{ marginVertical: 10 }} />
      <MenuItem />
    </SafeAreaView>
  );
}
