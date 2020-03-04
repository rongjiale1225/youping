import React, { Component } from 'react'

import CitemUI from './CitemUI'

class Citem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <CitemUI channel={this.props.channel} />
     )
  }
}
 
export default Citem