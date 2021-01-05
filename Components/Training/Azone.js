import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { connect } from 'react-redux'

class Azone extends React.Component {

  render()
  {
    return(

        <View style={{flex:1,backgroundColor:"purple", justifyContent:'center'}}>
          <Text style={{textAlign:"center"}}>Antrenman Zone</Text>
        </View>
    )
  }
}


const styles={

}

export default Azone
