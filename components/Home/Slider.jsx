import React, { useEffect, useState } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    const fetchSliderList = async () => {
      try {
        const q = query(collection(db, 'Slider'));
        const querySnapshot = await getDocs(q);
        const fetchedList = [];

        querySnapshot.forEach((doc) => {
          fetchedList.push(doc.data());
        });

        setSliderList(fetchedList);
      } catch (error) {
        console.error('Error fetching slider list:', error);
      }
    };

    fetchSliderList();
  }, []);

  return (
    <View>
      
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingLeft: 20, marginTop: 15,}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 300, height: 160, borderRadius: 15, marginRight:15}}
          />
        )}
      />
    </View>
  );
}
