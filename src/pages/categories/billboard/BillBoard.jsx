import React, { Component } from 'react'

import BillBoardUI from './BillboardUI'

class BillBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <BillBoardUI billboard={this.props.billboard} />
    )
  }
}
 
export default BillBoard