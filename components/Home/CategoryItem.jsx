import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from './../../constants/Colors'
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';


export default function CategoryItem({category, onCategoryPress}) {
  return (

    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
      <View style={{ padding: 20 }}>
        <Image source={{uri:category.icon}}
        style={{ width: 40, height: 40}}
        />
      </View>
      <Text style={{ color: Colors.WHITE, fontFamily: 'poppins', textAlign: 'center', marginTop: 5, fontSize: 12}}>{category.name}</Text>
    </TouchableOpacity>

    
  );
}

