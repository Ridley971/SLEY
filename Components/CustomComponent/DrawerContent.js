import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import{
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {AuthContext} from '../Auth/AuthProvider'


export function DrawerContent(props) {

  const {user, logout} = useContext(AuthContext)
  return (
    <View style= {{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style= {styles.drawerContent}>
           <TouchableRipple
                onPress={() => props.navigation.navigate("Profil")}
                rippleColor="rgba(0, 0, 0, .32)"
                style= {styles.userInfoSection}>
            <View style={{alignItems:'center'}}>
              <Avatar.Image
                source={require( '../../assets/moi.jpg')}
                size= {100}
                />
              <View>
                <Title style={styles.title}>{user.email}</Title>
                <Caption style={styles.caption}> Caption</Caption>
              </View>
            </View>
          </TouchableRipple>

          <Drawer.Section style= {styles.drawerSection}>
              <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="home-outline"
                color={color}
                size={size}/>
              )}
              label="Accueil "
              onPress= {() => {props.navigation.navigate('Accueil')}}/>

              <DrawerItem
                  icon={({color, size}) => (
                    <Icon
                    name="calendar"
                    color={color}
                    size={size}/>
                  )}
                  label="Réserver "
                  onPress= {() => {props.navigation.navigate('Reserv')}}/>

              <DrawerItem
                  icon={({color, size}) => (
                    <Icon
                    name="calendar-multiple-check"
                    color={color}
                    size={size}/>
                  )}
                  label="Mes réservations "
                  onPress= {() => {props.navigation.navigate('MyReservations')}}/>

              <DrawerItem
                      icon={({color, size}) => (
                        <Icon
                        name="vote"
                        color={color}
                        size={size}/>
                      )}
                      label="Mes votes "
                      onPress= {() => {props.navigation.navigate('MyVotes')}}/>

              <DrawerItem
                      icon={({color, size}) => (
                        <Icon
                        name="video"
                        color={color}
                        size={size}/>
                      )}
                      label="Tutos "
                      onPress= {() => {props.navigation.navigate('Tutos')}}/>


          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style= {styles.bottomDrawerSection}>
        <DrawerItem
        icon={({color, size}) => (
          <Icon
          name="exit-to-app"
          color={color}
          size={size}/>
        )}
        label="Se déconnecter "
        onPress= {() => {logout()}}
        />
      </Drawer.Section>
    </View>
  );

}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 3
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 3
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
