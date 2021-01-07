import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Permissions, PERMISSIONS_TYPE} from './Components/AppPermissions'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {

  componentDidMount(){
    Permissions.checkPermission(PERMISSIONS_TYPE.microphone)
  }

  render(){
    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app RIDLEY bg!</Text>
      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
