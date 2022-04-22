import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

export default function ListScreen() {
  const friends = [
    { name: 'Friend #1', Age: 20 },
    { name: 'Friend #2', Age: 21 },
    { name: 'Friend #3', Age: 21 },
    { name: 'Friend #4', Age: 19 },
    { name: 'Friend #5', Age: 18 },
    { name: 'Friend #6', Age: 19 },
    { name: 'Friend #7', Age: 20 },
    { name: 'Friend #8', Age: 21 },
  ]

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.viewStyle}>
              {item.name} Age-{item.Age}
            </Text>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 50,
    marginHorizontal: 10,
  },
})
