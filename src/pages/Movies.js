import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { Images, COLORS, Movie } from '../constants/Data';
import Carousel from 'react-native-anchor-carousel';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenHeight = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Movies = ({navigation}) => {



const [background,setBackground] = useState({
    uri: 'https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg',
    name: "They Shall Not Grow Old",
    stat: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.',
    duration: "99 min",
    ratings: "8.3/10",
    genre: "Documentary, Action, Crime, Drama",
    actors: "Fer Ochoa, Josue Ochoa, Juan Ochoa",
})

const [gallery, setgallery] = useState(Movie)

const carouselRef = useRef(null);

const renderItem = ({item, index}) => {
  return (
  <View>
        <TouchableOpacity
          onPress={() => 
              { 
              carouselRef.current.scrollToIndex(index);
              setBackground({
                  uri: item.Poster,
                  name: item.Title,
                  stat: item.Released,
                  desc: item.Plot,
                  duration: item.Runtime,
                  ratings: item.Ratings,
                  genre: item.Genre,
                  actors: item.Actors
              })
              }
          }
    >
      <Image source={{uri: item.Poster}} style={styles.carouselImage} />
      {/* <Text style={styles.carouselText}>{item.title}</Text> */}
      {/* <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon} /> */}
    </TouchableOpacity>
   
  </View>
  
  )
}


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
        <View style={styles.bodyTop}>
            <ImageBackground source={{ uri: background.uri  }} style={{ flex: 1, height: screenHeight * 0.4 }} blurRadius={7}>
               {/* Semi-transparent overlay */}
                <View style={styles.overlay} />


            <View style={styles.carouselContainerView}>
                <Carousel style={styles.carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20} 
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.8}
                //pagingEnable={false}
                //minScrollDistance={20}
                />
              </View>
            </ImageBackground>
        </View>
        <View style={styles.bodyBottom}>
              <Text style={{ fontSize: 22, textAlign: "center", fontFamily: "Montserrat-Bold"  }}>{background.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center",  marginTop: 5 }}>
                  <Text style={{ fontFamily: "Montserrat-Medium", marginHorizontal: 5, color: COLORS.Lightblack }}>{background.duration}</Text>
                  <Text style={{ fontFamily: "Montserrat-Medium", marginHorizontal: 6, marginTop: 7, color: COLORS.Lightblack }}>*</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <Icon name="star" size={20} color="gold" />
                      <Text style={{ fontFamily: "Montserrat-Medium", marginHorizontal: 2, color: COLORS.Lightblack }}>{background.ratings}</Text>
                  </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontFamily: "Montserrat-Medium", marginHorizontal: 2, color: COLORS.Lightblack, textAlign: "center" }}>{background.genre}</Text>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate('MovieInfo', {data: background})} style={{ borderColor: "#fff", border: "solid", borderWidth: 1, paddingHorizontal: 20, borderRadius: 5, paddingVertical: 15, marginTop: 20, backgroundColor: COLORS.main, borderRadius: 12 }}>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", }}>
                <Text style={{color: "#fff", fontFamily: "Montserrat-Bold", fontSize: 16, marginRight: 20}}>Book a Movie</Text>
                <Image style={{ width: 20, height: 20 }} source={require("../../assets/images/arrow.png")}></Image>
              </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Movies

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  bodyTop: {
    height: screenHeight * 0.5,
    
  },
  bodyBottom: {
    height: screenHeight * 0.5,
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    paddingHorizontal: 50
} ,
  carouselImage: {
    marginTop: 100,
    width: 190,
    height: 270,
    borderRadius: 10,
    marginBottom: 0,
    paddingHorizontal: 30
  },
  carouselText: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  carousel: {
    overflow: 'visible',
}
})
