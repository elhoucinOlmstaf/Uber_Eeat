import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function ViewCart() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const ToUSD =
    "$" + total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  // format total to currency

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            position: "absolute",
            bottom: 10,
            zIndex: 1000,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                padding: 10,
                alignItems: "center",
                marginTop: 10,
                width: 230,
                borderRadius: 50,
                position: "relative",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>ViewCart  {ToUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
