import { View, Text } from "react-native";
import React from "react";
import About from "../Components/restaurantDetails/About";
import MenuItem from "../Components/restaurantDetails/MenuItem";
import { SafeAreaView } from "react-native-safe-area-context";
import ViewCart from "../Components/restaurantDetails/ViewCart";
import { Divider } from "react-native-elements";

//foods

export default function RestaurantDetails({ route }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.5} style={{ marginVertical: 10 }} />
      <MenuItem restaurantName={route.params.name} />
      <ViewCart />
    </SafeAreaView>
  );
}
