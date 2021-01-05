import React from 'react'
import {StyleSheet, View,Image, Text,TouchableOpacity} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { connect } from 'react-redux'

import SleyBackground from '../CustomComponent/SleyBackground'

import objectifs from '../../Helpers/objectifs'

class CheckObj extends React.Component {
constructor(props)
{
  super(props)
  //Vérifier si on vote (V) ou on réserve un Antrenman (A)
  this.choix=this.props.route.params.choix

  this.objPrincipal= this.props.idObj
  this.radio_props = [
  ];

  this.state = {
    value: this.objPrincipal
  };
  this.loadRadio()
}


loadRadio(){
  Object.keys(objectifs).forEach(key =>{
    this.radio_props.push({
        label:objectifs[key].name,
        value:objectifs[key].id
      })
    }
  )

}

  render()
  {
    return(
      <SleyBackground style={{flex:1, justifyContent:'center'}}>
          <View style={{flex: 1, padding:10}}>
            <Text style={styles.text_Header}> Choisissez votre objectif  </Text>
            <Text style={styles.text_Desc}>(Par défaut votre objectif prinicpal est sélectionné)</Text>
          </View>
          <View style={{flex: 3, alignItems:"center"}}>
          <RadioForm>
          {
              this.radio_props.map((obj, i) => (
              <RadioButton  key={i} >
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={this.state.value-1 === i}
                  onPress={(value) => {this.setState({value:value})}}
                  borderWidth={3}
                  buttonInnerColor={'yellow'}
                  buttonOuterColor={'#C0C0C0C0'}
                  buttonSize={20}
                  buttonStyle={{}}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {this.setState({value:value})}}
                  labelStyle={{fontSize: 30,
                    fontWeight:'bold',padding:20, color: '#C0C0C0C0'}}
                  labelWrapStyle={{}}
                />
              </RadioButton>
              ))
          }
          </RadioForm>
          </View>
          <View style={{flex: 1}}>
          <TouchableOpacity style={styles.touchButton} onPress={() => {this.props.navigation.navigate("SelectMembre",{choix: this.choix})}}>
            <Text style={styles.text_Button}>Valider</Text>
          </TouchableOpacity>
          </View>
        </SleyBackground>
    )
  }
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
    text_Header:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: '#C0C0C0C0'

    },

    text_Desc:{
      padding:10,
      textAlign:'justify',
      color:'#C0C0C0C0',
      fontStyle:'italic',
      fontSize: 15
    },
}

const mapStateToProps=(state)=>
{
  return state

}
export default connect(mapStateToProps)(CheckObj)
