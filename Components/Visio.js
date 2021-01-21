import React from 'react'

import SecondBackground from './CustomComponent/SecondBackground'

class Visio extends React.Component {

render(){
    return(
        <SecondBackground title="Visio" isToggleDrawer ={true} {...this.props}>
        
        </SecondBackground>
    )
}
  
}


const styles={

}

export default Visio
