import React from 'react'

import {
  AttributeContainer,
  BorderdAitem
} from './Attributestyled'

export default (props) => {
  return(
    <AttributeContainer>
      <div className='a-row'>
      {
        props.attribute.slice(0,3).map(val => (
          <BorderdAitem key={val.id}>
            {val.name}
          </BorderdAitem>
        ))
      }
        <div className='a-more'>更多&nbsp;&nbsp;&nbsp;&nbsp;></div>
      </div>
    </AttributeContainer>
  )
}