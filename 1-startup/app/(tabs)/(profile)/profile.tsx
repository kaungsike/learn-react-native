import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }}>Profile</Text>
      <Link style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }} href="/setting">Setting</Link>
      <Link style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }} href="/detail">Detail</Link>
      <Link style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }} href="/(tabs)/(home)">Home </Link>
    </View>
  );
}