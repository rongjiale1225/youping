import React, { Component } from 'react';

import { connect } from 'react-redux'

import { getHomepageAsync } from 'pages/home/actionCreator'

import SwiperUI from './SwiperUI'


const mapState = state => ({
  homepage: state.homepage.homepage
})

const mapDispatch = dispatch => ({
  fetchData(){
    dispatch( getHomepageAsync() )
  }
})


class Swiper extends Component {
  constructor(props){
    super(props)
    this.fetchData()
  }
  
  render() {
    let filteredBanner =  this.props.homepage.find(item => (item.module_key === 'banner')) || [] 
    return ( 
      <SwiperUI banner={ filteredBanner.data || [] } />
     )
  }

  fetchData(){
    this.props.fetchData()
  }
}
 
export default connect(mapState,mapDispatch)(Swiper);