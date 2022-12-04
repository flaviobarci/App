import React from 'react'
import { View, ImageBackground } from 'react-native'

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/road.png')}
        style={styles.height}
      />
      <View style={styles.position}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  height: '100%',
  position: 'absolute',
})

export default Background
