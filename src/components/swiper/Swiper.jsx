import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import {connect} from 'react-redux'

import SwiperUI from './SwiperUI'

const mapState = state => ({
  homepage:state.homepage.homepage
})

class Swiper extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() {
    let path = this.props.location.pathname 
    let banner = path === '/home' ? this.props.homepage.banners : this.props.banner
    return ( 
      <SwiperUI bannerData={banner}></SwiperUI>
     )
  }
}
 
export default withRouter(connect(mapState)(Swiper))