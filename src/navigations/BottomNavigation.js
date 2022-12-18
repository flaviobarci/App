import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native';

import Home from '../Home.js';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../icons/home.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
};

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
        </Stack.Navigator>
    )
};

export default HomeStackNavigator;
