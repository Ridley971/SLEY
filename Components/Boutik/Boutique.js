import React from 'react'
import  {StyleSheet,View,Button,Image,Text,Alert, TouchableOpacity,ScrollView} from 'react-native'
import CommonText from "../CustomComponent/CommonText"
//import {connect} from "react-redux"

import SecondBackground from '../CustomComponent/SecondBackground'

const Boutique =props =>{

    return(
     <SecondBackground title="Boutik" isToggleDrawer ={true} {...props}>

          {false ? (<TouchableOpacity style={[styles.categ_container,{}]}>

            <Text style={[{color:"red"}, styles.categ_title]}>Vêtements & Accessoires</Text>
                <View style={styles.image_container}>

                <Image style={styles.image_categ}  source={require('../../assets/Boutik/v1.jpeg')}/>

                <Image style={styles.image_categ} source={require('../../assets/Boutik/v2.jpeg')}/>

                <Image style={styles.image_categ} source={require('../../assets/Boutik/v3.jpeg')}/>
              </View>
          </TouchableOpacity>) : null }

          <TouchableOpacity style={styles.categ_container} onPress={() => props.navigation.navigate("Natiye")}>

          <Text style={styles.categ_title}>Natiyé</Text>
              <View style={styles.image_container}>

                <Image style={styles.image_categ} source={require('../../assets/Boutik/natiyeB.jpeg')}/>

                <Image style={styles.image_categ} source={require('../../assets/Boutik/natiyeR.jpeg')}/>

                <Image style={styles.image_categ} source={require('../../assets/Boutik/natiyeGourde.jpeg')}/>
              </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categ_container}
          onPress={() => props.navigation.navigate("Alimentation")}>

          <Text style={styles.categ_title}>Alimentation</Text>
              <View style={styles.image_container}>

              <Image style={styles.image_categ}  source={require('../../assets/Boutik/a1.jpeg')}/>

              <Image style={styles.image_categ} source={require('../../assets/Boutik/a2.jpeg')}/>

              <Image style={styles.image_categ} source={require('../../assets/Boutik/a3.jpeg')}/>
              </View>
          </TouchableOpacity>
      </SecondBackground>
    )
  }


const styles = StyleSheet.create({
  categ_container: {
    flex: 1,
    backgroundColor:"white",
    borderColor:"rgba(255, 255, 0, 1)",
    borderWidth:3,
    borderRadius:35,
    marginBottom:25,
    marginTop:25,
    width:"95%",
  },
  touch_container:{
    flexDirection:"row"
  },
  image_container:{
    flex:2,
    alignItems:'center',
     alignSelf:"center",
      flexDirection:'row',},

  //Image
  image_categ:{
    width: '30%',
    marginLeft:10,
  height: undefined,
  aspectRatio: 1,
  },

  //Text
  categ_title:{
    textAlign:'center',
      fontSize: 25,
      fontWeight:"bold"},

  //TouchableOpacity
  touchOption:{
      marginBottom:10,
      padding:10,
      left:50,
      alignSelf:'baseline' // Le parent s'ajuste à l'enfant
  }
})

export default Boutique
/*const mapStateToProps=(state)=>
{
  return state

}
export default connect(mapStateToProps)(Boutique)*/
