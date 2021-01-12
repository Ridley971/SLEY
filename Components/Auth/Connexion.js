import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from './AuthProvider'
//import { useTheme } from 'react-native-paper';

const Connexion = ({navigation}) =>{

  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    isValidEmail: true,
    isValidPassword:true,
    secureTextEntry:true,
  })



  const textInputChange = (val) => {

      setData({
        ...data,
        email: val,
      })

  }

  const handlePasswordChange = (val) => {
    setData({
      ... data,
      password: val
    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ... data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const {login} = useContext(AuthContext)

  return(
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Bienvenue chez SLEY !</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.text_footer}>Identifiant (Email ou pseudo)</Text>
          <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="black"
                size={20}
                />
                <TextInput
                  placeholder="Votre identifiant"
                  style= {styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val) => textInputChange(val)}
                />

          </View>

          <Text style={[styles.text_footer,{marginTop:40}]}>Mot de Passe</Text>
          <View style={styles.action}>
              <FontAwesome
                name="lock"
                color="black"
                size={20}
                />
                <TextInput
                  placeholder="Votre Mot de passe"
                  secureTextEntry={data.secureTextEntry}
                  style= {styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity onPress= {updateSecureTextEntry}>

                {data.secureTextEntry ?
                    <Feather
                      name="eye-off"
                      color="black"
                      size={30}
                    />
                    :
                    <Feather
                      name="eye"
                      color="black"
                      size={30}
                    />
                  }

                </TouchableOpacity>
          </View>
          {data.isValidPassword ? null:
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}> Le mot de passe est invalide</Text>
            </Animatable.View>
          }
          <TouchableOpacity style= {styles.button}
          onPress= {()=> login(data.email, data.password)}>
              <LinearGradient
                colors={['black', 'white']}
                style={styles.signIn}>
                <Text style={[styles.textSign,{color:"white"}]}>
                  Se connecter
                </Text>
              </LinearGradient>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={[styles.signIn,{
            borderWidth:2,
            marginTop:20
          }]}
          onPress={()=> navigation.navigate('Step8')}
          >
            <Text style={styles.textSign}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
    </View>
    );
};

export default Connexion;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: 'yellow',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        fontWeight:'bold'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
