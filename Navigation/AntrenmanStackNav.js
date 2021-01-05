import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {StyleSheet, View, Image,TouchableOpacity} from 'react-native'

import Antrenman from "../Components/Training/Antrenman"
import Accueil from "./MainTabNav"
import Azone from "../Components/Training/Azone"
import Reserv from "../Components/Training/Reserv"
import VoteAgenda from "../Components/Training/VoteAgenda"
import Planning from "../Components/Planning"
import CheckObj from "../Components/Training/CheckObj"
import SelectMembre from "../Components/Training/SelectMembre"
import SelectBienEtre from "../Components/Training/SelectBienEtre"

const Stack = createStackNavigator()

const AntrenmanStackNav=({navigation}) =>(
      <Stack.Navigator
        initialRouteName='Antrenman'
        screenOptions={{
                  headerStyle: {
                    backgroundColor: 'rgba(255, 255, 0, 1)'
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold'
                  },
                  headerTintColor: 'black',
                  headerBackTitleVisible:false,
                }}>

        <Stack.Screen
          name='Antrenman'
          component={Antrenman}
          options={{
            title: 'Antrenman',
          }}/>

          <Stack.Screen
            name='Accueil'
            component={Accueil}/>

        <Stack.Screen
          name='Azone'
          component={Antrenman}
          options={{
            title: 'Antrenman Zone',
          }}/>

          <Stack.Screen
            name='Reserv'
            component={Reserv}
            options={{
              title: 'Réserver',
            }}/>

          <Stack.Screen
            name='VoteAgenda'
            component={VoteAgenda}
            options={{
              title: 'Votez',
            }}/>

          <Stack.Screen
            name='Planning'
            component={Planning}
            options={{
              title: 'Mes Réservations',
            }}/>

            <Stack.Screen
              name='CheckObj'
              component={CheckObj}
              options={{
                title: 'Vérifier votre objectif',
              }}/>

            <Stack.Screen
              name='SelectMembre'
              component={SelectMembre}
              options={{
                title: 'Sélection',
              }}/>

            <Stack.Screen
              name='SelectBienEtre'
              component={SelectBienEtre}
              options={{
                title: 'Sélection',
              }}/>
      </Stack.Navigator>
  )


export default AntrenmanStackNav
