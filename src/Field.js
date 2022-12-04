import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { darkGreen, gray } from './Constants'

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={styles.field}
      placeholderTextColor={darkGreen}
    ></TextInput>
  )
}

const styles = StyleSheet.create({
  field: {
    borderRadius: 100,
    color: darkGreen,
    paddingHorizontal: 15,
    width: '70%',
    height: 45,
    backgroundColor: gray,
    marginVertical: 10,
  },
})

export default Field
