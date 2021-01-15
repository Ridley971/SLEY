import React, {useState} from 'react'
import {StyleSheet, View, Text,TextInput, Button, TouchableOpacity } from 'react-native'
//import RNPickerSelect from 'react-native-picker-select'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"
//import {connect} from "react-redux"


const Step4 =({navigation, route}) => {
  const {user} = route.params
  const [taille, setTaille]= useState()


  const _NextStep=(taille)=>{
    user.taille = taille
    console.log(user)
    navigation.navigate("Step5",{user:user})
   }

    return(
      <SleyBackground>
        <StepsTitle style={{flex:1}}> Quelle taille faites vous ?</StepsTitle>
        <View style={{flex:4,justifyContent:"center",alignItems:"center"}}>
            <TextInput
              onChangeText={(text) => setTaille(text)}
              placeholder="0"
              placeholderTextColor="#8A8985"
              keyboardType={'numeric'}
              keyboardAppearance='dark'
              maxLength={3}
              style={{color:'#8A8985', fontSize:200,
               fontWeight:'bold'}}
              />
              <View style={{ height: 50, width: "60%", borderRadius:15,
                justifyContent:"center", backgroundColor:'rgba(255, 255, 0, 0.7)' }}>
                 {/*  <RNPickerSelect

                    placeholder={{label: 'Choisissez votre mesure...',value: null,
                                  color: 'black'}}
                  onValueChange={(value) => console.log(value)}

                  items={[
                      { label: 'Centimètres', value: 'cm'},
                      { label: 'Pieds', value: 'pds' }
                  ]}
                  /> */}
              </View>
        </View>
        <TouchableOpacity
            style={styles.touchButton}
            onPress={() => _NextStep(taille)}>
            <Text style={styles.text_Button}>Valider</Text>
        </TouchableOpacity>


    </SleyBackground>
    )
  }

const styles={

  touchButton:
{
    borderColor:'#C0C0C0C0',
    backgroundColor:'rgba(255, 255, 0, 0.7)',
    borderWidth:3,
    borderRadius:35,
    padding:20,
    marginBottom:30

  },

  text_Button:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 30,

  },

}

export default Step4
/*const mapStateToProps = (state) => {
  return {
   taille: state.taille
 }
}

export default connect(mapStateToProps)(Step4)*/
