import React from 'react'
import {StyleSheet, View, Text,Image, TouchableOpacity} from 'react-native'

import SleyBackground from './CustomComponent/SleyBackground'

import { connect } from 'react-redux'

const Workout =props =>{
    return(
        <View style={{flex:1,backgroundColor:"black"}}>
          <View style= {styles.header}>

          <TouchableOpacity
            onPress={() => props.navigation.goBack(null)}
             style={{ width:40, height:40,left:"15%",}} >
            <Image
            style={{flex:1,width:null, height:null}}
            source={require("../assets/close.png")}/>
          </TouchableOpacity>

            <Text style={{flex:2,
              textAlign:"center", color:"yellow",
              fontSize:25, fontWeight:"bold"}}>
                1 h 00
            </Text>


            <TouchableOpacity
              onPress={() => props.navigation.navigate("Alimentation")}
              style={{right:"15%",width:55, height:55, borderWidth:3,borderRadius:30,
              backgroundColor:"yellow", borderColor:"white",}}>
                <Image
                style={{flex:1,width:null, height:null}}
                source={require("../assets/water.png")}/>
            </TouchableOpacity>
          </View>
          <View style={{flex:12}}>
              <View style={{flex:0.5,
               justifyContent:"center",}}>
                  <Text style={{
                    textAlign:"center",
                     color:"#C0C0C0C0",
                    fontSize:30, fontWeight:"bold",}}>
                      Tirage Vertical devant
                  </Text>
              </View>
              <View style={{flex:2, }}>
                  <Image
                  style={{flex:1, borderRadius: 60,width:null, height:null}}
                  source={require("../assets/muscu1.gif")}/>
                  </View>
              <View style={{flex:1, top: 25}}>
                <View style={{flex:1, flexDirection:"row"}}>
                  <Text style={{flex:1,fontWeight:"bold",color:"#C0C0C0C0",fontSize:24}}> Série: 1/4</Text>
                  <Text style={{flex:1,color:"#C0C0C0C0",fontWeight:"bold",fontSize:24, textAlign: 'right'}}> Répétion: 15</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{flex:1,color:"#C0C0C0C0",fontWeight:"bold",fontSize:24, textAlign:"center"}}> Charge: 20 KG</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{flex:1,color:"#C0C0C0C0",fontWeight:"bold",fontSize:24, textAlign:"center"}}> Bouton</Text>
                </View>

              </View>
          </View>
        </View>
    )
  }



const styles={
  header: {
      flex: 1,
      flexDirection:"row",
      paddingTop: "15%",
  },

}

export default Workout
