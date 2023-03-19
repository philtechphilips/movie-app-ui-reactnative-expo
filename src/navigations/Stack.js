import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../pages/Intro';
import Movies from '../pages/Movies';
import MovieInfo from '../pages/MovieInfo';
import Bottom from './Bottom';


const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName='Intro' screenOptions={{
        headerBackTitle: false
      }}>
        <Stack.Screen options={{
          headerShown: false,
        }} name="Intro" component={Intro} />
        {/* <Stack.Screen options={{
          headerShown: false,
        }} name="Movies" component={Movies} /> */}
        <Stack.Screen options={{
          headerShown: false,
        }} name="MovieInfo" component={MovieInfo} />
         <Stack.Screen name="Movies" component={Bottom} options={{headerShown: false}} />
      </Stack.Navigator>
  )
}

export default StackNav