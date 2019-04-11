import React from 'react'

import {StarProductContainer} from './StarProductstyled'

import starBg from 'assets/images/star.png'

export default props => {
  return(
    <StarProductContainer>
      {
      props.starData.data ? (
        <>
        {
          props.starData.data.items.map(val => {
            return(
              <div
              className='s-box'
              key={val.iid}
              >
                <div className='s-content'>
                <div className='starLogo'>
                  <img src={starBg} alt=""/>
                </div>
                <h3>{ val.item.attr_ext.custom_name }</h3>
                <p> { val.item.attr_ext.custom_summary } </p>
                <div className='s-price'>
                ￥
                  <span> { val.item.price_min/100 } </span>
                </div>
                <div className='sold'>
                  { val.item.saled_count }件已售
                </div>
              </div>
              <div className='s-img'>
                <img src={val.item.pic_url} alt=""/>
              </div>
            </div>  
            )
          })
        }
        </>  
      ):
      (null)
    } 
      
    </StarProductContainer>
  )
}