import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Btn from './Btn'
import { darkGreen, gray } from './Constants'
import Field from './Field'

const Login = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Login to your account</Text>
      <Field placeholder="Email / Username" keyboardType={'email-address'} />
      <Field placeholder="Password" secureTextEntry={true} />
      <Btn
        textColor="white"
        bgColor={darkGreen}
        btnLabel="Login"
        Press={() => alert('Logged In')}
      />
      <View style={styles.form}>
        <Text style={styles.callout}>Do not have an account ? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: 700,
    width: 460,
    borderTopLeftRadius: 150,
    paddingTop: 200,
    paddingRight: 70,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: darkGreen,
    fontWeight: 'bold',
  },
  subtitle: {
    color: gray,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  callout: { fontSize: 16, fontWeight: 'bold' },
  register: { color: darkGreen, fontWeight: 'bold', fontSize: 16 },
})

export default Login
