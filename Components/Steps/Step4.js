import React, {useState} from 'react'
import {StyleSheet, View, Text,TextInput, TouchableOpacity, Alert } from 'react-native'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"
import Picker from "react-native-picker-select"
import { color } from 'react-native-reanimated'

const Step4 =({navigation, route}) => {
  const {user} = route.params
  const [taille, setTaille]= useState(0)
  const [mesure, setMesure]  = useState("cm")
  const [disabled, setDisable] = useState(true)

  const createTailleAlert =() =>{
    Alert.alert(
      "Taille invalide !",
      "La taille saisie est incorrect",
      [{text:"Compris"}]
    )

    setDisable(true)
  }

  const handleTailleChange =() =>{

    if(isNaN(taille)) {
      createTailleAlert()
      return;
    }

   if (mesure==="cm"&&(taille <= 145 || taille >= 230)) {
    createTailleAlert()
   } else if (mesure==="pds"&&(taille <= 4.7 || taille >= 7.9)){
    console.log("pieds")
    createTailleAlert()
   }else{
    setDisable(false)
   }
  }
  const _NextStep=(taille)=>{

    if(mesure=="pds") {

      user.taille=(Math.round(taille*30.48, 0))

    }else user.taille = taille

    console.log(user.taille)
    //navigation.navigate("Step5",{user:user})
   }

    return(
      <SleyBackground>
        <StepsTitle style={{flex:1}}> Quelle taille faites vous ?

        <Text style={{color:"white", textAlign:"center", fontSize:18}}>  {"\n"}Exemple: {(mesure==="cm" ?"176 cm":" 5.8 pdxs")}</Text>
        </StepsTitle>
        <View style={{flex:4,alignItems:"center", }}>
            <TextInput
              onChangeText={(text) => setTaille(text)}
              onEndEditing={handleTailleChange}
              placeholder={taille.toString()}
              placeholderTextColor="#8A8985"
              keyboardType={'numeric'}
              keyboardAppearance='dark'
              maxLength={3}
              style={{color:'#8A8985', fontSize:100
              ,
               fontWeight:'bold'}}
              />
              {/* <View style={{ height: 50, width: "60%", borderRadius:15,
                justifyContent:"center", backgroundColor:'rgba(255, 255, 0, 0.7)' }}> */}
                 
                 <Picker
                    style={{...pickerSelectStyles

                    }}
                    placeholder={{}}
                    onValueChange={(itemValue) => setMesure(itemValue)}
                    items={[
                    {label:"Centimètres", value:"cm"},
                    {label:"Pieds", value:"pds"},
                  ]}/>
              {/* </View> */}
        </View>
        <TouchableOpacity
            style={[styles.touchButton,{backgroundColor: disabled ?"grey":"rgba(255, 255, 0, 0.7)"}]}
            disabled={disabled}
            onPress={() => _NextStep(taille)}>
            <Text style={styles.text_Button}>Valider</Text>
        </TouchableOpacity>


    </SleyBackground>
    )
  }

const styles= StyleSheet.create({

  touchButton:
{
    borderColor:'#C0C0C0C0',
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

})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    alignSelf:"center",
    fontSize:30,
    borderWidth: 2,
    borderColor:"yellow",
    borderRadius:4,
    color:"white",
    textAlign: "center",
    width:300
  }
})

export default Step4

