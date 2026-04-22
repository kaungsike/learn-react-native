import { View, Text } from 'react-native';

type StaffProps = {
  name: string;
};

const Staff = ({ name }: StaffProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#11181C' }}>
        {name}
      </Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#11181C' }}>
        Hello Mobile Developer!
      </Text>
      <Staff name="John Doe" />
    </View>
  );
}