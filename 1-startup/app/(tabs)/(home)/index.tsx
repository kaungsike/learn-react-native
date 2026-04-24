import { Link } from "expo-router";
import { View } from "react-native";

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
        <Link
          style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }}
          href="/detail?id=10"
        >
          Home Detail
        </Link>
        <Link
          style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }}
          href="/10"
        >
          Product Detail
        </Link>
        <Link
          style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }}
          href="/settings/David"
        >
          Setting
        </Link>
      </View>
    </>
  );
}
