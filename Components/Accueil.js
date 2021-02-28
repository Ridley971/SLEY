import React from 'react'
import  {Animated,StyleSheet,View,Image,Text, TouchableOpacity,ScrollView} from 'react-native'
import CommonText from "./CustomComponent/CommonText"
import firestore from '@react-native-firebase/firestore'



import ToggleDrawer from './CustomComponent/ToggleDrawer'


class Accueil extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      hearthSize: new Animated.Value(55),
      user :{name:""}
    }

  }

  componentDidMount() {
      Animated.loop(Animated.timing(
        this.state.hearthSize,
        {
          toValue: 65,
          duration: 750,
          useNativeDriver: false
        }
      )).start() // N'oubliez pas de lancer votre animation avec la fonction start()
  }

//Fonction de calcul de la charge MAX
  calculChargeMAX(poids, reps){
    var chargeMAX=0;

    if (reps<10) {
      chargeMAX = poids /(1.0278-(0.0278*reps))
    } else {
      chargeMAX = poids/(Math.exp(-0.055*reps)*0.419+0.522)
    }
    return Math.round(chargeMAX)
  }

  getClient = async () => {
    const clientDocument = await firestore().collection("Clients").doc("3AXDWMluUtvqZmX0pAec").get()
    console.log(clientDocument)

  }



  render()
  {
    {this.getClient()}
    return(

     <View style={styles.main_container}>
          <ToggleDrawer {...this.props}/>
        <Animated.View style={[styles.animation_view, { width: this.state.hearthSize , height: this.state.hearthSize}]}>
          <TouchableOpacity style={{flex:1}} onPress={()=>this.props.navigation.navigate("Workout")}>
            <Image style={{flex:1, height:null, width:null}} source={require('../assets/cardiogram.png')}/>
          </TouchableOpacity>
        </Animated.View>
          <View style={styles.logo_container}>
          <Image style={{height:100, width:100}} source={require('../assets/icon2.png')}/>
          </View>

          <View style={styles.title_container}>
              <Text style={{
                  fontSize: 55,
                  fontWeight:"bold",
                  color:'#C0C0C0C0'}}>SLEY</Text>
              <Text style={{
                  fontSize: 35,
                  fontWeight:"bold",
                  color:'rgba(255, 255, 0, 1)',
                marginBottom:30}}>Sport Training</Text>

              <CommonText > Nou kontan vwèw <Text style={{color:"rgba(255, 255, 0, 1)"}}>{this.state.user.name}</Text>!</CommonText>
          </View>
          <ScrollView style={styles.options_container}>
              <TouchableOpacity style={styles.touchOption}>
                <View style={styles.touch_container}>
                  <Image style={{height:40, width:40}} source={require('../assets/Gcalendar.png')}/>
                  <Text style={styles.text_Common}> Planning</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchOption}>
                <View style={styles.touch_container}>
                  <Image style={{height:40, width:40}} source={require('../assets/Ginformation.png')}/>
                  <Text style={styles.text_Common}> Infos pratiques</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchOption}>
                <View style={styles.touch_container}>
                  <Image style={{height:40, width:40}} source={require('../assets/Gpartners.png')}/>
                  <Text style={styles.text_Common}> Partenaires</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchOption}>
                <View style={styles.touch_container}>
                  <Image style={{height:40, width:40}} source={require('../assets/Gquestion.png')}/>
                  <Text style={styles.text_Common}>À propos </Text>
                </View>
              </TouchableOpacity>

          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  animation_view:{
     position: 'absolute',
     top:50,
     right:10
  },
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
    marginTop:"25%"
  },
  title_container: {
    flex: 0,
    alignItems:'center',
  },
  options_container: {
    flex: 1,
    borderColor:"rgba(255, 255, 0, 1)",
    borderWidth:3,
    borderRadius:35,
    marginBottom:25,
    marginTop:25,
    width:"90%",
  },
  touch_container:{
    flexDirection:"row"
  },


  //Text
  text_Common:{
      fontSize: 25,
      fontWeight:"bold",
      color:'#C0C0C0C0'
  },

  //TouchableOpacity
  touchOption:{
      marginBottom:10,
      padding:10,
      left:50,
      alignSelf:'baseline' // Le parent s'ajuste à l'enfant
  }
})


export default Accueil