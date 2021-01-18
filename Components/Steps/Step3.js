import React, {useState} from 'react'
import {StyleSheet, View, Text,Button,Platform,TouchableOpacity } from 'react-native'

import CustomDatePicker from '../CustomComponent/CustomDatePicker'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"
import CommonText from "../CustomComponent/CommonText"
import moment from "moment/min/moment-with-locales";
//import {connect} from "react-redux"

const Step3 = ({navigation, route}) => {

    const {user} = route.params

    const today = new Date()
    const year = moment(today).format("YYYY");
    moment.locale('fr')

    const [date, setDate] = useState()
    
  

  

  const _NextStep = () =>{
    /*const action = { type: "UPDATE_DATEN", value: dateN }
    this.props.dispatch(action)*/
    user.dateN = date
    console.log (user)
    navigation.navigate("Step4",{user: user})
   }
        return(
            <SleyBackground>

                <StepsTitle style={{flex:1,justifyContent:"center"}}>Quel est votre Date de naissance ?</StepsTitle>


                <CustomDatePicker  setDate={setDate}/>

                <CommonText style={styles.text_Detail}>
                Votre âge nous permet de mieux personnaliser
                vos exercies et votre nutrition </CommonText>



                <TouchableOpacity style={styles.touchButton} onPress={() => _NextStep()}>
                  <Text style={styles.text_Button}>Valider</Text>
                </TouchableOpacity>

            </SleyBackground>
        )
  }


const styles={
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
  text_Title:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 25,
      padding:20,
      color:'#C0C0C0C0'
  },
  text_Detail:{
      flex:1,
      textAlign:'center',
      color:'#B4B1B0',
      fontSize: 20,
      marginTop:20
  }

}

export default Step3
/*const mapStateToProps = (state) => {
  return {
   dateN: state.dateN
 }
}

export default connect(mapStateToProps)(Step3)*/
