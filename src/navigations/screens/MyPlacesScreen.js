import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../../Constants';

export default function MyPlacesScreen({ navigation }) {
    return (
        <View style={style.header}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                My places
            </Text>
        </View>
    );

    
}

const style = StyleSheet.create({
    header: {
      flex: 10,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    
})

