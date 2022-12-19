import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={style.header}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                Search
            </Text>
        </View>
    );
}


const style = StyleSheet.create({
    header: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    
})
