import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }}>
        Home Screen
      </Text>
      <Link
        style={{ fontSize: 15, fontWeight: "bold", color: "#11181C" }}
        href={"/login"}
      >
        Go to login page
      </Link>
      <Link
        style={{ fontSize: 15, fontWeight: "bold", color: "#11181C" }}
        href={"/profile"}
      >
        Go to profile page
      </Link>
            <Link
        style={{ fontSize: 15, fontWeight: "bold", color: "#11181C" }}
        href="(tabs)"
      >
        Go to tabs
      </Link>
    </View>
  );
};

export default Index;
