import  React from 'react';
import { StyleSheet,Text, View, Image,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccueilStackNav from "./AccueilStackNav"
/*import ProfileStackNav from "./ProfileStackNav"
import BoutikStackNav from "./BoutikStackNav"*/


const Tab = createBottomTabNavigator();

const  MainTabNav =({navigation})=>(
        <Tab.Navigator
           initialRouteName="AccueilStackNav"
            tabBarOptions={{
              showLabel:false,
              style: {
                         backgroundColor: 'rgba(255, 255, 0, 0.7)',
                       },
              activeBackgroundColor:'#FFF9B8'

            }}
          >

           <Tab.Screen name="AccueilStackNav"
              component={AccueilStackNav}
              options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: () => {
                      return <Image
                        source={require('../assets/home.png')}
                        style={styles.tab_Icon}/>
                    },
                  }}/>

       {/* <Tab.Screen name="BoutikStackNav"
            component={BoutikStackNav}
            options={{
                  tabBarLabel: 'Boutique',
                  tabBarIcon: () => {
                    return <Image
                      source={require('../assets/store3.png')}
                      style={styles.tab_Icon}/>
                  },
                }}/>


           <Tab.Screen name="Profil"
            component={ProfileStackNav}
            options={{
                  tabBarLabel: 'Profil',
                  tabBarIcon: () => {
                    return <Image
                      source={require('../assets/profile.png')}
                      style={styles.tab_Icon}/>
                  },
                }}/>*/}

        </Tab.Navigator>
  )


const styles = StyleSheet.create({
  tab_Icon: {
    height:20, width:20
  },
})
export default MainTabNav
