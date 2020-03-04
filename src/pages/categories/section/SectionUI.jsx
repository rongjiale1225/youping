import React from 'react'

import {SectionContainer} from './Sectionstyled'

export default props => {
  return(
    <SectionContainer>
      <div className='s-header'>
        <div className='s-title'>{ props.section.attr.name }</div>
        <div className='s-padding'></div>
        <div className='s-back'></div>
      </div>
      <div className='s-container'>
      {
        props.section.recommends.map(val => (
          <div 
          key={val.title}
          className='s-item'
          >
            <img className='image' 
            src={val.img} 
            alt="" />
            <div className='s-title'>{val.title}</div>
            <div className='s-content'>{val.desc}</div>
            <div className='s-star'>
              <img src="//sss.qingting.fm/v2/images/ic_star_full.png" alt="" />
              <img src="//sss.qingting.fm/v2/images/ic_star_full.png" alt="" />
              <img src="//sss.qingting.fm/v2/images/ic_star_full.png" alt="" />
              <img src="//sss.qingting.fm/v2/images/ic_star_full.png" alt="" />
              <img src="//sss.qingting.fm/v2/images/ic_star_full.png" alt="" />
            </div>
          </div>
        ))
      }
      </div>
    </SectionContainer>
  )
}