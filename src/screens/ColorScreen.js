import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

const ColorScreen = () => {
  const [color, setColor] = useState([])
  console.log(color)
  return (
    <View>
      <Button
        title='Add a color!'
        onPress={() => {
          setColor([...color, randomRgb()])
        }}
      ></Button>
      <View>
        <Text>{randomRgb()}</Text>
        <Text>Color[{color}]</Text>
      </View>

      <FlatList
        keyExtractor={(item) => item}
        data={color}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          )
        }}
      />
    </View>
  )
}
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`
}

export default ColorScreen

const styles = StyleSheet.create({})
