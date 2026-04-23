import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Button } from "react-native";

type StaffProps = {
  name: string;
  age?: number;
};

const Staff = ({ name, age }: StaffProps) => {
  const [isDelete, setIsDelete] = useState(false);

  return (
    <>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#11181C",
          textDecorationLine: isDelete ? "line-through" : "none",
        }}
      >
        {name} {age ? `- ${age}` : ""}
      </Text>
      <Button
        title={isDelete ? "Undo" : "Delete"}
        onPress={() => setIsDelete((prev) => !prev)}
      />
    </>
  );
};

export default function HomeScreen() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }}>
          Hello Mobile Developer!
        </Text>
        <Link style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }} href="/(tabs)/(home)/detail">Home Detail</Link>
        <Link style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }} href="/(tabs)/profile/setting">Home Profile Setting</Link>
        <Staff name="John Doe" />
        <Staff name="Smith" age={21} />
      </View>
    </>
  );
}
