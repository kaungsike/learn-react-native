import { Link, useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

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
          href="/settings/john"
        >
          Go to settings user
        </Link>
        <Button
          title="Go to detail"
          onPress={() =>
            router.navigate({ pathname: "/detail", params: { id: 5 } })
          }
        />
      </View>
    </>
  );
}
