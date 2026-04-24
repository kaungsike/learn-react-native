import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Event = () => {
  return (
    <View>
      <Stack.Screen options={{
        title: "Event",
        headerRight: () => <Button title='Notification'/>
      }}/>
      <Text>event</Text>
    </View>
  )
}

export default Event