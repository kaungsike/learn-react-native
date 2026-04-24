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
      <Link style={{ fontSize: 25, fontWeight: "bold", color: "#11181C" }} href="/detail?id=100" push>Push to another Detail</Link>

      <Button title='Navigate to Event' onPress={ () => router.navigate('/event')}/>
      <Button title='Change detail id' onPress={ () => router.setParams({id : 100})}/>
    </View>
  )
}

export default detail