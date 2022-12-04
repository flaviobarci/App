import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Btn from './Btn'
import { darkGreen } from './Constants'

const Home = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>UnReveal</Text>
      <Btn btnLabel="Login" Press={() => alert('Account already created')} />
      <Btn
        btnLabel="Register"
        Press={() => props.navigation.navigate('Register')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: { marginVertical: 100, alignItems: 'center' },
  title: { color: darkGreen, fontSize: 64, marginBottom: 100, marginTop: 90 },
})

export default Home
