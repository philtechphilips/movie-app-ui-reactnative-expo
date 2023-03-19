import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity  } from 'react-native'
import React, { useCallback } from 'react'
import  { COLORS } from '../constants/Data'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';


const screenHeight = Dimensions.get('screen').height;

const Intro = ({navigation}) => {

  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/images/one.jpg")}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"]}
          style={{ flex: 1, paddingVertical: 50, paddingHorizontal: 30 }}
        >
          <View style={{ top: "30%" }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 37,
                fontFamily: "Montserrat-Bold",
                textTransform: "uppercase",
                lineHeight: 55,
                paddingRight: 10
              }}
            >
              Ultimate Destination For Cinematic Adventures!
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Movies')} style={{ borderColor: "#fff", border: "solid", borderWidth: 1, paddingHorizontal: 20, borderRadius: 5, paddingVertical: 5, marginTop: 70 }}>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", }}>
                <Text style={{color: "#fff", fontFamily: "Montserrat-Bold", fontSize: 16}}>Lets's Get Started</Text>
                <Image style={{ width: 45, height: 45 }} source={require("../../assets/images/arrow.png")}></Image>
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default Intro

const styles = StyleSheet.create({
  container: {
      flex: 1,
      
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    background: 'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))', // Set background color with alpha channel
  },
})