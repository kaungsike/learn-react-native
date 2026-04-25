import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const LoginPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#11181C' }}>LoginPage</Text>
      <Link style={{ fontSize: 25, fontWeight: 'bold', color: '#11181C' }} href={'/'}>
        Go to home page
      </Link>
    </View>
  )
}

export default LoginPage