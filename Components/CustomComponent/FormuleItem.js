// Components/BodyItem.js

import React from 'react'
import { StyleSheet,View,TouchableOpacity, Text } from 'react-native'
import CommonText from "./CommonText"

class FormuleItem extends React.Component {

  render() {
    const { formule, selectFormule } = this.props

    return (
      <View style={styles.item}>
        <View style={{alignItems:"flex-end",padding:5}}>
            <View style={{backgroundColor:"green", borderRadius:10,
                          alignItems:"flex-end"}}>
              <Text style={{fontSize:25}}>{formule.promo}</Text>
            </View>
        </View>

        <View >
          <Text style={styles.txt_Prix}>{formule.prix}</Text>
            <Text style={styles.txt_Libelle}>{formule.libelle}</Text>
          <CommonText style={styles.txt_Detail}>{formule.detail}</CommonText>

          <TouchableOpacity style={styles.touchChoi}
            onPress={() => selectFormule(formule.id)}>
              <Text style={{fontSize: 25}}> Choisir</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles={
  txt_Detail:{
    color:'#525252',
    textAlign:'center',
    fontSize: 18,
    padding:15
  },
  txt_Prix:{
    fontSize: 30,
    fontWeight:'bold',
     textAlign: 'center'
  },
  txt_Libelle:{
      fontSize: 25,
      fontWeight:'bold',
       textAlign: 'center'
    },
  touchChoi:{
    borderColor:'#DCBD10',
    backgroundColor:'#A9A9A9',
    borderWidth:3,
    borderRadius:35,
    marginVertical: 5,marginHorizontal: 90,alignItems:'center'
  },
item:{
  flex:1,
  backgroundColor:"rgba(255, 255, 0, 0.7)",
  marginVertical: 15,
  marginHorizontal: 16,
  borderRadius:25,
  },

  text_body:{
    color:'#C0C0C0C0',
    fontSize:25,
    fontWeight: 'bold'
  }
}

export default FormuleItem
