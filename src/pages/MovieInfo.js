import { View, Text, ImageBackground, Dimensions, Image, Platform, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
const screenHeight = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/Data';
import { useFonts } from 'expo-font';

const MovieInfo = ({route}) => {

  const {data} = route.params;

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
    <View style={{flex: 1, }}>
      <ImageBackground source={{ uri: data.uri}} style={{height: screenHeight * 0.25, width: "100%" }} blurRadius={1}>
            <View style={{flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", paddingHorizontal: 30}}>
                <Image source={{ uri: data.uri}} style={{ height: 150, width: 110, marginTop: 50, borderRadius: 12}} />
                <View style={{flexDirection: "row", alignItems: "center", backgroundColor: COLORS.white, padding: 10, borderRadius: 10, elevation: 10 }}>
                  <Icon name="star" size={20} color="gold" />
                  <Text>
                    {data.ratings}
                  </Text>
                </View>
            </View>
      </ImageBackground>

      <View style={{ marginTop: 60, paddingHorizontal: 30  }}>
        <Text style={{ fontSize: 22, fontFamily: "Montserrat-Bold", marginRight: 60, fontWeight: "600" }}>{data.name}</Text>
        <Text style={{ fontSize: 16, fontFamily: "Montserrat-Light", marginTop: 10 }}>{data.duration}</Text>
        <Text style={{ fontSize: 16, fontFamily: "Montserrat-Medium", marginTop: 15 }}>Description</Text>
        <Text style={{ fontSize: 16, fontFamily: "Montserrat-Light", marginTop: 10 }}>{data.desc}</Text>

        <Text style={{ fontSize: 16, fontFamily: "Montserrat-Medium", marginTop: 15 }}>Actors</Text>
        <Text style={{ fontSize: 16, fontFamily: "Montserrat-Light", marginTop: 10 }}>{data.actors}</Text>

      </View>
      <View style={{position: "absolute", height: 80, width: "100%", bottom: 0, left: 0, backgroundColor: "#fff",  ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      android: {
        elevation: 2,
      },
    }),}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30, marginTop: 20 }}>
        <TouchableOpacity style={{ border: "solid", borderWidth: 1, borderColor: COLORS.main, borderRadius: 5, paddingVertical: 6, paddingHorizontal: 6, maxHeight: 50 }}>
          <Icon name='heart-outline' size={32} style={{ color: COLORS.main }}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: COLORS.main, width: "80%", paddingVertical: 15, borderRadius: 8, maxHeight: 50 }}>
          <Text style={{ color: "#fff", fontFamily: "Montserrat-Medium", fontSize: 17, textAlign: "center",  }}>Book Now</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default MovieInfo
