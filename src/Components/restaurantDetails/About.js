import { View, Text, Image } from "react-native";
import React from "react";

//getting restaurants info from yelp api

export default function About(props) {
  const { name, image, price, review, rating, categories } = props.route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${review}+)`;
  console.log();
  return (
    <View>
      <ImageComponent image={image} />
      <TitleComponent name={name} />
      <DescriptionComponent description={description} />
    </View>
  );
}

const ImageComponent = (props) => (
  <Image style={{ width: "100%", height: 200 }} source={{ uri: props.image }} />
);
const TitleComponent = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
const DescriptionComponent = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
