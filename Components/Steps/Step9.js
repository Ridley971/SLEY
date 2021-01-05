import React from 'react'
import {StyleSheet,View, Text, SafeAreaView, FlatList,TouchableOpacity} from 'react-native'
import FormuleItem from '../CustomComponent/FormuleItem'
import SleyBackground from '../CustomComponent/SleyBackground'
import StepsTitle from '../CustomComponent/StepsTitle'
import formules from '../../Helpers/Formules'
//import {connect} from "react-redux"

class Step9 extends React.Component {

  _selectFormule= (idForm) =>
  {
    /*const action = { type: "UPDATE_FORM", value: idForm }
    this.props.dispatch(action)*/
    this.props.navigation.popToTop()
  }

  render()
  {

    this.props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={()=> this.props.navigation.popToTop()}>
                <Text style={{
                  fontWeight:'bold'}}>
                Connexion
                </Text>
          </TouchableOpacity>
        ),
      })

    return(
      <SleyBackground>
          <StepsTitle style={{flex:1, justifyContent:"center"}}> Les Formules</StepsTitle>

            <SafeAreaView style={styles.container}>
              <FlatList
                data={formules}

                renderItem=
                {
                  ({item}) =>
                    {
                        return (<FormuleItem formule={item}
                          selectFormule={this._selectFormule}/>)
                    }

                }
                 //keyExtractor={(item) => item.id.toString() }
              />
            </SafeAreaView>
      </SleyBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  }
});


export default Step9
/*const mapStateToProps=(state)=>
{
  return {idForm: state.idForm}

}
export default connect(mapStateToProps)(Step9)*/
