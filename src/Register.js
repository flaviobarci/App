import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Btn from './Btn'
import Field from './Field'
import { darkGreen, red } from './Constants'
import Constants from 'expo-constants';


const Register = (props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const registerUser = async () => {
    await fetch(`${Constants.manifest?.extra?.API_URL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }).then(function (response) {
      if (response.status === 201) {
        setErrorMsg('')
        props.navigation.navigate('Login')
        return
      }
      if (response.status === 403) {
        setErrorMsg('Username/Email already taken, or invalid inputs')
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const uploadData = new FormData()

    const strongRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

    if (!username || username.length < 4 || username.length > 70) {
      alert('Invalid username.')
    } else if (!strongRegex.test(email) || !email) {
      alert('You did not enter a valid email.')
    } else if (password.length < 8) {
      alert('Password is too short.')
    } else {
      uploadData.append('username', username)
      uploadData.append('email', email)
      uploadData.append('password', password)
      console.log(uploadData)
      await registerUser()
    }
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.error}>{errorMsg}</Text>

      <Field
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <Field
        placeholder="Email"
        keyboardType={'email-address'}
        onChangeText={(text) => setEmail(text)}
      />
      <Field
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <Btn btnLabel="Let's go!" Press={handleSubmit} />

      <View style={styles.form}>
        <Text style={styles.callout}>Already have an account ? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.login}>Login</Text>
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
    marginBottom: 40,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  callout: { fontSize: 16, fontWeight: 'bold' },
  login: { color: darkGreen, fontWeight: 'bold', fontSize: 16 },
  error: { color: red, fontSize: 16 },
})

export default Register
