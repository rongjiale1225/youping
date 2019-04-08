import React, { Component } from 'react'

import { connect } from 'react-redux'

import CrowdFundingUI from './CrowdFundingUI'

const mapState = state => ({
  homepage: state.homepage.homepage
})

class CrowdFunding extends Component{
  render(){
    return(
      <CrowdFundingUI crowdData={this.props.homepage[3] || []}></CrowdFundingUI>
    )
  }
}

export default connect(mapState)(CrowdFunding) 