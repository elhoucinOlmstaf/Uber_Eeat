import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import RestaurantDetails from "./src/Screens/RestaurantDetails";

export default function NavigationRoutes() {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="RestaurantDetails">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
