import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from './Register'
import Main from './Main'
import Login from './Login'
import HomeStackNavigator from "./navigations/BottomNavigation"
import { registerRootComponent } from 'expo'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default registerRootComponent(App)
