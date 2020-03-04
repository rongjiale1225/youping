import React from 'react'

import { CrowdFundingContainer } from './CrowdFundingstyled'

export default props => {
  return(
    <CrowdFundingContainer> 
      <h1>
        <div>
          小米众筹
        </div>
        <span>更多</span>
      </h1>
      {
      props.crowdData.data ? (
        <>
        <div className='crowd-container'>
          <div className='crowd-item'>
            <div className='c-item-top'>
              <div className='c-item-content'>
                <h3>{props.crowdData.data.items[0].item.name }</h3>
                <p>{props.crowdData.data.items[0].item.summary}</p>
                <div>￥<span>{ (props.crowdData.data.items[0].item.market_price)/100 }</span></div>
              </div>
              <div className='c-img-container'>
                <img src={props.crowdData.data.items[0].item.pic_url} alt=""/>
              </div>
            </div>
            <div className='c-item-bottom'>
              <div className='c-bottom-content'>
              <span> { props.crowdData.data.items[0].item.saled_count } </span>
              <span> 人支持 </span>
              {
                props.crowdData.data.items[0].item.tags ? (
                  props.crowdData.data.items[0].item.tags.map(val => {
                      return(
                        <span
                        key={val.name}
                        style={
                          {background:val.color}
                        }
                        >{val.name}</span>
                      )
                    }) 
                ):
                (null)
              }
              <span> { props.crowdData.data.items[0].item.progress } %</span>
              </div>
              <div className='c-bottom-color'>
                <div 
                className='c-color'
                style={{
                  width:props.crowdData.data.items[0].item.progress > 100 ?
                    100 + '%' : props.crowdData.data.items[0].item.progress
                    + '%' 
                }}
                ></div>
              </div>
            </div>
          </div>
          <div className='c-item-container'>
          {
            props.crowdData.data.items.splice(1,2).map(val => {
              return(
              <div 
              className='c-item'
              key={val.iid}
              > 
                <div className='c-container'>
                  <h3> { val.item.name } </h3>
                  <div>
                    <span>{ val.item.market_price/100 }起</span>
                    <div className='img-box'>
                      <img src={ val.item.pic_url } alt=""/>
                    </div>
                  </div>
                </div>
                <div className='c-bottom'>
                  <div className='c-bottom-text'>
                    <span> { val.item.saled_count }人支持 </span>
                    {
                      val.item.tags.map(value => {
                        return(
                          <span
                          key={value.name}
                          style={
                            {background:value.color}
                          }
                          >{value.name}</span>
                        )
                      }) 
                    }
                    
                    <span> { val.item.progress } %</span>
                  </div>
                  <div className='c-bottom-color'>
                  <div 
                  className='c-color'
                  style={{
                    width:val.item.progress > 100 ?
                      100 +"%" : val.item.progress
                      + '%' 
                  }}
                  ></div>
                  </div>
                </div>
              </div>
              )
            })
          }
          </div>
        </div>
      </>
      ):
      (null)
    }
    </CrowdFundingContainer>
  )
}