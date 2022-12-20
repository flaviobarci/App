import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Btn from './Btn'
import COLORS from './Constants'

const Main = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>UnReveal</Text>
      <Btn btnLabel="Login" Press={() => props.navigation.navigate('Login')} />
      <Btn
        btnLabel="Register"
        Press={() => props.navigation.navigate('Register')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: { marginVertical: 100, alignItems: 'center' },
  title: {
    color: COLORS.primary,
    fontSize: 64,
    marginBottom: 100,
    marginTop: 90,
  },
})

export default Main
