import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTabes = (props) => {

  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <HeaderButtuns
        title="Delivery"
        bc="black"
        tc="white"
        ActiveTab={props.ActiveTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButtuns
        title="Pickup"
        bc="white"
        tc="black"
        ActiveTab={props.ActiveTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

const HeaderButtuns = (props) => {

  return (
    <View>
      <TouchableOpacity
        onPress={() => props.setActiveTab(props.title)}
        style={{
          backgroundColor: props.ActiveTab === props.title ? "black" : "white",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            color: props.ActiveTab === props.title ? "white" : "black",
            fontSize: 15,
            fontWeight: "700",
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabes;
