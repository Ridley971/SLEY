import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Profil from "../Components/Profil"
import Settings from "../Components/Settings"

const Stack = createStackNavigator()

const ProfileStackNav=({navigation}) =>(
      <Stack.Navigator
        initialRouteName='Profil'
        screenOptions={{
                  headerStyle: {
                    backgroundColor: 'rgba(255, 255, 0, 1)'
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold'
                  },
                  headerTintColor: 'black',
                }}>

        <Stack.Screen
          name='Profil'
          component={Profil}
          options={{ headerShown: false }}/>

        <Stack.Screen
          name='Settings'
          options={{
            title: 'Réglages',
          }}
          component={Settings}/>
      </Stack.Navigator>
  )


export default ProfileStackNav
