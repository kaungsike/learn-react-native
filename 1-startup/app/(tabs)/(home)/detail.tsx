import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'

const detail = () => {

    const {id} = useLocalSearchParams();

    const router = useRouter();

  return (
    <View>
      <Text>detail {id}</Text>
      <Link style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }} href="/event">Navigate to Event</Link>
      <Link style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }} href="/event" replace>Replace with Event</Link>
      <Button title='Navigate to Event' onPress={ () => router.navigate('/event')}/>
    </View>
  )
}

export default detail