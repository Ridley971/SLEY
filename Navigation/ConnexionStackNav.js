import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, View, Text,Button,TouchableOpacity,ScrollView } from 'react-native'
import SplashScreen from "../Components/Auth/SplashScreen"
import Connexion from "../Components/Auth/Connexion"
import Accueil from "../Components/Accueil"
import Profile from "../Components/Auth/Profile"
import Step8 from '../Components/Steps/Step8'
import Step1 from '../Components/Steps/Step1'
import Step2 from '../Components/Steps/Step2'
import Step3 from '../Components/Steps/Step3'
import Step4 from '../Components/Steps/Step4'
/*import Step5 from '../Components/Steps/Step5'
import Step6 from '../Components/Steps/Step6'
import Step7 from '../Components/Steps/Step7'
import Step9 from '../Components/Steps/Step9'*/

const Stack = createStackNavigator()

function ConnexionStackNav() {

  return (
      <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={({navigation}) => 
          ({
            headerRight: () => (
                      <TouchableOpacity
                        onPress={()=> navigation.popToTop()}>
                            <Text style={{
                              fontWeight:'bold'}}>
                            Connexion
                            </Text>
                      </TouchableOpacity>),

            headerStyle: {backgroundColor: 'rgba(255, 255, 0, 1)'},
            headerTitleStyle: {fontWeight: 'bold'},
            headerTintColor: 'black',
          })
        } >

        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{ headerShown: false }}/>

        <Stack.Screen
          name='Connexion'
          component={Connexion}
          options={{ headerShown: false }}/>

        
        <Stack.Screen
            name='Accueil'
            component={Accueil}
            options={{ headerShown: false }}/> 


        <Stack.Screen
          name='Step8'
          component={Step8}/>

        <Stack.Screen
          name='Profile'
          component={Profile}/>

        <Stack.Screen
          name='Step1'
          component={Step1}/>

        <Stack.Screen
          name='Step2'
          component={Step2}/>

        <Stack.Screen
          name='Step3'
          component={Step3}/>

        <Stack.Screen
          name='Step4'
          component={Step4}/>

        {/*<Stack.Screen
          name='Step5'
          component={Step5}/>

        <Stack.Screen
          name='Step6'
          component={Step6}/>

        <Stack.Screen
          name='Step7'
          component={Step7}/>


          <Stack.Screen
            name='Step9'
            component={Step9}/>
      */}
      </Stack.Navigator>
  )
}

export default ConnexionStackNav
