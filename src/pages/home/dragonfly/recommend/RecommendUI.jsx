import React from 'react'

import {RecommendContainer} from './Recommendstyled'
import { Carousel, WingBlank } from 'antd-mobile';

const RecommendUI = (props) => {
  return ( 
    <RecommendContainer>
      <div className='r-icon'></div>
      <div className='r-main'>
      {
        props.recommendData ? (
          <WingBlank>
          <Carousel className="my-carousel"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplay
            infinite
          >
          <div  className="v-item"></div>
          <div  className="v-item"></div>
          <div  className="v-item"></div>
          {
            props.recommendData.map(val => {
              return(
                <div 
                className="v-item"
                key={val.channelId}
                >正在直播&nbsp;:{val.programTitle} &nbsp;-&nbsp; {val.channelTitle}</div>
              )
            })   
          }
          <div  className="v-item"></div>
          </Carousel>
        </WingBlank>
        ):
        (null)
      }
      </div>
      <div className='r-btn'></div>
    </RecommendContainer>
   )
  }
 
export default RecommendUI;