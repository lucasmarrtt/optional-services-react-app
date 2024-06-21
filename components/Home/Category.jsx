import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { Colors } from './../../constants/Colors'


export default function Category() {
  return (

    <View>
      <View style={{ padding: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',  
      marginTop: 10,}}>
        <Text style={{ fontSize: 15, color: Colors.WHITE, fontFamily: 'poppins'}}>Catogories</Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: 'poppins' }}>View more</Text>

      </View>
    </View>
    

  );
}

