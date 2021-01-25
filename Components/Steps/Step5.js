import React, {useState} from 'react'
import {StyleSheet, View, Text,TextInput, TouchableOpacity, Alert } from 'react-native'

import {ButtonGroup} from "react-native-elements"
import Picker from "react-native-picker-select"
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"

const Step5 =({navigation, route}) => {

  const {user} = route.params
  const [poids, setPoids] = useState(0)
  const [mesure, setMesure]= useState('KG')
  const [disabled, setDisable] = useState(true)
  //const [index, setIndex] =useState(2)

  const createPoidsAlert =() =>{
      Alert.alert(
        "Poids invalide !",
        "Le Poids saisi est incorrect",
        [{text:"Compris"}])
  }
  const handlePoidsChange =() =>{

    if(isNaN(poids)) {
      createPoidsAlert()
      return;
    }

   if (mesure==="KG"&&(poids < 40 || poids >= 200)) {
    createPoidsAlert()
   } else if (mesure==="LB"&&(taille <=88.18 || taille >= 90.71)){
    createPoidsAlert()
   }else{
    setDisable(false)
   }
  }

  const  _NextStep = () =>{
    if(mesure=="LB") {

      user.poids=(Math.round(poids*2.205, 2))

    }else user.poids = poids
    
    user.poids= poids

    console.log((poids*2.205).toFixed(2))
   navigation.navigate("Step6", {user:user})
  }


    return(
      <SleyBackground>
        <StepsTitle>
           Combien pesez vous ?
          <Text style={{color:"white", textAlign:"center", fontSize:18}}>  {"\n"}Exemple: {(mesure==="KG" ?"75.50 kg":" 165.34 lbs")}</Text>
        </StepsTitle>
        <View style={{flex:4,alignItems:"center", marginTop:20}}>
            <TextInput
              placeholder="0"
              placeholderTextColor="#8A8985"
              keyboardType={'numeric'}
              keyboardAppearance='dark'
              onChangeText={(text)=>setPoids(text)}
              onEndEditing={handlePoidsChange}
              maxLength={6}
               style={{color:'#8A8985', fontSize:95,fontWeight:'bold'}}
              />
           {/*  <ButtonGroup
              onPress={()=>console.log("Press")}
              selectedIndex={index}
              buttons={["KG", "LBS"]}
              textStyle= {{color:'white', fontSize:25}}
              buttonContainerStyle= {{backgroundColor:"yellow", }}
              containerStyle={{backgroundColor:"transparent", borderColor:"transparent", width:300,borderRadius:30}}
            /> */}

            <Picker
              style={{...pickerSelectStyles

              }}
              placeholder={{}}
              onValueChange={(itemValue) => setMesure(itemValue)}
              items={[
              {label:"Kilogramme", value:"KG"},
              {label:"Livre", value:"LB"},
            ]}/>   
        </View>
        <TouchableOpacity
            style={[styles.touchButton,{backgroundColor: disabled ?"grey":"rgba(255, 255, 0, 0.7)"}]}
            onPress={() => _NextStep(poids)}
            disabled= {disabled}>
            <Text style={styles.text_Button}>Valider</Text>
        </TouchableOpacity>

    </SleyBackground>
    )
}

const styles={

  touchButton:
{
    justifyContent:"flex-end",
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
export default Step5
