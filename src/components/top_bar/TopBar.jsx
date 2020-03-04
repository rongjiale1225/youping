import React, { Component } from 'react'

import { connect } from 'react-redux'

import {withRouter} from 'react-router-dom'

import { 
  getHomepageAsync
} from 'pages/home/actionCreator'

import { TopBarContainer } from './TopBarstyled'

const mapState = state => ({
  homepage:state.homepage.homepage
})

const mapDispatch = dispatch => ({
  fetchData(){
    dispatch( getHomepageAsync() )
  }
})

class TopBar extends Component {
  render() {
    return ( 
      <TopBarContainer>
        <div 
        className='logo'
        onClick={() => {this.props.history.push('/')}}
        >
          <img src="http://sss.qingting.fm/v3/QTlogo.png" alt=""  />
        </div>
        <div className= 'text'>
          <img src="http://sss.qingting.fm/v3/SLOGAN@3x.png" alt=""  />  
        </div>
        <div 
        className= 'app'
        >打开APP</div>
      </TopBarContainer>
     )
  }
  fetchData(){
    this.props.fetchData()
  }
}
 
export default withRouter(connect(mapState,mapDispatch)(TopBar))