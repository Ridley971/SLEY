import React from 'react'
import {ImageBackground,StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

import SecondBackground from '../CustomComponent/SecondBackground'

class Tutos extends React.Component {

  render()
  {
    return(
      <SecondBackground title="Tutos" isToggleDrawer ={true} {...this.props}>

            <View style={styles.tutos_categ}>
                <TouchableOpacity style={styles.tchOp}>
                    <ImageBackground source={require('../../assets/diet.jpg')} style={styles.imgBackground}>

                        <Text style={styles.imgText}>
                                      DIET
                        </Text>

                    </ImageBackground>
                  </TouchableOpacity>
                  <View style={{flex:0.2}}/>
                  <TouchableOpacity style={styles.tchOp}>
                    <ImageBackground source={require('../../assets/stretching.jpg')} style={styles.imgBackground}>

                        <Text style={styles.imgText}>
                                      SOUPLESSE
                        </Text>

                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={styles.tutos_categ}>
            <TouchableOpacity style={styles.tchOp}>
                <ImageBackground source={require('../../assets/sport.jpg')} style={styles.imgBackground}>

                    <Text style={styles.imgText}>
                                  ANTREMAN
                    </Text>

                </ImageBackground>
              </TouchableOpacity>

              <View style={{flex:0.2}}/>

              <TouchableOpacity style={styles.tchOp}>
                <ImageBackground source={require('../../assets/yoga1.jpg')} style={styles.imgBackground}>

                    <Text style={styles.imgText}>
                                  YOGA
                    </Text>

                </ImageBackground>
            </TouchableOpacity>

          </View>
       </SecondBackground>
    )
  }
}


const styles = StyleSheet.create({
  tutos_categ:{flex:2,flexDirection:"row",justifyContent:'space-between'},
  imgBackground:{  flex:1, resizeMode: "cover", justifyContent:"center",},
  tchOp:{flex:2, padding:20},
  imgText:{fontWeight:'bold', textAlign:"center",fontSize:24, color:'gold'}

})

export default Tutos
