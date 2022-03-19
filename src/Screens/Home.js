import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabes from "../Components/HeaderTabes";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantItem from "../Components/RestaurantItem";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabes />
        <SearchBar />
      </View>

      <ScrollView>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
