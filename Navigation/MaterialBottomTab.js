import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialIcons} from 'react-native-vector-icons'
import { StyleSheet, Image,TouchableOpacity } from 'react-native'

import Accueil from "./AccueilStackNav"
import Boutik from "../Components/Boutik/Boutique"
import Profil from "./ProfileStackNav"
import Planning from "../Components/Planning"

import Icon from "react-native-vector-icons/Ionicons"

const Tab = createMaterialBottomTabNavigator();

 function getTabBarVisibility (route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';
    console.log(routeName);
  if (routeName === 'Accueil') {
    return false;
  }

  return true;
}

const MainTabScreen = () => (

    <Tab.Navigator
      initialRouteName="Accueil"
      inactiveColor="#000"
      activeColor="#FFFFFF"
    >

      <Tab.Screen
        name="Accueil"
        component={Accueil}
        options={({ route }) => ({
          tabBarLabel: 'Accueil',
          tabBarColor:'#F9E111',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
          tabBarVisible: true
        })}
      />

      <Tab.Screen
        name="Planning"
        component={Planning}
        options={{
          tabBarBadge: 0,
          tabBarLabel: 'Planning',
          tabBarColor:'#FFB400',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-calendar" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Boutik"
        component={Boutik}
        options={{
          tabBarLabel: 'Boutik',
          tabBarColor:'#FFF700',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: 'Profil',
          tabBarColor:'#FBC822',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );

export default MainTabScreen
