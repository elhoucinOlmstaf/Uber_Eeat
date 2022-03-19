import { View, Text } from "react-native";
import React from "react";
import {Ionicons , AntDesign } from "react-native-vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="search..."
        styles={{
          textInput: {
            height: 38,
            color: "#5d5d5d",
            fontSize: 16,
            backgroundColor: "#eee",
            marginTop: 7,
            borderRadius: 20,
            fontWeight: "bold",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            marginRight: 10,
            alignItems: "center",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={28} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              borderRadius: 50,
              marginRight: 8,
              alignItems:"center" ,padding:7
            }}
          >
           <AntDesign name="clockcircle" size={15} color="black" style={{marginRight: 6,}} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
