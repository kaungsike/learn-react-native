import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const UserSettings = () => {

    const {username} = useLocalSearchParams();

  return (
    <View>
      <Text>UserName - {username}</Text>
    </View>
  )
}

export default UserSettings