import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const Foods = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    price: "17$",
    description: "very nice food",
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: "18$",
    description: "very nice food",
  },
  {
    name: "India's Grill",
    description: "very nice food",
    description: "very nice food",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: "12$",
  },
  {
    name: "India's Grill",
    description: "very nice food",
    description: "very nice food",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: "12$",
  },
];
export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Foods.map((food, index) => (
        <View key={index}>
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const FoodInfo = (props) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 19 }}>
        {props.food.name}
      </Text>
      <Text style={{ fontSize: 17 }}>{props.food.price}</Text>
      <Text style={{ fontSize: 17 }}>{props.food.description}</Text>
      <Text style={{ fontSize: 17 }}>{props.food.description}</Text>
    </View>
  );
};

const FoodImage = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.food.image_url }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};
