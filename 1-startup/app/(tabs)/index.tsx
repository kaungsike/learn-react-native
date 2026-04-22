import { View, Text } from "react-native";

type StaffProps = {
  name: string;
  age?: number;
};

const Staff = ({ name, age  }: StaffProps) => {
  return (
    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#11181C" }}>
      {name} {age? `- ${age}` : ""}
    </Text>
  );
};

export default function HomeScreen() {
  return (
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
      <Staff name="John Doe" />
      <Staff name="Smith" age={21} />
    </View>
  );
}
