import React from "react"
import{ImageBackground, StyleSheet, View,Text, SafeAreaView} from "react-native"
import CommonText from "./CommonText"

class SleyBackground extends React.Component
{
  render()
  {
    return(
          <ImageBackground source={require('../../assets/back.jpg')} style={[styles.image,{...this.props.style}]}>
            <SafeAreaView style= {{flex:1}}>
            {this.props.children}
          </SafeAreaView>
          </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({

  image: {
    flex:1,
     resizeMode: "cover",
 },

})

export default SleyBackground
