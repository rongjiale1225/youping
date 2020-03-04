import React from 'react'

import { FlashSaleContainer } from './FlashSalestyled'

import time from 'assets/images/time.png'

export default props => {
  return(
    <FlashSaleContainer>
      {
        props.flashData.data ? (
          <div className='f-container'>
            <div className='header'>
              <div><span>限时购</span></div>
              <div>
                <img src={ time } alt=""/>
                <span>20点场</span>
                <div className='tiem-container'>
                  <span>01</span>:
                  <span>10</span>:
                  <span>18</span>
                </div>
              </div>
              <div><span>更多</span></div>
            </div>
            <div className='f-content-container'>
              <div className='f-content'>
              {
                props.flashData.data.goods.map(val => (
                  <div className='f-item'
                  key={val.iid}
                  >
                    <div className='f-img'>
                      <img src={ val.item.imgs.img_square } alt=""/>
                      <span> { val.item.discount_desc } </span>
                    </div>
                    <div className='f-text'>
                      <div className='f-title'>
                        { val.item.name }
                      </div>
                      <div className='f-price'>
                        <span>￥{ val.item.flash_price/100 }</span>
                        <span>￥{ val.item.market_price/100 }</span>
                      </div>
                    </div>
                </div>
                ))
              } 
              </div>
            </div>
          </div>
        ):
        (null)
      }
      
    </FlashSaleContainer>
  )
}