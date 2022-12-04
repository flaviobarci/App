import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Btn from './Btn'
import { darkGreen } from './Constants'
import Field from './Field'

const Register = (props) => {
  return (
    <View
      style={{
        height: 700,
        width: 460,
        borderTopLeftRadius: 150,
        paddingTop: 200,
        paddingRight: 70,
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 40,
          color: darkGreen,
          fontWeight: 'bold',
          marginBottom: 40,
        }}
      >
        Register
      </Text>

      <Field placeholder="Name" />
      <Field placeholder="Email / Username" keyboardType={'email-address'} />
      <Field placeholder="Password" secureTextEntry={true} />

      <Btn
        textColor="white"
        bgColor={darkGreen}
        btnLabel="Register"
        Press={() => {
          alert('Account already created')
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Already have an account ?{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert('Account already created')
          }}
        >
          <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register
