import { Stack } from "expo-router";

export default function RootLayout() {
  const isLoggedIn = false;

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack.Protected>

      <Stack.Screen name="login" options={{ title: "Login" }} />
    </Stack>
  );
}
