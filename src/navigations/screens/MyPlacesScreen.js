import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function MyPlacesScreen({ navigation }) {
  return (
    <View style={style.header}>
      <Text>My places</Text>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
