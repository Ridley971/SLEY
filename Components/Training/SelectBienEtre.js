import React from 'react'
import {StyleSheet, View,Image, Text,TouchableOpacity, ScrollView} from 'react-native'
import SecondBackground from '../CustomComponent/SecondBackground'

const SelectBienEtre =()=>(
    <View style={styles.main_container}>
      <View style={styles.logo_container}>
       <Image style={{height:70, width:70}} source={require('../../assets/icon2.png')}/>
      </View>

      <View>
          <Text style={{
              fontSize: 35,
              marginBottom:20,
              fontWeight:"bold",
              color:'#C0C0C0C0',
            }}>Bien Être</Text>
       </View>
     </View>

)
const styles = StyleSheet.create({
  //Containers
  main_container: {
    flex: 1,
    backgroundColor:'black',
    alignItems:"center"
  },
  logo_container: {
    flex: 0,
    alignItems:'center',
    justifyContent:'center',
    marginTop:"5%",
  },
})

export default SelectBienEtre
