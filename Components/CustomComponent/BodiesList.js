// Components/BodiesList.js

import React , {useState} from 'react'
import { FlatList,SafeAreaView } from 'react-native'
import BodyItem from './BodyItem'
//import { connect } from 'react-redux'

const BodiesList = (props)=>{

    const [selectedbody, setSelectBody] = useState()

  const _selectTxGraisse = (bodyId) =>{


    if (selectedbody===0 || selectedbody != bodyId)
    {
        setSelectBody( bodyId );
        //this.props.dispatch(action)
        props.setIdTaux(bodyId)
    }
    else {
      setSelectBody( 0 );
      props.setIdTaux(0)
      //this.props.dispatch(action)
    }
    


  }
    return (
       <SafeAreaView  style={{flex:1, alignItems:"center"}}>
        <FlatList
          style={{flex:1,}}
          data={props.bodies}
          keyExtractor={(item) => item.id.toString()}
          horizontal= {true}
          renderItem=
          {
            ({item}) =>
              {
                if (props.sexe === item.sexe.toString())
                {
                  return (
                    <BodyItem body={item}
                    isSelected={item.id ===selectedbody?true:false}
                    selectTxGraisse={_selectTxGraisse}/>
                  )
                }
              }
          }
        />
        </SafeAreaView>
    )
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
