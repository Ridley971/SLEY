import React, {useContext, useState, useEffect} from 'react';
import {
    View,
    ScrollView,
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
import {AuthContext} from '../Auth/AuthProvider'
import { useTheme } from 'react-native-paper';


const Step8 = ({navigation, route}) =>{
  const {user} = route.params
  const [disabled, setDisabled] = useState(true)

  const {register} = useContext(AuthContext)

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password:'',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidEmail: null,
    isSameEmail:null,
    isValidPassword:true,
    isSamePassword:null,
  })

  useEffect(()=>{
    if (data.isValidEmail&& data.isSameEmail && data.isValidPassword && data.isSamePassword) {
      setDisabled(false)
    }
  })

  const textInputChange = (val) => {
    if (val.length > 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      })
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      })
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ... data,
      password: val
    })
  }

  const handleConfirmPasswordChange = (val) => {
    setData({
      ... data,
      confirm_password: val
    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ... data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const updateConfirmSecureTextEntry = () => {
    setData({
      ... data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    })
  }

  const handleValidPassword = (val) => {
    if (val.length >= 8) {
      setData({
        ... data,
        isValidPassword: true,
        password:val
      })
    } else {
      setData({
        ... data,
        isValidPassword: false
      })
    }
  }

  const handleSamePassword =(val) =>{
    console.log("Data.PAssW: ",data.password)
    console.log("VAL handleSAME", val)
    if (val === data.password) {
      setData({
        ...data,
        isSamePassword:true
      })
    } else {
      setData({
        ...data,
        isSamePassword:false
      })
    }
  }

  const handleValidEmail = (val)=> {

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(val) ) {
      setData({
        ...data,
        isValidEmail:true,

        email: val,
        //check_textInputChange: true
      })

    } else {
      setData({
        ...data,
        isValidEmail:false
      })
    }
  }

  const handleSameEmail =(val) =>{
    if (val === data.email) {
      setData({
        ...data,
        isSameEmail:true
      })
    } else {
      setData({
        ...data,
        isSameEmail:false
      })
    }
  }


  return(
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>S'inscrire !</Text>
        </View>

        <ScrollView style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="black"
                size={20}
                />
                <TextInput
                  placeholder="Votre Email"
                  style= {styles.textInput}
                  autoCapitalize="none"
                  //onChangeText={(val) => textInputChange(val)}
                  onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
                />
                {data.isValidEmail ?
               <Animatable.View
                   animation="bounceIn"
               >
                   <Feather
                       name="check-circle"
                       color="green"
                       size={30}
                   />
               </Animatable.View>
               : null}
          </View>
          {
            data.isValidEmail===false?
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}> L'adresse mail est invalide</Text>
            </Animatable.View>:null

          }

          <Text style={[styles.text_footer,{marginTop:30}]}>Confirmez votre Email</Text>
          <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="black"
                size={20}
                />
                <TextInput
                  placeholder="Confirmez votre Email"
                  style= {styles.textInput}
                  autoCapitalize="none"
                  //onChangeText={(val) => textInputChange(val)}
                  onEndEditing ={(e) => handleSameEmail(e.nativeEvent.text)}
                />
                {data.isSameEmail ?
               <Animatable.View
                   animation="bounceIn"
               >
                   <Feather
                       name="check-circle"
                       color="green"
                       size={30}
                   />
               </Animatable.View>
               : null}
          </View>
          {data.isSameEmail===false ? 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Les emails ne correspondent pas</Text>
            </Animatable.View>:null
          }

          <Text style={[styles.text_footer,{marginTop:30}]}>Nom</Text>
          <View style={styles.action}>
              <FontAwesome
                name="id-card"
                color="black"
                size={20}
                />
                <TextInput
                  placeholder="Votre nom de Famille"
                  style= {styles.textInput}
                  onEndEditing={(e)=> {user.nom= e.nativeEvent.text.toUpperCase()}}
                />
          </View>
          <Text style={[styles.text_footer,{marginTop:30}]}>Prénom</Text>
          <View style={styles.action}>
              <FontAwesome
                name="id-card"
                color="black"
                size={20}
                />
                <TextInput
                  placeholder="Votre Prénom"
                  style= {styles.textInput}
                  onEndEditing ={(e)=>{user.prenom=e.nativeEvent.text.toUpperCase()}}
                />
          </View>

          <Text style={[styles.text_footer,{marginTop:30}]}>Mot de Passe</Text>
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
                  //onChangeText={(val) => handlePasswordChange(val)}
                  onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
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
              <Text style={styles.errorMsg}>Le mot de passe doit contenir
              au moins 8 caractères </Text>
            </Animatable.View>
          }

          <Text style={[styles.text_footer,{marginTop:30}]}>Confirmez le mot de Passe</Text>
          <View style={styles.action}>
              <FontAwesome
                name="lock"
                color="black"
                size={20}
                />
                <TextInput
                  placeholder="Confirmez le mot de passe"
                  secureTextEntry={data.confirm_secureTextEntry}
                  style= {styles.textInput}
                  autoCapitalize="none"
                  //onChangeText={(val) => handleConfirmPasswordChange(val)}
                  onEndEditing={(e) => handleSamePassword(e.nativeEvent.text)}
                />
                <TouchableOpacity onPress= {updateConfirmSecureTextEntry}>

                {data.confirm_secureTextEntry ?
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

          {data.isSamePassword ===false? 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Les mots de passes ne correspondent pas </Text>
            </Animatable.View>:null
          }

          <TouchableOpacity
          style= {[styles.button]}
          onPress={() => register(data.email,data.password, user)}
          disabled={disabled}>
              <LinearGradient
                colors={['black', 'white']}
                style={styles.signIn}>
                <Text style={[styles.textSign,{color:"white"}]}>
                  Valider
                </Text>
              </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
    </View>
    );
};

export default Step8;

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
        flex: 8,
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
