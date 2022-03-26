import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 25,
        justifyContent: "space-between",
        margin: 5,
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="user" text="Account" />
    </View>
  );
}
//icon component
const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={22}
        style={{
          alignSelf: "center",
          marginBottom: 5,
        }}
      />
      <Text>
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);
