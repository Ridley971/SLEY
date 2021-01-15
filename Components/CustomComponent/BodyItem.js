// Components/BodyItem.js

import React from 'react'
import { StyleSheet, Image,TouchableHighlight, Text,View } from 'react-native'

class BodyItem extends React.Component {

  render() {
    const { body, selectTxGraisse, isSelected } = this.props
    return (
        <TouchableHighlight
         style={isSelected ? styles.touchOpPress : styles.touchOp}
         onPress={() =>  selectTxGraisse(body.id)}
         >
          <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
            <Image
              style={styles.image}
              source={body.image}
            />
            <Text style={styles.text_body}> {body.title}</Text>
          </View>
        </TouchableHighlight>
    )
  }

}

const styles={

  touchOp:{
      width: 200,
      height: 400,
    alignItems:'center',
    justifyContent:"center",
    marginBottom:20,

  },
  touchOpPress:{
      width: 200,
      height: 400,
    alignItems:'center',
    borderWidth:5,
    borderColor:"yellow",
    borderRadius:20,
    marginBottom:20

  },
  image:{
    width: 90,
    height: 300
  },

  text_body:{
    color:'#C0C0C0C0',
    fontSize:25,
    fontWeight: 'bold',
    textAlign:"center"

  }
}

export default BodyItem
