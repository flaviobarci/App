import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Image, StyleSheet } from 'react-native'
import HomeScreen from './screens/HomeScreen.js'
import MyPlacesScreen from './screens/MyPlacesScreen.js'
import SearchScreen from './screens/SearchScreen.js'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: 'center',
          paddingVertical: 15,
          backgroundColor: '#eff4f0',
          elevation: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image style={style.image} source={require('../icons/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="My Places"
        component={MyPlacesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Places',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={style.image}
              source={require('../icons/pointer.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={style.image}
              source={require('../icons/search.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()
const screenOptionStyle = {
  headerShown: false,
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}

const style = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
})

export default HomeStackNavigator
