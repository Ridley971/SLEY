import React, {useState, useEffect} from 'react'
import {StyleSheet,View, Text, Image, TouchableOpacity,Button, FlatList} from 'react-native'
import bodies from '../../Helpers/body-percent'
import BodiesList from "../CustomComponent/BodiesList"
import SleyBackground from "../CustomComponent/SleyBackground"
//import {connect} from "react-redux"

const Step7 =({navigation,route}) => {
  const {user} = route.params
  const [idTaux, setIdTaux] = useState(0)
  const [disabled, setDisabled] =useState(true)
   
  const _NextStep = () =>{
    user.txCible= idTaux
    navigation.navigate("Step8", {user:user})
   }
 

  useEffect(()=>{
    if(idTaux === 0){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  })


    return(
      <SleyBackground style={styles.main_container}>
        <Text style={styles.text_Title}> Quelle taux de graisse corporelle cilez-vous ?</Text>

        <BodiesList bodies ={bodies}  sexe={user.sexe} setIdTaux= { setIdTaux} />

        <TouchableOpacity
            style={[styles.touchButton,{backgroundColor: disabled ?"grey":"rgba(255, 255, 0, 0.7)"}]}
            onPress={()=>_NextStep()}
            disabled={disabled}>
            <Text style={styles.text_Button}>Valider</Text>
        </TouchableOpacity>

    </SleyBackground>
    )
  }


const styles={
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  main_container:{
    flex:1,
    backgroundColor:'black'
  },

  text_Title:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 25,
        padding:20,
        color:'#C0C0C0C0'
    },


      touchButton:{
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

export default Step7
/*const mapStateToProps=(state)=>
{
  return {idTxCible:state.idTxCible}

}
export default connect(mapStateToProps)(Step7)*/
