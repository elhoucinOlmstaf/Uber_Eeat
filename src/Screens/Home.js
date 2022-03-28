import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabes from "../Components/Home/HeaderTabes";
import SearchBar from "../Components/Home/SearchBar";
import Categories from "../Components/Home/Categories";
import BottomTabs from "../Components/Home/BottomTabs";
import RestaurantItems, {
  localRestaurants,
} from "../../src/Components/Home/RestaurantItems";
const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [ActiveTab, setActiveTab] = useState("Pickup");
  const YELP_API_KEY =
    "OqCNbW87203R_q2rPPtyrI4fJ2zkIybf7iriNp9yN3v2kjWMqtgKb-lQrh28YARXvEb_R4sxJPemgS57vYgf_MaDg0oCWXi5ezgn7qt85lDgYITXHzbv1L-A5EH8X3Yx";

  const FetchDataFromYelp = async () => {
    const Yelp_API = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(Yelp_API, apiOptions)
      .then((response) => response.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            // business.transactions.include(ActiveTab.toLocaleLowerCase)
            business.transactions.includes(ActiveTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    FetchDataFromYelp();
  }, [ActiveTab]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabes ActiveTab={ActiveTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>

      <ScrollView>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1.5} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
