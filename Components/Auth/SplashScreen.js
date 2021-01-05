import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.Image
          animation='bounceIn'
          duraton='2000'
          source={require('../../assets/icon.png')}
          style={styles.logo}
          resizeMode='stretch'/>
        </View>

        <Animatable.View
          animation='fadeInUpBig'
          style={styles.footer}>
          <Text style={styles.title}>Stay connected with everyone</Text>
            <Text style={styles.text}>Sign in with account</Text>
              <View style={styles.button}>
                  <TouchableOpacity onPress={()=> navigation.navigate('Connexion')}>
                      <LinearGradient
                          colors={['black','white']}
                          style={styles.signIn}>
                          <Text style={styles.textSign}>Get Started</Text>
                          <MaterialIcons
                              name="navigate-next"
                              color="#fff"
                              size={20}
                          />
                      </LinearGradient>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
      </View>
    );
};

export default SplashScreen;

//Taille de l'écran
const {height} = Dimensions.get("screen");
const height_logo = height * 0.16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: 'yellow',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
    width:150,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
