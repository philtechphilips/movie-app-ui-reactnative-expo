import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Movies from '../pages/Movies';
import { COLORS } from '../constants/Data';
import Search from '../pages/Search';
import Book from '../pages/Book';
import Fedd from '../pages/Fedd';

const Bottom = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    

        screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.Lightblack,
        // tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.main,
        tabBarIcon: ({color, size, focused}) => {
            let iconName;

            if (route.name === "Movies") {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === "Search") {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === "Book") {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === "User") {
                iconName = focused
                  ? 'person'
                  : 'person-outline';
              }

            return <Icon name={iconName} size={24} color={color} />;
        }
        
    })}>
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Book" component={Book}  />
        <Tab.Screen name="User" component={Fedd}  />
    </Tab.Navigator>
  )
}

export default Bottom