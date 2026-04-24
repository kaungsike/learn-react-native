import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const ProductDetail = () => {

    const {productid} = useLocalSearchParams();

  return (
    <View>
      <Text>ProductDetail {productid}</Text>
    </View>
  )
}

export default ProductDetail