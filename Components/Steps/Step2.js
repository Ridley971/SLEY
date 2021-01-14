import React from 'react'
import {StyleSheet, View, Text,Button,Image,TouchableOpacity } from 'react-native'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"

const Step2  = ({route,navigation}) =>{
 
  const {user} = route.params

  
  const _NextStep = (sexe) =>{
    /*const action = { type: "UPDATE_SEXE", value: sexe }
    this.props.dispatch(action)*/
    user.sexe= sexe
    console.log("user", user)
    console.log("obj",user.sexe)
    navigation.navigate("Step3",{user: user})
   }

    return(
      <SleyBackground>
        <StepsTitle style={{flex:1}}>Quel est votre Sexe ?</StepsTitle>

        <View style={styles.gender_container}>
          <TouchableOpacity
          style={styles.touchMale}
          onPress={() => _NextStep("M")}>
          <Image
              style={{width:150, height: 150}}
              source={require('../../assets/gender-Male.png')}
                />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchFemale}
           onPress={() => _NextStep("F")}>

          <Image
              style={{width: 150, height: 150}}
              source={require('../../assets/gender-Female.png')}
                />
          </TouchableOpacity>
        </View>


    </SleyBackground>
    )
  }

const styles={

  gender_container:{
    flex:5,
    justifyContent:"space-between",
    alignItems: 'flex-start',
    flexDirection:"row"
  },
}



export default Step2
