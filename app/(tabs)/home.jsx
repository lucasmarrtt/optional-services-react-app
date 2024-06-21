import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { Colors } from './../../constants/Colors'
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import Category from '../../components/Home/Category';


export default function home() {
  return (
    <View style={{ backgroundColor: Colors.BLACK, flex: 1 }}>

      {/* Header */}
      <Header/>

      {/* Slider */}
      <Slider/>

      {/* Category */}
      <Category />

    </View>
  );
}

