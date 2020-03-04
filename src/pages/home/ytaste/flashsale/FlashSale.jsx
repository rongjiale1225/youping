import React, { Component } from 'react'

import { connect } from 'react-redux'

import FlashSaleUI from './FlashSaleUI'

const mapState = state => ({
  homepage:state.homepage.homepage
})

class FlashSale extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let flashsale = this.props.homepage.find(item => (item.module_key === 'flashsale'))
    return ( 
      <FlashSaleUI flashData={flashsale || []} />
     )
  }
}
 
export default connect(mapState)(FlashSale);