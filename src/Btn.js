import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from './Constants'

export default function Btn({ btnLabel, Press }) {
  return (
    <TouchableOpacity onPress={Press} style={styles.button}>
      <Text style={styles.text}>{btnLabel}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    justifyContent: 'center',
    minWidth: '70%',
    flexDirection: 'row',
    paddingVertical: 12,
    marginVertical: 15,
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
})
