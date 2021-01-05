import React from 'react'
import {StyleSheet, View, Text,Button,Platform,TouchableOpacity } from 'react-native'

import CustomDatePicker from '../CustomComponent/CustomDatePicker'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"
import CommonText from "../CustomComponent/CommonText"
import moment from "moment/min/moment-with-locales";
//import {connect} from "react-redux"

class Step3 extends React.Component
{
  constructor(props)
  {
    super(props);
    moment.locale('fr')
    this.state = {
      date:moment(new Date()),
      showDatePicker:false
     }
  }

  

  _NextStep(dateN, sexe) {
    /*const action = { type: "UPDATE_DATEN", value: dateN }
    this.props.dispatch(action)*/

    this.props.navigation.navigate("Step4")
   }

  render()
  {
    this.props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={()=> this.props.navigation.popToTop()}>
                <Text style={{
                  fontWeight:'bold'}}>
                Connexion
                </Text>
          </TouchableOpacity>
        ),
      })

    const { date} = this.state
    const today = new Date()
    const year = moment(today).format("YYYY");



        return(
            <SleyBackground>

                <StepsTitle style={{flex:1,justifyContent:"center"}}>Quel est votre Date de naissance ?</StepsTitle>


                <CustomDatePicker/>

                <CommonText style={styles.text_Detail}>
                Votre âge nous permet de mieux personnaliser
                vos exercies et votre nutrition </CommonText>



                <TouchableOpacity style={styles.touchButton} onPress={() => {
                    this._NextStep(moment(date).format("L"), this.props.route.sexe)}}>
                  <Text style={styles.text_Button}>Valider</Text>
                </TouchableOpacity>

            </SleyBackground>
        )
  }
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
