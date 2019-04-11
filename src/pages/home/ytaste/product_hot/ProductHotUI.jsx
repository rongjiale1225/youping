import React from 'react'
import {ProductHotContainer} from './ProductHotstyled'

export default props => {
  return(
    <ProductHotContainer>
      {
         props.hotData.data ?(
         <div className='p-container'>
          <ul>
            {
              props.hotData.data.items.map(val => {
                return(
                  <li
                  key={val.iid}
                  >
                    <div className='p-item'>
                      <div className='p-img'>
                        <div className='p-img-item'>
                          <img src={val.item.pic_url} alt=""/>
                        </div>
                        <div className='p-img-tags'>
                          {
                            val.item.tags ? (
                              val.item.tags.map(value => {
                                return(
                                  <span
                                  key={value.name}
                                  style={{
                                    background:value.color
                                  }}
                                  > {value.name} </span>
                                )
                              })
                            ):
                            (null)
                          }
                        </div>
                      </div>
                      <div className='p-content'>
                        <p>{ val.item.name }</p>
                        <div>￥<span>{ val.item.price_min/100 }</span></div>
                      </div>
                    </div>
                  </li>  
                )
              })
            }
          </ul>
      </div>):
      (null)
      }
    </ProductHotContainer>
  )
}