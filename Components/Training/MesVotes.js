import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { connect } from 'react-redux'
import SecondBackground from '../CustomComponent/SecondBackground'
class MesVotes extends React.Component {

  render()
  {
    return(

        <SecondBackground title="Mes Votes" isToggleDrawer ={true} {...this.props}>
        </SecondBackground>
    )
  }
}


const styles={

}

export default MesVotes
