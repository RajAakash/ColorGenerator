import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function ComponentScreen() {
  const greeting = 'js term in JSX'

  return (
    <View>
      <Text style={styles.textStyle}>This is component Screen</Text>
      <Text> This is another peice of text!</Text>
      <View>
        <Text>This is another view and another text!</Text>
        <Text style={styles.subHeaderStyle}>{greeting}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
})
