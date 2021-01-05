import React from 'react'
import {StyleSheet, View, Text,Button,TouchableOpacity,ScrollView } from 'react-native'
import SleyBackground from "../CustomComponent/SleyBackground"
import CommonText from "../CustomComponent/CommonText"
import StepsTitle from "../CustomComponent/StepsTitle"
import { connect } from 'react-redux'

class Step1 extends React.Component {

  _NextStep(idOBJ)
   {
     /*const action = { type: "UPDATE_OBJ", value: idOBJ }
     this.props.dispatch(action)*/
     this.props.navigation.navigate("Step2")
   }

  render() {

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

    return(
      <SleyBackground>

            <StepsTitle style={{flex:1}}>Quel est votre objectif ?</StepsTitle>
            <View style={{flex:6}}>
            <ScrollView  >
              <View style={styles.obj_container} >
                    <TouchableOpacity
                      style={styles.touchOp}
                      onPress={() => {this._NextStep(1)}}>
                      <Text style={styles.text_Obj}>Bruler de la graisse</Text>
                      <Text style={styles.text_Desc}> Mincir et affiner son corps</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.touchOp}
                      onPress={() => {this._NextStep(2)}}>
                      <Text style={styles.text_Obj}>Être en bonne santé</Text>
                      <Text style={styles.text_Desc}>Vivre sainement</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.touchOp}
                      onPress={() => {this._NextStep(3)}}>
                      <Text style={styles.text_Obj}>Prendre du muscle</Text>
                      <Text style={styles.text_Desc}>Gagner de la masse musculaire & force</Text>
                    </TouchableOpacity>

              </View>
            </ScrollView>
            </View>
            <CommonText style={styles.text_Info}>*Sur tous vos ANTREMAN le CARDIO et les ABDOMINAUX sont travaillés; quelque soit
            l'objectif
            </CommonText>
    </SleyBackground>
    )
  }
}

const styles = StyleSheet.create({


obj_container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center"
},

touchOp:{
  marginBottom:40,
  borderColor:'#C0C0C0C0',
  borderWidth:3,
  borderRadius:35,
  padding:20,
  width:"80%",
  backgroundColor:"rgba(255, 255, 0, 0.7)"

},

  text_Obj:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'

  },

  text_Desc:{
    textAlign:'center',
    color:'#525252',
    fontSize: 20
  },

  text_Info:{
    flex:1,
    textAlign:'center',
    color: 'red',
    fontSize:15,
    top: 10
  }
})



export default Step1
