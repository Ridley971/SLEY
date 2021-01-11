import React from 'react'

import SecondBackground from './CustomComponent/SecondBackground'
class Planning extends React.Component {

  render()
  {
    return(

        <SecondBackground title="Mes Réservations" isToggleDrawer ={true} {...this.props}>
        </SecondBackground>
    )
  }
}


const styles={

}

export default Planning
