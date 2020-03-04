import React, { Component } from 'react'

import {connect} from 'react-redux'

import ItemUI from './ItemUI'

const mapState = state => ({
  homepage:state.homepage.homepage
})

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() { 
    return ( 
      <ItemUI recommends={this.props.itemData}></ItemUI>
     )
  }
}
 
export default connect(mapState)(Item)