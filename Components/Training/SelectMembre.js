import React from 'react'
import {StyleSheet, View,ScrollView, Text,TouchableOpacity} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { connect } from 'react-redux'

import SleyBackground from '../CustomComponent/SleyBackground'

import membres from '../../Helpers/membres'
import objectifs from '../../Helpers/objectifs'

class SelectMembre extends React.Component {
constructor(props)
{
  super(props)
  this.radio_props = [
  ];

  this.state = {
    value: 1
  };
  this.loadRadio()
}

loadRadio(){
  Object.keys(membres).forEach(key =>{
    this.radio_props.push({
        label:membres[key].nom,
        value:membres[key].id
      })
    }
  )

}

getObjById(idObj){
  const obj = objectifs.find( objectif => objectif.id === idObj)
  return obj.name;
}


  render()
  {
    console.log(this.props);
    //Si on a choisi Antrenman on se rend vers l'agenda
    //Sinon vers weekCalendar
    const nextComponent= this.props.route.params.choix=="A"?"Reserv":"VoteAgenda"

    return(
      <SleyBackground style={{flex:1, justifyContent:'center'}}>
          <View style={{ padding:10}}>
            <Text style={styles.text_Header}> Choisissez la zone que vous souhaitez travailler </Text>
            <Text style={styles.text_Desc}>Votre objectif est : {this.getObjById(this.props.idObj)}</Text>
            <Text style={styles.text_Desc}>("Tout le corps" vous permet de suivre votre objectif indiféremment de la zone)</Text>
          </View>
          <ScrollView
          style={{flex: 1, padding:20}}
          persistentScrollbar={true}>
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
          </ScrollView>
          <View >
          <TouchableOpacity style={styles.touchButton} onPress={() => {this.props.navigation.navigate(nextComponent)}}>
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
    marginBottom:30,
    padding:10

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
export default connect(mapStateToProps)(SelectMembre)
