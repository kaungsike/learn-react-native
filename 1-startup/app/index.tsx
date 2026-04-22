import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View>
        <Text>index</Text>
        <Link href="/about" asChild>
            <Text>Open about</Text>
        </Link>
    </View>
  )
}

export default index