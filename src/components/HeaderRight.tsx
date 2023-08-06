import { View, Text } from 'react-native'
import React from 'react'
import styles from './style';



export const TotalPrice = (totalPrice : string) => {
  return (
    <View style={styles.headerRight}>
       <Text style={styles.totalPriceText}>$ {totalPrice}</Text>
    </View>
  )
}

