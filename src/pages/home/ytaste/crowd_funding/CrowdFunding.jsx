import React, { Component } from 'react'

import { connect } from 'react-redux'

import CrowdFundingUI from './CrowdFundingUI'

const mapState = state => ({
  homepage: state.homepage.homepage
})

class CrowdFunding extends Component{
  render(){
    let crowdFunding = this.props.homepage.find(item => (item.module_key === 'crowd_funding'))
    return(
      <CrowdFundingUI crowdData={crowdFunding || []}></CrowdFundingUI>
    )
  }
}

export default connect(mapState)(CrowdFunding) 