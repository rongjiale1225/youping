<<<<<<< HEAD
import React, { Component } from 'react'

import {connect} from 'react-redux'
import { 
  getHomepageAsync
} from 'pages/home/actionCreator'

import {HomeContainer} from './Homestyled'

import TapBar from 'components/top_bar/TopBar'
import CateGory from 'components/category/CateGory'
import Recommend from '../dragonfly/recommend/Recommend'
import Swiper from 'components/swiper/Swiper'
import Item from '../dragonfly/item/Item'

const mapState = state => ({
  homepage:state.homepage.homepage
})

const mapDispatch = dispatch => ({
  fetchData(){
    dispatch( getHomepageAsync() )
  }
})

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.fetchData()
  }
  render() { 
    return ( 
      <HomeContainer>
        {
          this.props.homepage.sections ? (
            <div className='container'>
              <TapBar></TapBar>
              <CateGory></CateGory>
              <Recommend></Recommend>
              <Swiper></Swiper>
              {
                this.props.homepage.sections.map(val => {
                  return(
                    <Item
                    key={val.category.id}
                    itemData={val}
                    ></Item>
                  ) 
                }) 
              } 
            </div>
          ):
          (null)
        }
      </HomeContainer>
     )
  }
  fetchData(){
    this.props.fetchData()
  }
}
 
export default connect(mapState,mapDispatch)(Home)
=======
import React, { Component } from 'react'

import { Homecontainer } from './Homestyled'

import HomeTabs from './HomeTabs'

class Home extends Component {
  render() { 
    return ( 
      <Homecontainer>
        <HomeTabs></HomeTabs>
      </Homecontainer>
     )
  }
}
 
export default Home;
>>>>>>> bf2addf4826ee14591362b5ed21547115ca91a2a
