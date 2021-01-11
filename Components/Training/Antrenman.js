import React from 'react'
import {StyleSheet, View,Image, Text,TouchableOpacity, ScrollView} from 'react-native'


import SleyBackground from '../CustomComponent/SleyBackground'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class Antrenman extends React.Component {

  render()
  {
    //True si la période des votes est active
    this.voteActif=true
    //Mettre en place l'Antrenman Zone
    this.AZoneActif=false
    this.props.navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity
              style={{left:15}}
              onPress={()=>  this.props.navigation.toggleDrawer()}>
                  <Icon name="menu" size={35} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={()=>   this.props.navigation.navigate("Planning")}>
              <Image
                source={require('../../assets/calendar.png')}
                style={{width: 40, height: 40, right: 15} }/>
            </TouchableOpacity>
          ),

      })

    return(

        <SleyBackground style={{flex: 1, justifyContent:'center'}}>
          <ScrollView>
          <View style={{flex:1, alignItems:'center', top: 30}}>
            {this.voteActif &&
              <TouchableOpacity
                style={styles.touchOp}
                onPress={() => this.props.navigation.navigate("CheckObj",{choix:"V"})}>
                <Text style={styles.text_Obj}>Vote </Text>
                <Text style={styles.text_Desc}>
                  Voter pour le planning hebdomadaire des séances avec le coach.
                </Text>
                <Text style={styles.text_Desc}>
                  Du : dateDebutNewPlanning
                  {'\n'}Au : dateFinNewPlanning
                </Text>
              </TouchableOpacity>

            }
          <TouchableOpacity
            style={styles.touchOp}
            onPress={() => this.props.navigation.navigate("SelectMembre",{choix:"A"})}>
            <Text style={styles.text_Obj}>Antrenman</Text>
            <Text style={styles.text_Desc}>
              Réservez vos séances d'Antrenman
            </Text>
          </TouchableOpacity>


            {this.AZoneActif && <TouchableOpacity
                style={styles.touchOp}
                onPress={() => {alert('Antrenman Zone')}}>
                <Text style={styles.text_Obj}>Antrenman Zone</Text>
                <Text style={styles.text_Desc}>
                  Réservez votre rack pour vos séances individuelles
                </Text>
              </TouchableOpacity>}

          <TouchableOpacity
            style={styles.touchOp}
            onPress={() => this.props.navigation.navigate("SelectBienEtre")}>
            <Text style={styles.text_Obj}>Bien-Etre</Text>
            <Text style={styles.text_Desc}>
              Réservez vos séances d'ostéopathe, kiné, et autres avec nos partenaires
            </Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SleyBackground>
    )
  }
}


const styles={
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
      fontSize: 25,
      color: 'black'

    },

    text_Desc:{
      padding:10,
      textAlign:'justify',
      color:'#525252',
      fontSize: 15
    },
}

export default Antrenman
