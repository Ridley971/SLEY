import React from 'react'
import {Text} from 'react-native'

class CommonText extends React.Component {
  render() {
    return (
        <Text style={[
          {fontSize: 25,fontWeight:"bold", color:"#C0C0C0C0"},
          {...this.props.style}
        ]}>
        {this.props.children}
        </Text>
    );
  }
}

export default CommonText
