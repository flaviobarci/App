import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { darkGreen, white } from './Constants'

export default function Btn({ btnLabel, Press }) {
  return (
    <TouchableOpacity onPress={Press} style={styles.button}>
      <Text style={styles.text}>{btnLabel}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: darkGreen,
    borderRadius: 100,
    alignItems: 'center',
    width: 275,
    paddingVertical: 12,
    marginVertical: 15,
  },
  text: {
    color: white,
    fontSize: 15,
    fontWeight: 'bold',
  },
})
