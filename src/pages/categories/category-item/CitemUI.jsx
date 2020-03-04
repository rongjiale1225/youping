import React from 'react'

import {
  CitemContainer,
  BorderdListItem
} from './Citemstyled'

const CitemUI = (props) => {
  return (  
    <CitemContainer>
      <div className='c-header'>
        <div className='c-title'>热门电台</div>
        <div className='c-padding'></div>
      </div>
      <div className='c-list'>
      {
        props.channel.map(val => (
          <BorderdListItem key={val.id+val.name}>
            <div 
            className='c-img'
            style={{backgroundImage:`url(${val.cover})`}}
            > 
            </div>
            <div className='c-title'>{ val.name }</div>
            <div className='c-content'> { val.desc } </div>
          </BorderdListItem>
        ))
      } 
      </div>
    </CitemContainer>
  )
}
 
export default CitemUI;