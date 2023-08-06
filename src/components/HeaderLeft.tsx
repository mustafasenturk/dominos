import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const HeaderLeft = (title : string) => {
  return (
    <View style={styles.headerLeft}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default HeaderLeft