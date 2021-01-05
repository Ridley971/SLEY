import React from 'react'
import { TouchableOpacity,StyleSheet, Image, Text,View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const  ToggleDrawer =({navigation})=>(
  <TouchableOpacity style={{ position:'absolute',top:50, left:15}}
    onPress={() => navigation.toggleDrawer()}>
    <Icon name="menu" size={35} color="white" />
  </TouchableOpacity>
    )


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
}

export default ToggleDrawer
