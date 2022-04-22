import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageDetail from './Components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imagesource={require('../.././assets/forest.jpg')}
        score='7'
      />
      <ImageDetail
        title='Beach'
        imagesource={require('../.././assets/beach.jpg')}
        score='8'
      />
      <ImageDetail
        title='Mountain'
        imagesource={require('../.././assets/mountain.jpg')}
        score='9'
      />
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})

//rnfes
