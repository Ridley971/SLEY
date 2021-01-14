import React from 'react'
import {StyleSheet,View, Text, Image, ScrollView,Button, TouchableOpacity} from 'react-native'
import bodies from "../../Helpers/body-percent"
import SleyBackground from "../CustomComponent/SleyBackground"
import BodiesList from "../CustomComponent/BodiesList"
import StepsTitle from "../CustomComponent/StepsTitle"
//import {connect} from "react-redux"

class Step6 extends React.Component {

  _NextStep()
  {
    this.props.navigation.navigate("Step7")
   }

  render() {

    return (
      <SleyBackground>
        <StepsTitle style={styles.text_Title}> Quelle est votre taux de graisse corporelle ?</StepsTitle>


        <BodiesList bodies ={bodies} actionTaux="UPDATE_TXACT"/>

        <TouchableOpacity
            style={styles.touchButton}
            onPress={() => {this._NextStep()}}>
            <Text style={styles.text_Button}>Valider</Text>
        </TouchableOpacity>

    </SleyBackground>
    )
  }
}

const styles={
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

export default Step6
/*const mapStateToProps = (state) => {
  return {
   idTxAct: state.idTxAct
 }
}

export default connect(mapStateToProps)(Step6)*/
