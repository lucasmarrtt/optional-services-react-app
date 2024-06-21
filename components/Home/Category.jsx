import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors } from './../../constants/Colors';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import CategoryItem from './CategoryItem';

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, 'Category'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <View
        style={{
          padding: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 15, color: Colors.WHITE, fontFamily: 'poppins' }}>
          Categorias
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: 'poppins' }}>Ver mais</Text>
      </View>

      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginLeft: 20}}
        data={categoryList}
        renderItem={({ item, index }) => (
          <CategoryItem category={item} key={index.toString()} 
          onCategoryPress={(category)=>console.log(category)}
          /> // Adicionado key={index.toString()}
        )}
      />
    </View>
  );
}
