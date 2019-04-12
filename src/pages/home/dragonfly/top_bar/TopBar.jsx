import React, { Component } from 'react'

import { connect } from 'react-redux'

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
  constructor(props) {
    super(props);
    this.fetchData()
    console.log(this.props)
  }
  render() { 
    return ( 
      <TopBarContainer>
        <div className='logo'>
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
    console.log(2222)
    this.props.fetchData()
  }
}
 
export default connect(mapState,mapDispatch)(TopBar);