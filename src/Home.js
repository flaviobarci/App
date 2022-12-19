
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import COLORS from './Constants';

const Home = () => {
    return(
        <View style={styles.view}>
            <Text style={styles.title}>Home</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    view: {
        marginVertical: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        color: COLORS.primary,
        fontWeight: 'bold'
    }
})

export default Home;