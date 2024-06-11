import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { Colors } from './../constants/Colors'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);


  return (
    // Tela principal 
    <View style={{ background: '#EEEBD0', flex: 1, }}>
      <View style={{
        display: 'flex', 
        alignItems: 'center',
        marginTop: 150,
      }}>
        <Image source={require('./../assets/images/optional.png')} 
          style={{width: 130, height: 130}}
        />
      </View>

      <View style={styles.subContainer}>
        <Text style={{ textAlign: 'center', color: '#2F2519', fontSize: 23, fontFamily: 'poppins-bold' }}> 
          Create your 
          <Text style={{ color: Colors.PRIMARY, fontSize: 23, }}> account </Text>  
          and start listing 
        </Text>

        <Pressable style={styles.btn} onPress={onPress}>
          <Text style={{ textAlign: 'center', fontFamily: 'poppins-bold', color: '#EEEBD0' }}>Let's GO</Text>
        </Pressable>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    // Defina seus estilos aqui
    padding: 40,
    marginTop: -10,
  },
  btn: {
    backgroundColor: '#5F4BB6',
    padding: 10,
    borderRadius: 99,
    marginTop: 20,
    


  }
});
