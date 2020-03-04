import React, { Component } from 'react'

import {connect} from 'react-redux'

import RecommendUI from './RecommendUI'

const mapState = state => ({
  homepage:state.homepage.homepage
})

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let recommend = this.props.homepage.nowPlayings
    return ( 
      <RecommendUI recommendData={recommend || []}></RecommendUI>
     )
  }
}
 
export default connect(mapState)(Recommend);