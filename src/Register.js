import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Btn from './Btn'
import Field from './Field'
import { darkGreen } from './Constants'

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function register_api() {
    fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    });
  }


  return (
    <View style={styles.view}>
      <Text style={styles.title}>Register</Text>

      <Field placeholder="Name" onChangeText={(username) => setUsername(username)} />
      <Field placeholder="Email / Username" keyboardType={'email-address'} onChangeText={(email) => setEmail(email)} />
      <Field placeholder="Password" secureTextEntry={true} onChangeText={(password) => setPassword(password)} />

      <Btn
        btnLabel="Let's go!"
        Press={() => {
          register_api()
        }}
      />
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
})

export default Register
