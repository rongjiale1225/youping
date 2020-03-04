import React, { Component } from 'react'

import AttributeUI from './AttributeUI'

class Attribute extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <AttributeUI attribute={this.props.attribute}/>
     )
  }
}
 
export default Attribute