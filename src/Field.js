import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import COLORS from './Constants'

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={styles.field}
      placeholderTextColor={COLORS.primary}
    ></TextInput>
  )
}

const styles = StyleSheet.create({
  field: {
    borderRadius: 100,
    color: COLORS.primary,
    paddingHorizontal: 15,
    width: '70%',
    height: 45,
    backgroundColor: COLORS.grey,
    marginVertical: 10,
  },
})

export default Field
