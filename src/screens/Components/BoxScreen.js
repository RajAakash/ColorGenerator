import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.ParentStyle}>
      <Text style={styles.viewOneStyle}></Text>
      <Text style={styles.viewTwoStyle}></Text>
      <Text style={styles.viewThreeStyle}></Text>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
})
