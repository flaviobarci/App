import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 275,
        paddingVertical: 5,
        marginVertical: 15,
      }}
    >
      <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold' }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  )
}
