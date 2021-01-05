import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity, Text, ScrollView,Button} from 'react-native'
import { connect } from 'react-redux'
import SleyBackground from './CustomComponent/SleyBackground'
import CommonText from './CustomComponent/CommonText'
import ToggleDrawer from './CustomComponent/ToggleDrawer'

import objectifs from '../Helpers/objectifs'
import bodyPercent from '../Helpers/body-percent'
class Profil extends React.Component {
  constructor(props) {
    super(props);
  }


  getObjById(idObj){
    const obj = objectifs.find( objectif => objectif.id === idObj)
    return obj.name;
  }

  getTxById(idTaux){
    const tx = bodyPercent.find( taux => taux.id === idTaux)
    return tx.title;
  }

  render()
  {
    return(
        <SleyBackground style={{flex:1}}>

          <ToggleDrawer {...this.props}/>

          <TouchableOpacity style={{zIndex: 1, position:'absolute',top:45, right:15}}
            onPress={()=> this.props.navigation.navigate("Settings")}>
              <Image style={{width:50, height:50}} source={require('../assets/settings.png')} />
          </TouchableOpacity>

          <View style={styles.header_Container}>
                <TouchableOpacity
                  style={styles.touchableOpacity}>
                    <Image style={styles.avatar} source={require('../assets/moi.jpg')} />
                </TouchableOpacity>
                <Text style={{color:"rgba(255, 255, 0, 1)",
                        flex: 1, fontSize:20, fontWeight:'bold'}}>
                    LE RID
                </Text>
          </View>
        <View style={{flex:5,alignItems:'center'}}>
          <ScrollView style={styles.container}>
            <View >
              <View style={{flexDirection:"row", padding:10}}>
                <CommonText style={{flex:1, color:"yellow"}}>
                    Objectif
                </CommonText>
                <Button title="Modifier" />
              </View>
              <Text style={styles.text}>
                {"\u2666 Mon objectif: "}{this.getObjById(1) + "\n"}
                {"\u2666 Mon poids initial: "}{90+ " KG \n"}
                {"\u2666 Mon taux de graisse initial: "}{this.getTxById(2) + "\n"}
                {"\u2666 Mon taux de graisse cible: "}{this.getTxById(3) + "\n"}
              </Text>
            </View>

            <View >
              <View style={{flexDirection:"row", padding:10}}>
                <CommonText style={{flex:1, color:"yellow"}}>
                    Données sportives
                </CommonText>
              </View>
              <Text style={styles.text}>
                {"\u2666 1 RM Curls : 30 KG  \n"}
                {"\u2666 1 RM développer coucher: 100 KG\n"}
                {"\u2666 1 RM Burpees: 25 KG  \n"}
                {"\u2666 1 RM Dips: 25 KG  \n"}
                {"\u2666 1 RM développer épaules: 30 KG\n"}
              </Text>
              <Button title="Voir plus ..." />
            </View>
          </ScrollView>
        </View>

        </SleyBackground>
    )
  }
}


const styles = StyleSheet.create({
  header_Container:{
    marginTop:30,
    flex:2,
    alignItems:'center',

  },
categ_container:  {
  flex: 1,
  backgroundColor:"rgba(255, 255, 255, 0.8)",
  borderColor:"rgba(255, 255, 0, 1)",
  borderWidth:3,
  borderRadius:35,
  marginBottom:25,
  marginTop:25,
  width:"95%",},

  container:{
    flex:1,
    /*borderColor:"rgba(255, 255, 0, 1)",
    borderWidth:3,
    borderRadius:35,
    marginBottom:25,*/
    marginTop:25,
    width:"90%"
  },
  touchableOpacity:{
    flex:1,
    margin: 45,
    width: 120, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 55,
    borderColor: '#C0C0C0C0',
    borderWidth: 4,
  },
  text:{
    fontSize:16,
    fontWeight:'bold',

    lineHeight: 40,
    color:"white",

  }
})

export default Profil
/*const mapStateToProps=(state)=>
{
  return state

}
export default connect(mapStateToProps) (Profil)*/
