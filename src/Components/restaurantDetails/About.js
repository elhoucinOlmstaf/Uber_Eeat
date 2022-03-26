import { View, Text, Image } from "react-native";
import React from "react";

//getting restaurants info from yelp api
const YelpRestaurantInfo = {
  price: "$$",
  review: "1400",
  rating: "4.5",
  categories: [{ title: "American" }, { title: "Italian" }],
  title: "Beachside Bar Bar Bar",
  image:
    "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
};

const { price, review, categories, title, image, rating } = YelpRestaurantInfo;
const FormatCategories = categories.map((cat, index) => cat.title).join();
const description = `${FormatCategories} ${
  price ? "." + price : ""
}. ${rating}⭐.${review}`;

export default function About() {
  return (
    <View>
      <ImageComponent image={image} />
      <TitleComponent title={title} />
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
      fontWeight: "bold",
      marginHorizontal: 15,
      marginTop: 10,
    }}
  >
    {props.title}
  </Text>
);
const DescriptionComponent = (props) => (
  <Text style={{ fontSize: 17, marginHorizontal: 15, marginTop: 10 }}>
    {props.description}
  </Text>
);
