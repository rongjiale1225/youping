import React, { Component } from 'react'

import { YtatsteContainer } from './Ytastestyled'
import Header from './Header'
import Swiper from './swiper/Swiper'
import NavList from './navlist/NavList'
import CrowdFunding from './crowd_funding/CrowdFunding'
import ProductHot from './product_hot/ProductHot'

class Flowergift extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <YtatsteContainer>
        <Header></Header>
        <main>
          <div>
            <Swiper></Swiper>
            <NavList></NavList>
            <CrowdFunding></CrowdFunding>
            <ProductHot></ProductHot>
          </div>   
        </main>
      </YtatsteContainer>
     )
  }
}
 
export default Flowergift;