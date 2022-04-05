import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../../firebase";
export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const ToUSD =
    "$" + total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  // add items to firebase
  const addToFirebase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName,
      createdAt: new Date(),
    });
    setModalVisible(false);
    navigation.navigate("OrderCompleted", {
      restaurantName: restaurantName,
      ToUSD: ToUSD,
    });
  };

  // modal content
  const ModalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            padding: 20,
            height: "60%",
            borderWidth: 1,
          }}
        >
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              {restaurantName}
            </Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>SubTotal</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{ToUSD}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => addToFirebase()}
              style={{
                backgroundColor: "#000",
                alignSelf: "center",
                padding: 10,
                marginTop: 20,
                width: "50%",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#fff",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Check Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(modalVisible);
        }}
      >
        {ModalContent()}
      </Modal>
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
              onPress={() => setModalVisible(true)}
              style={{
                backgroundColor: "#000",
                padding: 10,
                alignItems: "center",
                marginTop: 10,
                width: "50%",
                borderRadius: 50,
                position: "relative",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>
                ViewCart {ToUSD}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
