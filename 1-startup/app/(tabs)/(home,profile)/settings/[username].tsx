import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

const UserSettings = () => {

    const {username} = useLocalSearchParams();

    const router = useRouter();

  return (
    <View>
        <Stack.Screen options={{title : `${username} Settings`}}/>
      <Text>UserName - {username}</Text>
      <Button title='Update title' onPress={ () => router.setParams({username : 'Updated'})}/>
    </View>
  )
}

export default UserSettings