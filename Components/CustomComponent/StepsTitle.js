import React from "react"
import {StyleSheet, View, Text} from "react-native"
import CommonText from "./CommonText"

class StepsTitle extends React.Component
{
      render()
      {
        return(
          <View style={[styles.title_container,{...this.props.style}]}>
            <CommonText
                style={{fontSize: 25, textAlign:"center", paddingTop: 20}}>
            {this.props.children}
          </CommonText>
          </View>
        )
      }

}

const styles =StyleSheet.create({
  /*title_container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",

  },*/
})
export default StepsTitle
