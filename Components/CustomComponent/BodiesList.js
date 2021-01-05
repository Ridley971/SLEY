// Components/BodiesList.js

import React from 'react'
import { StyleSheet, FlatList,SafeAreaView } from 'react-native'
import BodyItem from './BodyItem'
//import { connect } from 'react-redux'

class BodiesList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bodies: [],
      selectedbody:0
    }
  }

  _selectTxGraisse = (bodyId) =>
  {
    const action = { type: this.props.actionTaux, value: bodyId }

    if (this.state.selectedbody===0 ||
      this.state.selectedbody != bodyId)
    {
        this.setState({ selectedbody:bodyId });
        //this.props.dispatch(action)
    }
    else {
      this.setState({ selectedbody:0 });
      //this.props.dispatch(action)
    }


  }

  render() {
    return (
       <SafeAreaView  style={{flex:1, alignItems:"center"}}>
        <FlatList
          style={{flex:1}}
          data={this.props.bodies}
          keyExtractor={(item) => item.id.toString()}
          horizontal= {true}
          renderItem=
          {
            ({item}) =>
              {
                if (this.props.sexe === item.sexe.toString())
                {
                  return (
                    <BodyItem body={item}
                    isSelected={item.id ===this.state.selectedbody?true:false}
                    selectTxGraisse={this._selectTxGraisse}/>
                  )
                }
              }
          }
        />
        </SafeAreaView>
    )
  }
}

export default BodiesList
/*const mapStateToProps = (state) => {
  return {
    sexe:state.sexe,
    idTxAct: state.idTxAct,
    idTxCible:state.idTxCible
 }
}

export default connect(mapStateToProps)(BodiesList)*/
