import React from 'react'

import { SwiperContainer } from './Swiperstyled'
import { Carousel,WingBlank } from 'antd-mobile'

export default props => {
 return(
  <SwiperContainer>
    {
      props.banner.items ? (
        <WingBlank>
        <Carousel
          autoplay={false}
          infinite
        >
          {props.banner.items.map(val => (
            // <a
            //   key={val.iid}
            //   href="http://www.alipay.com"
            //   style={{ display: 'inline-block', width: '100%', height: 160 }}
            // >
              <img
                key={val.iid}
                src={ val.item.pic_url }
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));;
                }}
              />
            // </a>
          ))}
        </Carousel>
      </WingBlank>
      // <Carousel>
      //   {
      //     props.banner.items.map(value => (
      //       <img key={value.iid} src={value.item.pic_url} alt=""/>
      //     ))
      //   }
      // </Carousel>
      ):
      (null)
    }
    
  </SwiperContainer>
 ) 
}
  
