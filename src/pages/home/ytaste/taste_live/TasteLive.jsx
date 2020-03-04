import React, { Component } from 'react'

import { connect } from 'react-redux'

import TasteLiveUI from './TasteLiveUI'

const mapState = state => ({
  homepage:state.homepage.homepage
})

class TasteLive extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let tasteLive = this.props.homepage.find(item => (item.module_key === 'taste_live')) 
    return ( 
      <TasteLiveUI tasteData={ tasteLive || [] } />
     )
  }
}
 
export default connect(mapState)(TasteLive);