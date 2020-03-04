import React, { Component } from 'react'

import { connect } from 'react-redux'

import StarProductUI from './StarProductUI'

const mapState = state => ({
  homepage:state.homepage.homepage
})

class StarProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let starProduct = this.props.homepage.find(item => (item.module_key === 'star_product'))
    return ( 
      <StarProductUI starData={ starProduct || [] } />
     )
  }
}
 
export default connect(mapState)(StarProduct);