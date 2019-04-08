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