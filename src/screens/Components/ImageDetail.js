import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDetail = ({ title, imagesource, score }) => {
  return (
    <View>
      <Image source={imagesource} />
      <Text>{title}</Text>
      <Text>{score}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({})
