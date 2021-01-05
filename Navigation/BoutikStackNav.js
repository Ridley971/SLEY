import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Boutique from "../Components/Boutik/Boutique"
import Alimentation from "../Components/Boutik/Alimentation"
import Natiye from "../Components/Boutik/Natiye"

const Stack = createStackNavigator()

const BoutikStackNav=({navigation}) =>(
      <Stack.Navigator
        initialRouteName='Boutique'
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
          name='Boutique'
          component={Boutique}
          options={{ headerShown: false }}/>

        <Stack.Screen
          name='Alimentation'
          component={Alimentation}/>

        <Stack.Screen
          name='Natiye'
          component={Natiye}/>

      </Stack.Navigator>
  )


export default BoutikStackNav
