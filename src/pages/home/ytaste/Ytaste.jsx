import React, { Component } from 'react'

import { YtatsteContainer } from './Ytastestyled'
import Header from './Header'
import Swiper from './swiper/Swiper'
import NavList from './navlist/NavList'
import CrowdFunding from './crowd_funding/CrowdFunding'
import ProductHot from './product_hot/ProductHot'
import FlashSale from './flashsale/FlashSale'
import StarProduct from './star_product/StarProduct'
import TasteLive from './taste_live/TasteLive'
import FooterUI from './footer/FooterUI'

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
            <ProductHot sign='top'></ProductHot>
            <FlashSale></FlashSale>
            <ProductHot sign='bottom'></ProductHot>
            <StarProduct></StarProduct>
            <TasteLive></TasteLive>
            <FooterUI></FooterUI>
          </div>   
        </main>
      </YtatsteContainer>
     )
  }
}
 
export default Flowergift;