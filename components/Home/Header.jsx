import React from 'react';
import { View, Image, Text, TextInput} from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Colors } from './../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  // Assuming userUser() is a function that returns the user object
  const { user } = useUser();

  return (
    <View style={{ 
      padding: 20, 
      paddingTop: 40,
      backgroundColor: Colors.BLACK,
    }}>
      

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        gap: 10,
      }}>

        {/* Make sure to close the Image tag properly */}
        <Image source={{ uri: user?.imageUrl }} 
        style={{
          width: 45,
          height: 45,
          borderRadius: 99,
        }}/>

        <View>
          <Text style={{ color: Colors.WHITE }}>Welcome</Text>
          <Text style={{ fontSize: 20, fontFamily: 'poppins', color: '#49beff', }}>{user?.fullName}</Text>
        </View>
      </View>
      {/* Search bar */}

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 10,
      }}>
        <Ionicons name="search" size={24} color="Coolors.BLACK" />
        <TextInput placeholder="Search.." />
      </View>
      
      
    </View>
  );
}
