import React from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

import {SwiperContainer} from './Swiperstyled'

const SwiperUI = (props) => {
  return ( 
    <SwiperContainer>
      {
        props.bannerData ? (
          <WingBlank>
            <Carousel
              autoplay={true}
              infinite
              dots={false}
            >
              {props.bannerData.map(val => (
                // <a
                //   key={val.categoryId}
                //   href="http://www.alipay.com"
                //   style={{ display: 'inline-block', width: '100%', height:'100%' }}
                // >
                  <img
                    key={val.channelId}
                    src={val.img}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                    }}
                  />
                // </a>
              ))}
            </Carousel>
          </WingBlank>
        ):
        (null)
      }
      
    </SwiperContainer>
   )
}
 
export default SwiperUI;